const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

let redEffectActive     = false;
let rgbSplitActive      = false;
let greenScreenActive   = false;
let ghostEffectActive   = false;


function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error('OH NO!!', err);
        });
}

function paintToCanvas() {
    const { videoWidth: width, videoHeight: height } = video;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        // Paint the current video input onto the canvas
        ctx.drawImage(video, 0, 0, width, height);

        // Grab the pixel data
        let pixels = ctx.getImageData(0, 0, width, height);

        // Apply filters
        if(redEffectActive)
            pixels = redEffect(pixels);
        if(rgbSplitActive)
            pixels = rgbSplit(pixels);
        if(greenScreenActive)
            pixels = greenScreen(pixels);

        // Finally, paint the pixels to the canvas
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // Play sound
    snap.currentTime = 0;
    snap.play();

    // Get data from canvas
    const data = canvas.toDataURL('image/jpeg');

    // Create a download link
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsom');
    link.innerHTML = `<img src="${data}" alt="handsom" />`;

    // Put that in our page
    strip.insertBefore(link, strip.firstChild);
}

// Filters
function redEffect(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 100;   // R
        pixels.data[i + 1] -= 50;    // G
        pixels.data[i + 2] *= 0.5;   // B
        // pixels[i + 3];       // A
    }
    console.log(pixels.data[0], pixels.data[1], pixels.data[2]);

    return pixels;
}

function rgbSplit(pixels) {
    // By copying the current RGB pixels to a couple key locations in the pixel buffer,
    // we create this cool, strange echo effect
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];   // R
        pixels.data[i + 100] = pixels.data[i + 1];   // G
        pixels.data[i - 150] = pixels.data[i + 2];   // B
    }
    console.log(pixels.data[0], pixels.data[1], pixels.data[2]);

    return pixels;
}

function greenScreen(pixels) {
    let levels = {};
    let red, blue, green, alpha;

    document.querySelectorAll('.rgb input').forEach(input => levels[input.name] = input.value);

    for (var i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];

        if(red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
          // take it out!
          pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

// Toggles
function toggleRedEffect() {
    redEffectActive = !redEffectActive;
}
function toggleRgbSplit() {
    rgbSplitActive = !rgbSplitActive;
}
function toggleGreenScreen() {
    greenScreenActive = !greenScreenActive;
}
function toggleGhostEffect() {
    ghostEffectActive = !ghostEffectActive;
    if(ghostEffectActive)
        ctx.globalAlpha = 0.1;
    else
        ctx.globalAlpha = 1;
}
getVideo();

video.addEventListener('canplay', paintToCanvas);
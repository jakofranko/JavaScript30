const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let widthDirection = true;

// Drawing lines basically consists of 
// 1. Beginning a new path
// 2. Moving the 'cursor' (only used in the canvas, not the mouse cursor) to a starting location
// 3. 'lining' to a new location
// 4. Stroking the line
//
// This happens dozens of times per second, and that's how we get this drawing effect,
// by tying the locations to the location of the mouse
function draw(e) {
    if(!isDrawing) return;

    // Rainbow colors!
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // Start path
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // Update lastX and lastY
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // RAINBOW
    hue++;
    if(hue >= 360) 
        hue = 0;

    // Change line width!
    if(ctx.lineWidth >= 175 || ctx.lineWidth <= 1)
        widthDirection = !widthDirection;
    
    widthDirection ? ctx.lineWidth++ : ctx.lineWidth--;
}


// Event listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;

    // Before we do any drawing (since mouse move will happen only after this function is called)
    // we need to set the lastX and lastY to the current mouse position
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
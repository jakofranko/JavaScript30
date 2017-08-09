let pressed = [];
const secretcode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b', 'Enter'];
window.addEventListener('keyup', e => {
    pressed.push(e.key);
    pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);
    if(pressed.join('').includes(secretcode.join('')))
        cornify_add();
});
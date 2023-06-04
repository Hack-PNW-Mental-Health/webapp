window.addEventListener(`load`, ()=>{
    let canvas = document.getElementById(`canvas`);
    let ctx = canvas.getContext(`2d`);

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function startDrawing(e) {
        lastX = e.offsetX;
        lastY = e.offsetY;

        isDrawing = true;
    }
    function draw(e) {
        if(!isDrawing) {
            return;
        }

        ctx.beginPath();
        ctx.strokeStyle = `black`;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
    function stopDrawing(e) {
        isDrawing = false;
    }

    canvas.addEventListener(`mousedown`, startDrawing);
    canvas.addEventListener(`mousemove`, draw);
    canvas.addEventListener(`mouseup`, stopDrawing);
    canvas.addEventListener(`mouseout`, stopDrawing);
});
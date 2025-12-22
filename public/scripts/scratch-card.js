const frame = document.getElementById("frame-card");
const canvas = document.getElementById("scratcher");
const ctx = canvas.getContext("2d");

canvas.width = frame.clientWidth;
canvas.height = frame.clientHeight;

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#C0C0C0");
gradient.addColorStop(1, "#808080");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;

canvas.addEventListener("mousemove", (e) => {
    isDrawing = true;
    scratch(e);
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvas.addEventListener("pointerdown");

function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function scratch(e) {
    const pos = getPos(e);
    const x = pos.x;
    const y = pos.y;

    console.log(x,y);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI );
    ctx.fill();
}
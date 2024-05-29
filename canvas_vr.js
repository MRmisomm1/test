function resizeCanvas() {
    const canvas = document.getElementById('gameCanvas');
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientWidth * 0.5; 
}

window.addEventListener('resize', resizeCanvas);

document.addEventListener('DOMContentLoaded', function() {
    resizeCanvas();
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    function drawVR() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        
        const scale = canvas.width / 800;
        
        ctx.fillStyle = '#333';
        ctx.fillRect(200 * scale, 100 * scale, 400 * scale, 200 * scale);

        ctx.fillStyle = '#555';
        ctx.beginPath();
        ctx.arc(300 * scale, 200 * scale, 50 * scale, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(500 * scale, 200 * scale, 50 * scale, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = '#222';
        ctx.fillRect(200 * scale, 80 * scale, 400 * scale, 20 * scale);

        ctx.fillStyle = '#222';
        ctx.beginPath();
        ctx.moveTo(200 * scale, 100 * scale);
        ctx.lineTo(150 * scale, 150 * scale);
        ctx.lineTo(150 * scale, 250 * scale);
        ctx.lineTo(200 * scale, 300 * scale);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(600 * scale, 100 * scale);
        ctx.lineTo(650 * scale, 150 * scale);
        ctx.lineTo(650 * scale, 250 * scale);
        ctx.lineTo(600 * scale, 300 * scale);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#777';
        ctx.beginPath();
        ctx.arc(300 * scale, 200 * scale, 30 * scale, 0, 2 * Math.PI); 
        ctx.arc(500 * scale, 200 * scale, 30 * scale, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = '#999';
        ctx.beginPath();
        ctx.arc(300 * scale, 200 * scale, 10 * scale, 0, 2 * Math.PI);
        ctx.arc(500 * scale, 200 * scale, 10 * scale, 0, 2 * Math.PI); 
        ctx.fill();
    }

    drawVR();

    window.addEventListener('resize', drawVR);
});
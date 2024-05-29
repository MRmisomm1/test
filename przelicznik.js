function calculateFPS() {
    const cpuValue = parseFloat(document.getElementById('cpu').value);
    const gpuValue = parseFloat(document.getElementById('gpu').value);
    const ramValue = parseFloat(document.getElementById('ram').value);
    const resolutionValue = parseFloat(document.getElementById('resolution').value);

    const baseFPS = 144; 

    const calculatedFPS = baseFPS * cpuValue * gpuValue * ramValue * resolutionValue;
    document.getElementById('result').innerText = `Przewidywany FPS: ${Math.round(calculatedFPS)}`;
}
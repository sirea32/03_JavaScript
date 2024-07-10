function applySettings() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontColor = document.getElementById('fontColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const outputText = document.getElementById('outputText').value;

    const fontWeight = document.querySelector('input[name="fontWeight"]:checked').value;
    const textAlign = document.querySelector('input[name="textAlign"]:checked').value;
    const verticalAlign = document.querySelector('input[name="verticalAlign"]:checked').value;

    const outputBox = document.getElementById('outputBox');
    const output = document.getElementById('output');

    outputBox.style.width = `${width}px`;
    outputBox.style.height = `${height}px`;
    outputBox.style.backgroundColor = bgColor;

    output.style.fontSize = `${fontSize}px`;
    output.style.color = fontColor;
    output.style.fontWeight = fontWeight;

    output.innerText = outputText;

    // Adjust vertical alignment
    if (verticalAlign === 'top') {
        outputBox.style.alignItems = 'flex-start';
    } else if (verticalAlign === 'center') {
        outputBox.style.alignItems = 'center';
    } else if (verticalAlign === 'bottom') {
        outputBox.style.alignItems = 'flex-end';
    }

    // Adjust horizontal alignment
    if (textAlign === 'left') {
        outputBox.style.justifyContent = 'flex-start';
    } else if (textAlign === 'center') {
        outputBox.style.justifyContent = 'center';
    } else if (textAlign === 'right') {
        outputBox.style.justifyContent = 'flex-end';
    }
}

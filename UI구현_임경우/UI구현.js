function applySetting() {
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  const fontSize = document.getElementById('fontSize').value;
  const fontColor = document.getElementById('fontColor').value;
  const bgColor = document.getElementById('bgColor').value;
  const outputText = document.getElementById('outputText').value;

  const fontWeight = document.querySelector('input[name="fontWeight"]:checked').value;
  const textAlign = document.querySelector('input[name="textAlign"]:checked').value;
  const vertiAlign = document.querySelector('input[name="vertiAlign"]:checked').value;

  const outputBox = document.getElementById('outputBox');
  const output = document.getElementById('output');

  outputBox.style.width = `${width}px`;
  outputBox.style.height = `${height}px`;
  outputBox.style.backgroundColor = bgColor;

  output.style.fontSize = `${fontSize}px`;
  output.style.color = fontColor;
  output.style.fontWeight = fontWeight;
  output.style.textAlign = textAlign;

  output.innerText = outputText;

  if(vertiAlign === 'top'){
      outputBox.style.alignItems = 'flex-start';
  } else if (vertiAlign === 'middle'){
      outputBox.style.alignItems = 'center';
  } else if (vertiAlign === 'bottom'){
      outputBox.style.alignItems = 'flex-end';
  }

  if(textAlign === 'left'){
    outputBox.style.justifyContent = 'left';
} else if (textAlign === 'center'){
    outputBox.style.justifyContent = 'center';
} else if (textAlign === 'right'){
    outputBox.style.justifyContent = 'right';
}
}

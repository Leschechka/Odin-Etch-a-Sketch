const screen = document.getElementById('screen')


function createPixels(number) {
  for (let i = 0; i < number; i++) {
    const div = document.createElement('div')
    div.classList.add('row')
    screen.appendChild(div)

    for (let j = 0; j < number; j++) {
      const subdiv = document.createElement('div')
      subdiv.classList.add('pixel')
      div.appendChild(subdiv)
    }
  }
}


createPixels(3)

screen.addEventListener(
  'mouseover',
  event => (event.target.style.backgroundColor = 'black')
)


let userChoice = 0

const scaleBtn = document.getElementById('scale');
scaleBtn.addEventListener('click', () => {
  const userChoice = parseInt(prompt('Choose from 1 to 100', '4'));
  if (typeof userChoice == 'number' && userChoice >= 1 && userChoice <= 100) {
    screen.innerHTML = ""
    screen.style.backgroundColor = 'white';
    createPixels(userChoice)
  }
});

screen.addEventListener('dblclick', () => {
  let pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white'
  }
});

const colorPickerBtn = document.getElementById('colorpicker');
colorPickerBtn.addEventListener('input', () => {
  const color = colorPickerBtn.value;
  screen.addEventListener(
    'mouseover',
    event => (event.target.style.backgroundColor = color)
  )
});

function returnRandomNumber() {
  return Math.floor(Math.random() * (255 - 1 + 1)) + 1
}

const rgbBtn = document.getElementById('rgb');
rgbBtn.addEventListener('click', (event) => {
  screen.addEventListener('mouseover', (event) => {
    const color1 = returnRandomNumber()
    const color2 = returnRandomNumber()
    const color3 = returnRandomNumber()
    event.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
  })

})
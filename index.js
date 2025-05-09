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


createPixels(16)

screen.addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'black');

const resetBtn = document.getElementById('reset');
const pixels = document.querySelectorAll('.pixel');
screen.addEventListener('dblclick', () => {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white'
  }
})                
const lovemeEL = document.querySelector('.loveMe')
const timesEL = document.querySelector('#times')


let clickTime = 0
let timesClicked = 0


lovemeEL.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createLight(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createLight = (e) => {
    const light = document.createElement('i')
    light.classList.add('fa-regular')
    light.classList.add('fa-lightbulb')

    const x = e.clientX
    const y = e.clientY



    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset


    light.style.top = `${yInside}px`
    light.style.left = `${xInside}px`

    lovemeEL.appendChild(light)
    timesEL.innerHTML = ++timesClicked

    setInterval(() => light.remove(), 1000)
}
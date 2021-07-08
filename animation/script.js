const elem = document.querySelector('.elem'),
	stop = document.querySelector('.stop'),
	reset = document.querySelector('.reset')

let count = 0,
    interval

const animation = () => {
	interval = requestAnimationFrame(animation)

	count++
	if (count < 900) {
		elem.style.left = count + 'px'
	} else cancelAnimationFrame(interval)
}

let animStatus = true

stop.addEventListener('click', () => {
	if (animStatus) {
		interval = requestAnimationFrame(animation)
		animStatus = false
	} else {
		animStatus = true
		cancelAnimationFrame(interval)
	}
})

reset.addEventListener('click', () => {
	elem.style.left = 0 + 'px'
	count = 0
	cancelAnimationFrame(interval)
	animStatus = true
})

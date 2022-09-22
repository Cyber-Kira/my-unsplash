export const observeScroll = () => {
	let scrollPos = 0
	const nav = document.querySelector('.expand-on-scroll')

	const checkPosition = () => {
		const windowY = window.scrollY
		if (windowY < scrollPos && nav) {
			// Scrolling UP
			nav.classList.add('animate-bubbleExpand')
			nav.classList.remove('animate-bubbleShrink')
		} else if (nav) {
			// Scrolling DOWN
			nav.classList.add('animate-bubbleShrink')
			nav.classList.remove('animate-bubbleExpand')
		}
		scrollPos = windowY
	}

	window.addEventListener('scroll', checkPosition)
}

export const onScrollHeight = (topHeight: number) => {
	let scrollPos = 0
	const nav = document.querySelector('.expand-at-bottom')

	const checkPosition = () => {
		const windowY = window.scrollY ?? 0

		if ((scrollPos > topHeight || windowY > topHeight) && nav) {
			nav.classList.add('animate-bubbleExpand')
			nav.classList.add('opacity-100')
			nav.classList.remove('animate-bubbleShrink')
		} else if (nav) {
			nav.classList.add('animate-bubbleShrink')
			nav.classList.remove('animate-bubbleExpand')
		}
		scrollPos = windowY
	}

	window.addEventListener('scroll', checkPosition)
}

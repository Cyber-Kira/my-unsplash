import { ReactNode } from 'react'

export const observeScroll = () => {
	let scrollPos = 0
	const nav = document.querySelector('.expand-on-scroll')

	const checkPosition = () => {
		const windowY = window.scrollY
		const windowWidth = window.innerWidth
		if (windowY < scrollPos && nav && windowWidth < 768) {
			// Scrolling UP
			nav.classList.add('animate-bubbleExpand')
			nav.classList.remove('animate-bubbleShrink')
		} else if (nav && windowWidth < 768) {
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
			nav.classList.remove('opacity-0')
			nav.classList.remove('animate-bubbleShrink')
		} else if (nav) {
			nav.classList.add('animate-bubbleShrink')
			nav.classList.remove('animate-bubbleExpand')
		}
		scrollPos = windowY
	}

	window.addEventListener('scroll', checkPosition)
}

export const checkIfImageExists = (
	url: string,
	callback: (isExists: boolean) => ReactNode
) => {
	const img = new Image()
	img.src = url

	if (!img.complete) {
		return callback(false)
	}

	img.onload = () => {
		return callback(true)
	}
	img.onerror = () => {
		return callback(false)
	}

	return callback(true)
}

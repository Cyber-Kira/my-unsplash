import React, { useEffect } from 'react'
import { onScrollHeight } from '../../utils'

export const BackToTop = () => {
	useEffect(() => {
		onScrollHeight(2000)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<button
			type='button'
			className='flex justify-center items-center fixed bottom-24 right-5 xl:right-20 p-4 rounded-full shadow-button bg-white text-dark opacity-0 expand-at-bottom'
			onClick={() => scrollToTop()}
		>
			<span className='material-icons'>keyboard_arrow_up</span>
		</button>
	)
}

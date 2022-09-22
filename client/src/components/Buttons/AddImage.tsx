import React, { useEffect } from 'react'
import { observeScroll } from '../../utils'

export const AddImage = () => {
	useEffect(() => {
		observeScroll()
	}, [])

	return (
		<button
			type='button'
			className='flex justify-center items-center fixed bottom-5 right-5 p-4 rounded-full shadow-button bg-accentGreen text-white expand-on-scroll'
		>
			<span className='material-icons'>add</span>
		</button>
	)
}

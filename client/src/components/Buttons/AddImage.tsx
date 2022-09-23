import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setIsOpen } from '../../features/ui/uiSlice'
import { observeScroll } from '../../utils'

export const AddImage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		observeScroll()
	}, [])

	const handleClick = () => {
		dispatch(setIsOpen(true))
	}

	return (
		<button
			type='button'
			className='flex justify-center items-center fixed bottom-5 right-5 p-4 rounded-full shadow-button bg-accentGreen text-white expand-on-scroll md:relative md:ml-auto md:rounded-xl md:inset-0'
			onClick={handleClick}
		>
			<span className='material-icons block md:hidden'>add</span>
			<span className='font-noto font-bold text-base leading-[22px] text-white hidden md:block'>
				Add a photo
			</span>
		</button>
	)
}

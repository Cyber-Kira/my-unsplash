/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addImage, fetchImages } from '../../features/file/fileSlice'
import { setIsAddImageOpen } from '../../features/ui/uiSlice'

export const PhotoFormPopup = () => {
	const { isAddImageOpen } = useAppSelector(store => store.ui)
	const [label, setLabel] = useState('')
	const [url, setUrl] = useState('')
	const dispatch = useAppDispatch()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		dispatch(addImage({ label, url }))
		dispatch(setIsAddImageOpen(false))
		setLabel('')
		setUrl('')
	}

	const handleClose = () => {
		setLabel('')
		setUrl('')
		dispatch(setIsAddImageOpen(false))
	}

	return (
		<form
			className={`fixed flex flex-col px-8 py-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-[38.75rem] bg-white rounded-xl shadow-button z-20 ${
				isAddImageOpen
					? 'scale-100 opacity-100'
					: 'scale-75 opacity-0 pointer-events-none'
			} transition-all`}
			onSubmit={e => handleSubmit(e)}
		>
			<h2 className='font-noto font-medium text-2xl leading-[32px] text-dark mb-5'>
				Add a new photo
			</h2>
			<label className='relative' htmlFor='label'>
				<span className='block w-full mb-2 font-noto font-medium text-sm text-lightDark'>
					Label
				</span>
				<div className='w-full min-h-[3.4375rem]'>
					<input
						className='absolute w-full min-h-[3.4375rem] px-[1.125rem] border border-lightDark shadow-button focus:outline-none rounded-xl'
						placeholder='Water bottle'
						type='text'
						name='label'
						id='label'
						required
						value={label}
						onChange={e => setLabel(e.target.value)}
					/>
				</div>
			</label>
			<label className='relative mt-[1.125rem]' htmlFor='photo-url'>
				<span className='block w-full mb-2  font-noto font-medium text-sm text-lightDark'>
					Photo URL
				</span>
				<div className='w-full min-h-[3.4375rem]'>
					<input
						className='absolute w-full min-h-[3.4375rem] px-[1.125rem] border border-lightDark shadow-button focus:outline-none rounded-xl truncate'
						placeholder='https://images.unsplash.com/photo-1663915943941-9e3b66fe1e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
						required
						type='text'
						name='photo-url'
						id='photo-url'
						value={url}
						onChange={e => setUrl(e.target.value)}
					/>
				</div>
			</label>
			<div className='flex mt-6 gap-1'>
				<button
					className='ml-auto max-w-[6.5625rem] min-h-[3.4375rem] w-full rounded-xl font-medium text-base leading-[22px] text-gray'
					type='button'
					onClick={handleClose}
				>
					Close
				</button>
				<button
					className='max-w-[6.5625rem] min-h-[3.4375rem] w-full bg-accentGreen rounded-xl font-noto font-bold text-base leading-[22px] text-white'
					type='submit'
				>
					Submit
				</button>
			</div>
		</form>
	)
}

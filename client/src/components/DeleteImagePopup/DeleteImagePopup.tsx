import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteImage } from '../../features/file/fileSlice'
import { setIsDeleteImageOpen } from '../../features/ui/uiSlice'

export const DeleteImagePopup = () => {
	const { isDeleteImageOpen, id } = useAppSelector(store => store.ui)
	const dispatch = useAppDispatch()
	const [password, setPassword] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		dispatch(deleteImage({ id, password }))
		dispatch(setIsDeleteImageOpen(false))
		setPassword('')
	}

	const handleClose = () => {
		setPassword('')
		dispatch(setIsDeleteImageOpen(false))
	}

	return (
		<form
			className={`fixed flex flex-col px-8 py-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-[38.75rem] bg-white rounded-xl shadow-button z-20 ${
				isDeleteImageOpen
					? 'scale-100 opacity-100'
					: 'scale-75 opacity-0 pointer-events-none'
			} transition-all`}
			onSubmit={e => handleSubmit(e)}
		>
			<h2 className='font-noto font-medium text-2xl leading-[32px] text-dark mb-5'>
				Are you sure?
			</h2>
			<label className='relative' htmlFor='label'>
				<span className='block w-full mb-2 font-noto font-medium text-sm text-lightDark'>
					Password
				</span>
				<div className='w-full min-h-[3.4375rem]'>
					<input
						className='absolute w-full min-h-[3.4375rem] px-[1.125rem] border border-lightDark shadow-button focus:outline-none rounded-xl'
						placeholder='******************'
						type='password'
						name='password'
						id='password'
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
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
					className='max-w-[6.5625rem] min-h-[3.4375rem] w-full bg-accentRed rounded-xl font-noto font-bold text-base leading-[22px] text-white'
					type='submit'
				>
					Delete
				</button>
			</div>
		</form>
	)
}

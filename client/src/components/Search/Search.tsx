import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchImages } from '../../features/file/fileSlice'

export const Search = () => {
	const dispatch = useAppDispatch()
	const [searchString, setSearchString] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(fetchImages(searchString))
	}

	const handleClick = () => {
		setSearchString('')
		dispatch(fetchImages(''))
	}

	return (
		<form
			className='relative w-full h-[3.4375rem] max-w-[18.75rem] rounded-xl border border-gray'
			onSubmit={e => handleSubmit(e)}
		>
			<span className='material-icons absolute left-4 z-10 top-1/2 -translate-y-1/2 pointer-events-none'>
				search
			</span>
			<input
				className='absolute truncate inset-0 indent-14 pr-3 rounded-xl focus:outline-none'
				placeholder='Search by name'
				type='text'
				name='search'
				value={searchString}
				onChange={e => setSearchString(e.currentTarget.value)}
			/>
			<button
				type='button'
				className={`absolute right-2 top-1/2 -translate-y-1/2 ${
					searchString.length > 0 ? 'visible' : 'invisible'
				}`}
				onClick={() => handleClick()}
			>
				<span className='material-icons flex'>close</span>
			</button>
		</form>
	)
}

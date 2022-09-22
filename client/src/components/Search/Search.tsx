import React from 'react'

export const Search = () => {
	return (
		<div className='relative w-full h-[3.4375rem] rounded-xl border border-gray'>
			<span className='material-icons absolute left-4 z-10 top-1/2 -translate-y-1/2 pointer-events-none'>
				search
			</span>
			<input
				className='absolute truncate inset-0 indent-14 pr-2 rounded-xl focus:outline-none'
				placeholder='Search by name'
				type='text'
				name='search'
			/>
		</div>
	)
}

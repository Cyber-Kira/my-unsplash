import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchImages } from '../../features/file/fileSlice'

export const Gallery = () => {
	const { images } = useAppSelector(store => store.file)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchImages())
	}, [])

	return (
		<div className='grid gap-2 mt-2'>
			{images.map(image => {
				return (
					<figure key={`${image.url}`}>
						<img
							className='rounded-2xl'
							src={`${image.url}`}
							alt={`${image.label}`}
						/>
					</figure>
				)
			})}
		</div>
	)
}

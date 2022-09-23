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
		<div
			className='grid md:grid-cols-3 gap-3 xl:gap-x-[2.9063rem] xl:gap-y-[2.875rem] mt-2'
			data-packery='{ "itemSelector": ".grid-item", "gutter": 10 }'
		>
			{images.map(image => {
				return (
					<figure className='grid-item' key={`${image.id}`}>
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

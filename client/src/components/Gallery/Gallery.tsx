import React, { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchImages } from '../../features/file/fileSlice'

const breakpointColumnsObj = {
	default: 3,
	500: 1,
}

export const Gallery = () => {
	const { images } = useAppSelector(store => store.file)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchImages())
	}, [])

	return (
		<div className='mt-2'>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{images.map(image => {
					return (
						<figure key={`${image.id}`}>
							<img
								className='rounded-2xl'
								src={`${image.url}`}
								alt={`${image.label}`}
							/>
						</figure>
					)
				})}
			</Masonry>
		</div>
	)
}

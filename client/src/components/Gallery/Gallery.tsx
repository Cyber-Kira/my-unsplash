/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { deleteImage, fetchImages } from '../../features/file/fileSlice'
import {
	saveCurrentImageSelected,
	setIsDeleteImageOpen,
} from '../../features/ui/uiSlice'
import { checkIfImageExists } from '../../utils'
import { DeleteImagePopup } from '../DeleteImagePopup/DeleteImagePopup'
import ErrorImage from './error.png'

const breakpointColumnsObj = {
	default: 3,
	500: 1,
}

export const Gallery = () => {
	const { images, isLoading } = useAppSelector(store => store.file)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchImages())
	}, [])

	const handleClick = (body: { id: string }) => {
		dispatch(setIsDeleteImageOpen(true))
		dispatch(saveCurrentImageSelected({ id: body.id }))
	}

	const imageSkeleton = Array.from(Array(9).keys()).map(item => {
		return (
			<figure
				key={item}
				className='w-full bg-gray h-72 rounded-2xl animate-pulse overflow-hidden'
			/>
		)
	})

	return (
		<div className='mt-2'>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{isLoading
					? imageSkeleton
					: images.map(image => {
							return checkIfImageExists(image.url, exists => {
								if (!exists) {
									return (
										<figure
											className='w-full bg-[#e6e6e6] h-72 rounded-2xl overflow-hidden'
											key={image.id}
										>
											<div className='relative grid place-items-center w-full h-full'>
												<div className='absolute flex flex-col inset-0 hover:bg-backDark transition-all overflow-hidden group'>
													<h2 className='flex font-montserrat font-bold text-lg leading-[21px] text-white mt-auto mb-[2rem] ml-[1.5rem] group-hover:animate-slideIn opacity-0 transition-all w-3/4 line-clamp-3 order-2'>
														{image.label}
													</h2>
													<button
														type='button'
														className='order-1 ml-auto mr-[1.125rem] mt-[1.125rem] px-[.9375rem] py-[.3125rem] font-montserrat font-medium text-xs leading-[12px] text-accentRed border border-accentRed rounded-full opacity-0 group-hover:opacity-100 transition-opacity'
														onClick={() => handleClick({ id: image.id })}
													>
														delete
													</button>
												</div>
												<div className='flex flex-col items-center justify-center'>
													<img src={ErrorImage} alt='Error' />
													<p className='font-montserrat text-xl text-dark uppercase'>
														Image not found
													</p>
												</div>
											</div>
										</figure>
									)
								}

								return (
									<figure
										key={`${image.id}`}
										className='relative rounded-2xl overflow-hidden'
									>
										<div className='absolute flex flex-col inset-0 hover:bg-backDark transition-all overflow-hidden group'>
											<h2 className='flex font-montserrat font-bold text-lg leading-[21px] text-white mt-auto mb-[2rem] ml-[1.5rem] group-hover:animate-slideIn opacity-0 transition-all w-3/4 line-clamp-3 order-2'>
												{image.label}
											</h2>
											<button
												type='button'
												className='order-1 ml-auto mr-[1.125rem] mt-[1.125rem] px-[.9375rem] py-[.3125rem] font-montserrat font-medium text-xs leading-[12px] text-accentRed border border-accentRed rounded-full opacity-0 group-hover:opacity-100 transition-opacity'
												onClick={() => handleClick({ id: image.id })}
											>
												delete
											</button>
										</div>
										<img src={`${image.url}`} alt={`${image.label}`} />
									</figure>
								)
							})
					  })}
			</Masonry>
		</div>
	)
}

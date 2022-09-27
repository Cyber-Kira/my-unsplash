import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
import { AddImage } from '../Buttons/AddImage'
import { BackToTop } from '../Buttons/BackToTop'
import { DeleteImagePopup } from '../DeleteImagePopup/DeleteImagePopup'
import { Gallery } from '../Gallery/Gallery'
import { PhotoFormPopup } from '../PhotoFormPopup/PhotoFormPopup'
import { Search } from '../Search/Search'
import logo from './my_unsplash_logo.svg'

export const App = () => {
	const { isDeleteImageOpen, isAddImageOpen } = useAppSelector(
		store => store.ui
	)

	useEffect(() => {
		if (isDeleteImageOpen || isAddImageOpen) {
			document.body.classList.add('stop-scrolling')
		} else {
			document.body.classList.remove('stop-scrolling')
		}
	}, [isDeleteImageOpen, isAddImageOpen])

	return (
		<div className='px-3 md:px-12 xl:px-0 pt-4 md:pt-8 container max-w-7xl m-auto'>
			<nav className='flex items-center pb-8 md:pb-[4.6875rem]'>
				<button type='button' onClick={() => window.location.reload()}>
					<img className='mr-8' src={logo} alt='logo' />
				</button>
				<Search />
				<BackToTop />
				<PhotoFormPopup />
				<DeleteImagePopup />
				<AddImage />
			</nav>
			<Gallery />
			<div
				className={`fixed inset-0 bg-backDarkLighter ${
					isDeleteImageOpen || isAddImageOpen ? 'visible' : 'invisible'
				}`}
			/>
		</div>
	)
}

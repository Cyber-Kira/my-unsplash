import React from 'react'
import { AddImage } from '../Buttons/AddImage'
import { BackToTop } from '../Buttons/BackToTop'
import { DeleteImagePopup } from '../DeleteImagePopup/DeleteImagePopup'
import { Gallery } from '../Gallery/Gallery'
import { PhotoFormPopup } from '../PhotoFormPopup/PhotoFormPopup'
import { Search } from '../Search/Search'
import logo from './my_unsplash_logo.svg'

export const App = () => {
	return (
		<div className='px-3 md:px-12 xl:px-0 pt-4 md:pt-8 container max-w-7xl m-auto'>
			<nav className='flex items-center pb-8 md:pb-[4.6875rem]'>
				<img className='mr-8' src={logo} alt='logo' />
				<Search />
				<BackToTop />
				<PhotoFormPopup />
				<DeleteImagePopup />
				<AddImage />
			</nav>
			<Gallery />
		</div>
	)
}

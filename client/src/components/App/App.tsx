import React from 'react'
import { AddImage } from '../Buttons/AddImage'
import { BackToTop } from '../Buttons/BackToTop'
import { Gallery } from '../Gallery/Gallery'
import { Search } from '../Search/Search'
import logo from './my_unsplash_logo.svg'

export const App = () => {
	return (
		<div className='px-3 pt-4 md:pt-8'>
			<nav className='flex pb-8 md:pb-[4.6875rem]'>
				<img className='mr-8' src={logo} alt='logo' />
				<Search />
				<AddImage />
				<BackToTop />
			</nav>
			<Gallery />
		</div>
	)
}

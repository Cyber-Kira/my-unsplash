import { createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
	isOpen: boolean
}

const initialState: InitialStateInterface = {
	isOpen: false,
}

export const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		setIsOpen: (state, { payload }) => {
			state.isOpen = payload
		},
	},
})

export const { setIsOpen } = uiSlice.actions

import { createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
	isAddImageOpen: boolean
	isDeleteImageOpen: boolean
	canBeDeleted: boolean
	id: string
	password: string
}

const initialState: InitialStateInterface = {
	isAddImageOpen: false,
	isDeleteImageOpen: false,
	canBeDeleted: false,
	id: '',
	password: '',
}

export const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		setIsAddImageOpen: (state, { payload }) => {
			state.isAddImageOpen = payload
		},
		setIsDeleteImageOpen: (state, { payload }) => {
			state.isDeleteImageOpen = payload
		},
		setCanBeDeleted: (state, { payload }) => {
			state.canBeDeleted = payload
		},
		saveCurrentImageSelected: (state, { payload }) => {
			state.id = payload.id
		},
	},
})

export const {
	setIsAddImageOpen,
	setIsDeleteImageOpen,
	setCanBeDeleted,
	saveCurrentImageSelected,
} = uiSlice.actions

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ImagesInterface {
	id: string
	label: string
	url: string
}

interface InitialStateInterface {
	isLoading: boolean
	images: ImagesInterface[] | null
}

const initialState: InitialStateInterface = {
	isLoading: false,
	images: null,
}

export const fetchImages = createAsyncThunk(
	'file/fetchImages',
	async (searchString: string) => {
		const images = fetch('https://my-unsplash-v0rc.onrender.com/gallery')
			.then(res => res.json())
			.then((data: ImagesInterface[]) => {
				return data.filter(({ label }) =>
					label.toLowerCase().includes(searchString.toLowerCase())
				)
			})

		return images
	}
)

export const addImage = createAsyncThunk(
	'file/addImage',
	async ({ label, url }: { label: string; url: string }) => {
		const newImageCollection = fetch(
			'https://my-unsplash-v0rc.onrender.com/upload',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ label, url }),
			}
		)
			.then(res => res.json())
			.then(data => data)

		return newImageCollection
	}
)

export const deleteImage = createAsyncThunk(
	'file/deleteImage',
	async ({ id, password }: { id: string; password: string }) => {
		const newImageCollection = fetch(
			'https://my-unsplash-v0rc.onrender.com/delete',
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id, password }),
			}
		)
			.then(res => res.json())
			.then(data => data)

		return newImageCollection
	}
)

export const fileSlice = createSlice({
	name: 'fileSlice',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(fetchImages.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchImages.fulfilled, (state, { payload }) => {
				state.images = payload
				state.isLoading = false
			})
			.addCase(fetchImages.rejected, state => {
				state.isLoading = false
			})
			.addCase(addImage.pending, state => {
				state.isLoading = true
			})
			.addCase(addImage.fulfilled, (state, { payload }) => {
				state.images = payload
				state.isLoading = false
			})
			.addCase(addImage.rejected, state => {
				state.isLoading = false
			})
			.addCase(deleteImage.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteImage.fulfilled, (state, { payload }) => {
				state.images = payload
				state.isLoading = false
			})
			.addCase(deleteImage.rejected, state => {
				state.isLoading = false
			}),
})

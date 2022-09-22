import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ImagesInterface {
	label: String
	url: String
}

interface InitialStateInterface {
	isLoading: boolean
	images: ImagesInterface[]
}

const initialState: InitialStateInterface = {
	isLoading: false,
	images: [{ label: '', url: '' }],
}

export const fetchImages = createAsyncThunk('file/images', async () => {
	const images = fetch('https://my-unsplash-v0rc.onrender.com/gallery')
		.then(res => res.json())
		.then(data => data)

	return images
})

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
			}),
})

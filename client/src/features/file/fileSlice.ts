import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ImagesInterface {
	id: String
	label: String
	url: String
}

interface InitialStateInterface {
	isLoading: boolean
	images: ImagesInterface[]
}

const initialState: InitialStateInterface = {
	isLoading: false,
	images: [{ id: '', label: '', url: '' }],
}

export const fetchImages = createAsyncThunk('file/images', async () => {
	const images = fetch('http://localhost:5000/gallery')
		.then(res => res.json())
		.then(data => data)

	return images
})

export const addImage = createAsyncThunk(
	'file/addImage',
	async ({ label, url }: { label: string; url: string }) => {
		const newImageCollection = fetch('http://localhost:5000/upload', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ label, url }),
		})
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
			}),
})

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { fileSlice } from '../features/file/fileSlice'
import { uiSlice } from '../features/ui/uiSlice'

export const store = configureStore({
	reducer: {
		file: fileSlice.reducer,
		ui: uiSlice.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

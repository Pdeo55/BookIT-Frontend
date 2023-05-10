import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import eventService from "./eventService";

const initialState = {
    events: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// create new event
export const createEvent = createAsyncThunk(
    'events/create',
    async (userData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await eventService.addEvent(userData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// get all events
export const getAllEvent = createAsyncThunk(
    'events/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await eventService.getEvents(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events.push(action.payload)
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events = action.payload
            })
            .addCase(getAllEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = eventSlice.actions
export default eventSlice.reducer
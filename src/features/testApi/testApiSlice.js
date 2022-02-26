import { createSlice} from '@reduxjs/toolkit'

export const testApiSlice = createSlice({
    name: 'testApi',
    initialState: {
        data: []
    },
    reducers: {
        setUsers: (state,action) => {
            state.data = action.payload
        }
    }
})

export const { setUsers } = testApiSlice.actions

export default testApiSlice.reducer
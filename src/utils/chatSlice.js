import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
name : "chat",
initialState : {messages : []},
reducers : {
    addMessage : (state,action) => {
           state.messages.splice(10,1);//we are doing this so that our UI does not crash and it restricts the messages to be 10 only, after 10 it will delete old messages from live chat
           state.messages.unshift(action.payload);
    }
}
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;
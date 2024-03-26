import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contacts = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (contacts) => ({
        payload: {
          id: nanoid(),
          ...contacts,
        },
      }),
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.items = state.items.filter((contact) => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = contacts.actions;
export default contacts.reducer;
export const selectContacts = (state) => state.contacts.items;

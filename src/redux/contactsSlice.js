import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const initialState = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      },
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

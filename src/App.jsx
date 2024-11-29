import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice"; 

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.items || []);
  const filter = useSelector(selectNameFilter); 
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox /> 
      <ContactList users={filteredContacts} onDelete={handleDeleteContact} /> 
    </div>
  );
}

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import Contact from "../Contact/Contact";
import style from "./contactlist.module.css";
import {deleteContact } from "../../redux/contactsSlice"; 
import { selectNameFilter } from "../../redux/filtersSlice";
export default function ContactList() {
  const dispatch = useDispatch(); 
  const contacts = useSelector((state) => state.contacts.contacts.items || []);
  const filter = useSelector(selectNameFilter); 

 
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 
  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts available</p>;
  }

  
  const handleDelete = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div className={style.boxList}>
      {filteredContacts.map((user) => (
        <Contact
          key={user.id}
          name={user.name}
          phone={user.number}
          id={user.id}
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

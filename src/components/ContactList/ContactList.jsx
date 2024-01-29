import React, { useState, useEffect } from 'react';
import ContactItem from './ContactItem';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Citeste contactele din localStorage la incarcarea componentei
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const addContact = newContact => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    // Salveaza contactele in localStorage la adaugarea unui nou contact
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
    // Salveaza contactele in localStorage la stergerea unui contact
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h1>Contact Book</h1>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;

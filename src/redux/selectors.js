export const selectFilteredContacts = state => {
  return state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });
};

export const getContacts = state => state.contacts;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });
};

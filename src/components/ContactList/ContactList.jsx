import { useSelector } from 'react-redux';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectFilteredContacts } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length > 0) {
    return (
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
};

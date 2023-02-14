import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.phonebookWraper}>
        <h1 className={css.mainHeader}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.sectionHeader}>Contacts</h2>
        <Filter />
        <ContactList />
        <ToastContainer />
      </div>
    </div>
  );
};

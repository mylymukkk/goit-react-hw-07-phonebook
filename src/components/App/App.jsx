import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThreeDots } from 'react-loader-spinner';

import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.phonebookWraper}>
        <h1 className={css.mainHeader}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.sectionHeader}>Contacts</h2>
        <Filter />
        {isLoading && !error && (
          <ThreeDots color="#1976d2" width="30" height="30" />
        )}
        <ContactList />
        <ToastContainer />
      </div>
    </div>
  );
};

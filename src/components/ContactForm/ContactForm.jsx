import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { notification } from 'components/Notification/Notification';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    contacts.find(
      ({ name, number }) =>
        name === form.elements.name.value &&
        number === form.elements.number.value
    )
      ? notification(form.elements.name.value)
      : dispatch(
          addContact(form.elements.name.value, form.elements.number.value)
        );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.inputLabel} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Tom Holland"
          className={css.input}
        />
        <label className={css.inputLabel} htmlFor="phone">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
          placeholder="999-99-99"
        />
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};

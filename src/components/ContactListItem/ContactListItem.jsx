import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { HiX } from 'react-icons/hi';

import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const { name, phone, id } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.item}>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        <HiX />
      </button>
      {name}:&nbsp;<span className={css.phoneNumber}>{phone}</span>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

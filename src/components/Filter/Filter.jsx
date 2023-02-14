import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChanged = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterLabel} htmlFor="findByName">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        id="findByName"
        onChange={e => onFilterChanged(e.target.value)}
      />
    </div>
  );
};

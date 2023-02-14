import { toast } from 'react-toastify';

export const notification = name =>
  toast.info(`${name} is already in the phonebook with the same number`, {
    autoClose: 2500,
  });

import { forwardRef } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  placeholder?: string;
  name: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, name }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.searchForm__input}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    );
  },
);

import { forwardRef } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.searchForm__input}
        type="text"
        name="search_data_name"
        placeholder={placeholder}
      />
    );
  },
);

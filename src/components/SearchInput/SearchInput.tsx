import { ChangeEventHandler, forwardRef } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, name, onChange, value }, ref) => {
    return (
      <input
        onChange={onChange}
        ref={ref}
        className={styles.searchForm__input}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
      />
    );
  },
);

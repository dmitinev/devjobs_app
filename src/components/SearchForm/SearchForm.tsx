import { useRef } from 'react';
import FilterIcon from '../../assets/mobile/icon-filter.svg?react';
import { SearchInput } from '../../components/SearchInput';
import styles from './SearchForm.module.scss';

interface ISearchFormProps {
  placeholderTitle?: string;
  placeholderLocation?: string;
}

export const SearchForm = ({
  placeholderTitle,
  placeholderLocation,
}: ISearchFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  return (
    <form className={styles.searchForm} autoComplete="off">
      <label
        className={(styles.searchForm__label, styles.searchForm__label__name)}
      >
        <SearchInput ref={nameRef} placeholder={placeholderTitle} />
      </label>
      <label
        className={
          (styles.searchForm__label, styles.searchForm__label__location)
        }
      >
        <SearchInput ref={locationRef} placeholder={placeholderLocation} />
      </label>
      <FilterIcon className={styles.searchForm__icon_filter} />
      <button type="submit" className={styles.searchForm__search_btn}></button>
    </form>
  );
};

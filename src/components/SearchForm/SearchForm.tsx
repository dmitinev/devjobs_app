import { useRef } from 'react';
import LocationIcon from '../../assets/desktop/icon-location.svg?react';
import SearchIcon from '../../assets/desktop/icon-search.svg?react';
import FilterIcon from '../../assets/mobile/icon-filter.svg?react';
import { SearchInput } from '../../components/SearchInput';
import useWindowDimensions from '../../hooks/useWindowDimensions';
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
  const windowWidth = useWindowDimensions().width;

  return (
    <form className={styles.searchForm} autoComplete="off">
      <SearchIcon className={styles.searchForm__icon_search} />
      <label
        className={(styles.searchForm__label, styles.searchForm__label__name)}
      >
        <SearchInput
          name="searchInput-data-name"
          ref={nameRef}
          placeholder={placeholderTitle}
        />
      </label>
      <LocationIcon className={styles.searchForm__icon_location} />
      <label
        className={
          (styles.searchForm__label, styles.searchForm__label__location)
        }
      >
        <SearchInput
          name='name="searchInput-data-location"'
          ref={locationRef}
          placeholder={placeholderLocation}
        />
      </label>
      <FilterIcon className={styles.searchForm__icon_filter} />
      <label className={styles.searchForm__checkboxLabel}>
        <input
          type="checkbox"
          className={styles.searchForm__checkbox}
          name="fulltime"
        />
        {windowWidth > 1440 ? 'Full Time Only' : 'Full Time'}
      </label>
      <button type="submit" className={styles.searchForm__search_btn}>
        Search
      </button>
    </form>
  );
};

import FilterIcon from '../../assets/mobile/icon-filter.svg?react';
import styles from './SearchForm.module.scss';

interface ISearchFormProps {
  placeholderTitle?: string;
  placeholderLocation?: string;
}

export const SearchForm = ({
  placeholderTitle,
  placeholderLocation,
}: ISearchFormProps) => {
  return (
    <form className={styles.searchForm} autoComplete="off">
      <label
        className={(styles.searchForm__label, styles.searchForm__label__name)}
      >
        <input
          className={styles.searchForm__input}
          type="text"
          name="search_data_name"
          placeholder={placeholderTitle}
        />
      </label>
      <label
        className={
          (styles.searchForm__label, styles.searchForm__label__location)
        }
      >
        <input
          className={styles.searchForm__input}
          type="text"
          name="search_data_location"
          placeholder={placeholderLocation}
        />
      </label>
      <FilterIcon className={styles.searchForm__icon_filter} />
      <button type="submit" className={styles.searchForm__search_btn}></button>
    </form>
  );
};

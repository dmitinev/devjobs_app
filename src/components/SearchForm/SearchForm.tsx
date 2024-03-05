import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import LocationIcon from '../../assets/desktop/icon-location.svg?react';
import SearchIcon from '../../assets/desktop/icon-search.svg?react';
import FilterIcon from '../../assets/mobile/icon-filter.svg?react';
import { ModalFilter } from '../../components/ModalFilter';
import { SearchInput } from '../../components/SearchInput';
import { ApiDataContext } from '../../context/apiDataContext/ApiDataContext';
import { SearchDataContext } from '../../context/searchDataContext/SearchDataContext';
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
  const [isModalMobileShown, setIsModalMobileShown] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const {
    searchDataLocation,
    handleSearchDatLocation,
    isFullTime,
    handleIsFullTime,
    searchDataName,
    handleSearchDataName,
  } = useContext(SearchDataContext);

  const { setFilteredApiData } = useContext(ApiDataContext);

  const handleFilterMobileClick = () => {
    setIsModalMobileShown((prev) => !prev);
  };

  const handleModalClose = () => {
    setIsModalMobileShown(false);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchDataName(e.target.value);
  };

  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchDatLocation(e.target.value);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleIsFullTime(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilteredApiData({
      searchDataName,
      searchDataLocation,
      isFullTime,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.searchForm}
        autoComplete="off"
      >
        <SearchIcon className={styles.searchForm__icon_search} />
        <label
          className={(styles.searchForm__label, styles.searchForm__label__name)}
        >
          <SearchInput
            name="searchInput-data-name"
            placeholder={placeholderTitle}
            value={searchDataName}
            onChange={handleChangeName}
          />
        </label>
        <LocationIcon className={styles.searchForm__icon_location} />
        <label
          className={
            (styles.searchForm__label, styles.searchForm__label__location)
          }
        >
          <SearchInput
            name="searchInput-data-location"
            placeholder={placeholderLocation}
            value={searchDataLocation}
            onChange={handleChangeLocation}
          />
        </label>
        <FilterIcon
          onClick={handleFilterMobileClick}
          className={styles.searchForm__icon_filter}
        />
        <label className={styles.searchForm__checkboxLabel}>
          <input
            type="checkbox"
            className={styles.searchForm__checkbox}
            name="fulltime"
            checked={isFullTime}
            onChange={handleCheck}
          />
          {windowWidth > 1440 ? 'Full Time Only' : 'Full Time'}
        </label>
        <button type="submit" className={styles.searchForm__search_btn}>
          Search
        </button>
      </form>
      {windowWidth <= 768 &&
        isModalMobileShown &&
        createPortal(
          <ModalFilter
            closeHandler={handleModalClose}
            isShown={isModalMobileShown}
          />,
          document.body,
        )}
    </>
  );
};

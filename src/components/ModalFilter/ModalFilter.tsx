import { ChangeEvent, MouseEvent, useContext } from 'react';
import LocationIcon from '../../assets/desktop/icon-location.svg?react';
import { SearchInput } from '../../components/SearchInput';
import { SearchDataContext } from '../../context/searchDataContext/SearchDataContext';
import styles from './ModalFilter.module.scss';

interface ModalFilterProps {
  isShown: boolean;
  closeHandler: (
    // eslint-disable-next-line no-unused-vars
    e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLElement>,
  ) => void;
}

export const ModalFilter = ({ isShown, closeHandler }: ModalFilterProps) => {
  const {
    searchDataLocation,
    handleSearchDatLocation,
    isFullTime,
    handleIsFullTime,
  } = useContext(SearchDataContext);

  const handleModalClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleSearchDatLocation('');
      handleIsFullTime(false);
      closeHandler(e);
    }
  };

  const handleCloseWithSaving = (e: MouseEvent<HTMLButtonElement>) => {
    closeHandler(e);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchDatLocation(e.target.value);
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    handleIsFullTime(e.target.checked);
  };

  return (
    <>
      {isShown && (
        <div onClick={handleModalClose} className={styles.modalFilter__wrapper}>
          <div className={styles.modalFilter}>
            <div className={styles.modalFilter__container}>
              <div className={styles.modalFilter__location_wrapper}>
                <LocationIcon className={styles.modalFilter__icon_location} />
                <label className={styles.modalFilter__label}>
                  <SearchInput
                    name="searchInput-data-location"
                    placeholder="Filter by location.."
                    value={searchDataLocation}
                    onChange={handleSearch}
                  />
                </label>
              </div>
              <label className={styles.modalFilter__checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.modalFilter__checkbox}
                  name="fulltime"
                  checked={isFullTime}
                  onChange={handleCheck}
                />
                Full Time Only
              </label>
              <button
                onClick={handleCloseWithSaving}
                className={styles.modalFilter__confirmBtn}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

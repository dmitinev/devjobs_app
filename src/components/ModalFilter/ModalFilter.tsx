import { forwardRef, useImperativeHandle, useRef } from 'react';
import LocationIcon from '../../assets/desktop/icon-location.svg?react';
import { SearchInput } from '../../components/SearchInput';
import styles from './ModalFilter.module.scss';

interface ModalFilterProps {
  isShown: boolean;
  closeHandler: (
    // eslint-disable-next-line no-unused-vars
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLElement>,
  ) => void;
}

export interface ModalFilterRef {
  locationValue: string | undefined;
  isFullTimeChecked: boolean | undefined;
}

export const ModalFilter = forwardRef<ModalFilterRef, ModalFilterProps>(
  ({ isShown, closeHandler }, ref) => {
    const locationRef = useRef<HTMLInputElement | null>(null);
    const checkboxFullTimeRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => {
      return {
        locationValue: locationRef.current?.value,
        isFullTimeChecked: checkboxFullTimeRef.current?.checked,
      };
    });

    const handleModalClose = (
      e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLElement>,
    ) => {
      if (e.target === e.currentTarget) {
        closeHandler(e);
      }
    };

    return (
      <>
        {isShown && (
          <div
            onClick={handleModalClose}
            className={styles.modalFilter__wrapper}
          >
            <div className={styles.modalFilter}>
              <div className={styles.modalFilter__container}>
                <div className={styles.modalFilter__location_wrapper}>
                  <LocationIcon className={styles.modalFilter__icon_location} />
                  <label className={styles.modalFilter__label}>
                    <SearchInput
                      name="searchInput-data-location"
                      ref={locationRef}
                      placeholder="Filter by location.."
                    />
                  </label>
                </div>
                <label className={styles.modalFilter__checkboxLabel}>
                  <input
                    ref={checkboxFullTimeRef}
                    type="checkbox"
                    className={styles.modalFilter__checkbox}
                    name="fulltime"
                  />
                  Full Time Only
                </label>
                <button
                  onClick={handleModalClose}
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
  },
);

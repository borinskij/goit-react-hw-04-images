import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ data, close }) => {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', hendleKeyModalClose);
    };
    // eslint-disable-next-line
  }, []);

  function hendleKeyModalClose(event) {
    console.log('event :', event);
    if (event.code === 'Escape') {
      close();
    }
  }
  // useEffect(() => {
  //   const romoveEvent = () =>
  //     window.removeEventListener('keydown', hendleKeyModalClose);
  // }, []);

  return (
    <div className={css.overlay} onClick={close}>
      <div className={css.modal}>
        <img src={data} alt="ccc" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  data: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  keyDown: PropTypes.bool.isRequired,
};

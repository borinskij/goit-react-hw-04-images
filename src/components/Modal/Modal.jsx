import PropTypes from 'prop-types';
// import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ data, close, keyDown }) => {
  // useEffect(() => {
  //   window.addEventListener('keydown', hendleKeyModalClose);
  // }, []);

  keyDown
    ? window.addEventListener('keydown', hendleKeyModalClose)
    : window.removeEventListener('keydown', hendleKeyModalClose);

  function hendleKeyModalClose(event) {
    console.log('event :', event);
    if (event.code === 'Escape') {
      close();
    }
  }
  console.log('object :>> ', 'object');
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

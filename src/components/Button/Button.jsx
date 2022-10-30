import PropTypes from 'prop-types';
// import { Component } from 'react';
import css from './Button.module.css';

export const Button = ({ hendelNextPage }) => {
  const handelClick = () => {
    hendelNextPage();
  };

  return (
    <button type="button" onClick={handelClick} className={css.buttonL}>
      <span>Давай ще</span>
    </button>
  );
};

Button.propTypes = { hendelNextPage: PropTypes.func.isRequired };

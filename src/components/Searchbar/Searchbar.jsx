import PropTypes from 'prop-types';
import React, { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ hendelSubmit }) => {
  const [name, setName] = useState('');

  const hendelerChange = ({ target }) => setName(target.value);

  function submit(event) {
    event.preventDefault();
    hendelSubmit(name);
    setName('');
  }

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={submit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={hendelerChange}
            className={css.input}
            type="text"
            name="name"
            value={name}
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images "
          />
        </form>
      </header>
    </div>
  );
};
Searchbar.propTypes = { hendelSubmit: PropTypes.func.isRequired };

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = { hendelSubmit: PropTypes.func.isRequired };
  state = {
    name: '',
  };
  hendelerChange = ({ target }) => this.setState({ name: target.value });
  hendelSubmit = event => {
    event.preventDefault();
    this.props.hendelSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <header className={css.searchbar}>
          <form className={css.form} onSubmit={this.hendelSubmit}>
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}>Search</span>
            </button>

            <input
              onChange={this.hendelerChange}
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              //   autocomplete="off"
              //   autofocus
              placeholder="Search images "
            />
          </form>
        </header>
      </div>
    );
  }
}

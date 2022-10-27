import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  static propTypes = { hendelNextPage: PropTypes.func.isRequired };
  handelClick = () => {
    this.props.hendelNextPage();
  };
  render() {
    return (
      <button type="button" onClick={this.handelClick} className={css.button}>
        <span>Давай ще</span>
      </button>
    );
  }
}

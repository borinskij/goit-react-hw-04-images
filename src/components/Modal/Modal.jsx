import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyModalClose);
  }

  hendleKeyModalClose = event => {
    console.log('event :', event.code);
    if (event.code === 'Escape') {
      this.props.close();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyModalClose);
  }

  render() {
    return (
      <div className={css.overlay} onClick={this.props.close}>
        <div className={css.modal}>
          <img src={this.props.data} alt="ccc" />
        </div>
      </div>
    );
  }
}

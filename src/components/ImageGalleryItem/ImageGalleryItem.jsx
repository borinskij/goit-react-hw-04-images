import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    getData: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModal: PropTypes.func.isRequired,
  };

  onClick(data) {
    this.props.openModal(data);
  }
  render() {
    const { getData } = this.props;
    return getData.map(data => {
      return (
        <li
          className={css.galleryItem}
          key={data.id}
          onClick={() => this.onClick(data.largeImageURL)}
        >
          <img src={data.webformatURL} alt={data.tags} />
        </li>
      );
    });
  }
}

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

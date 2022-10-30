import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ getData, openModal }) => {
  const onClick = data => {
    return openModal(data);
  };

  return getData.map(data => {
    return (
      <li
        className={css.galleryItem}
        key={data.id}
        onClick={() => onClick(data.largeImageURL)}
      >
        <img
          src={data.webformatURL}
          alt={data.tags}
          className={css.galleryImage}
        />
      </li>
    );
  });
};
ImageGalleryItem.propTypes = {
  getData: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};

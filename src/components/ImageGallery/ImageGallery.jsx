import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  static propTypes = {
    getData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    modal: false,
  };

  openModal = data => {
    this.setState(prevState => ({ modal: !prevState.modal }));
    this.setState({ data });
  };
  render() {
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem
            getData={this.props.getData}
            openModal={this.openModal}
          />
          {this.props.children}
          {this.state.modal && (
            <Modal close={this.openModal} data={this.state.data} />
          )}
        </ul>
      </>
    );
  }
}
// openModal();

// function ImageGallery({ getData, children }) {
//   return (
//     <>
//       <ul className="gallery">
//         <ImageGalleryItem getData={getData} openModal={openModal} />
//         {children}
//       </ul>
//     </>
//   );
// }

// ImageGallery.propTypes = {
//   getData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default ImageGallery;

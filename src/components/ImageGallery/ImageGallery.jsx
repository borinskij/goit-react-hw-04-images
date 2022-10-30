import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ getData, children }) => {
  const [data, setData] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [keyDown, setKeyDown] = useState(false);

  const openModal = data => {
    // this.setState(prevState => ({ modal: !prevState.modal }));
    setData(data);
    setIsModal(!isModal);
    setKeyDown(!keyDown);
  };

  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem getData={getData} openModal={openModal} />
        {children}
        {isModal && <Modal close={openModal} data={data} keyDown={keyDown} />}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  getData: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};
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

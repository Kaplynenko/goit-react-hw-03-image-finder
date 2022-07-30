import styles from './styles.module.css'
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ item, handleModal })=>{
   
    return (
        <li className={styles.galleryItem}>
          <img
            className={styles.galleryItemImg}
            onClick={() => handleModal(item)}
            src={item.webformatURL}
            alt={item.tags}
            loading="lazy"
          />
        </li>
      );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
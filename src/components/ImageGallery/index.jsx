import ImageGalleryItem from '../ImageGalleryItem/index';
import styles from './styles.module.css'
import PropTypes from 'prop-types';



const ImageGallery = ({ gallery, handleModal })=>{

return (
        <ul className={styles.gallerys}>
          {gallery.map(e => (
            <ImageGalleryItem key={e.id} item={e} handleModal={handleModal} />
          ))}
        </ul>
      );
  
}
ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  handleModal: PropTypes.func.isRequired,
};
export default ImageGallery;
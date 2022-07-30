import ImageGalleryItem from '../ImageGalleryItem/index';
import styles from './styles.module.css'
const ImageGallery = ({ gallery, handleModal })=>{


    return (
        <ul className={styles.gallerys}>
          {gallery.map(e => (
            <ImageGalleryItem key={e.id} item={e} handleModal={handleModal} />
          ))}
        </ul>
      );
  
}
export default ImageGallery;
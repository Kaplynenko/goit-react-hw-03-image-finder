import styles from './styles.module.css'

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


export default ImageGalleryItem;
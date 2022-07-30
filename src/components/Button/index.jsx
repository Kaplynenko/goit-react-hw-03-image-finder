import PropTypes from 'prop-types';
 import styles from '../Button/styles.module.css'
 const Button=({ loadMore })=> {
    return (
      <div className={styles.buttonCenter}>
        <button className={styles.button} type="button" onClick={() => loadMore()}>
          Load more
        </button>
      </div>
    );
  }
  Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
  };
  export default Button;
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
  export default Button;
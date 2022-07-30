import { SpinnerInfinity } from 'spinners-react';
import styles from './styles.modules.css'

const Loader=()=> {
  return (
    <div className={styles.spinner}>
      <SpinnerInfinity
        size={120}
        thickness={150}
        speed={107}
        color="rgba(172, 57, 161, 0.99)"
        secondaryColor="rgba(57, 101, 172, 0.82)"
      />
    </div>
  );
}
export default Loader;
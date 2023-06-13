import styles from './logo-name.module.css';

export function LogoNameStatic() {
  return (
    <div className={styles.credits}>
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className={styles.shape} height="60" width="320" />
      </svg>
      <div className={styles.text}>Lavitz</div>
    </div>
  )
}

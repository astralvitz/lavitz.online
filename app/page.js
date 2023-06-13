import { LogoName } from '/ui/logo-name';
import { Star} from '/ui/star';
import { CenterNav } from '/ui/center-nav';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Star />
      <LogoName />
      <CenterNav />
    </main>
  )
}

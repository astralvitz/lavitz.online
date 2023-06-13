import styles from './center-nav.module.css';

// I could use json for labels and links, and programaically generate the nav items. KIS for now.

// can I use multiple <nav> elements on a page?
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav

export function CenterNav() {
  return (
    <>
    <nav className={styles.nav} aria-labelledby="project-navigation">
      <div className={styles.label}>
        <span>Projects</span>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <a href="https://starscape.digital/" target="_blank" rel="noopener noreferrer" className={styles.slant}>Starscape Digital</a>
          <span className={styles.tooltip}>helping small businesses survive & thrive and funmaxxing web experience</span>
        </div>
        <div className={styles.item}>
          <a href="https://www.magisguild.com/" target="_blank" rel="noopener noreferrer" className={styles.magis}>MAGIS GUILD</a>
          <span className={styles.tooltip}>modern agency of design, branding, strategy, development and marketing</span>
        </div>
        <div className={styles.item}>
          <a href="https://newparadigmnavigators.community" target="_blank" rel="noopener noreferrer" className={styles.cyber}>NewParadigm Navigators</a>
          <span className={styles.tooltip}>sub-group of Scientific And Medical Network organizing the Symposium for Students of Spiritual Science in July 2023</span>
        </div>
        <div className={styles.item}>
          <a href="http://starscape.world/" target="_blank" rel="noopener noreferrer" className={styles.venice}>StarScapeWorld</a>
          <span className={styles.tooltip}>epic fantasy world expressed in games &amp; multimedia</span>
        </div>
        <div className={styles.item}>
          <a href="https://twitter.com/lavitzstar" target="_blank" rel="noopener noreferrer" className={styles.diabolica}>Lavitz☆</a>
          <span className={styles.tooltip}>music, art, revolution coming soon™</span>
        </div>
      </div>
    </nav>
    <nav className={styles.nav} aria-labelledby="spaces-navigation">
      <div className={styles.label}>
        <span>Webspaces</span>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <a href="https://beacons.ai/lavitz" target="_blank" rel="noopener noreferrer" className={styles.roboto}>Beacons/Linktree</a>
          <span className={styles.tooltip}>another collection of links</span>
        </div>
        <div className={styles.item}>
          <a href="https://lavitz.substack.com/" target="_blank" rel="noopener noreferrer" className={styles.roboto}>Substack/Blog</a>
          <span className={styles.tooltip}>writing my thoughts on life & things</span>
        </div>
        <div className={styles.item}>
          <a href="https://lavitz.notion.site/Lavitz-Notes-35f3b08fe383476898d2a6298796712c" target="_blank" rel="noopener noreferrer" className={styles.roboto}>Notion Notes</a>
          <span className={styles.tooltip}>a WIP aggregate of projects, notes, lists and more</span>
        </div>
        <div className={styles.item}>
          <a href="https://lavitz.neocities.org/" target="_blank" rel="noopener noreferrer" className={styles.roboto}>Neocities</a>
          <span className={styles.tooltip}>purely fun projects</span>
        </div>
      </div>
    </nav>
    <nav className={styles.nav} aria-labelledby="social-navigation">
      <div className={styles.label}>
        <span>Socials</span>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <a href="https://twitter.com/lavitzstarlove" target="_blank" rel="noopener noreferrer" className={styles.roboto}>Twitter</a>
          <span className={styles.tooltip}>@LavitzStarlove - love, consciousness, musings, astromysticism, miscellanea</span>
        </div>
        <div className={styles.item}>
          <a href="https://www.instagram.com/lavitzlove/" target="_blank" rel="noopener noreferrer" className={styles.roboto}>Instagram</a>
          <span className={styles.tooltip}>@LavitzLove - life/random</span>
        </div>
        <div className={styles.item}>
          <a href="https://spacehey.com/lavitz" target="_blank" rel="noopener noreferrer" className={styles.roboto}>SpaceHey</a>
          <span className={styles.tooltip}>Lavitz - MySpace clone</span>
        </div>
      </div>
    </nav>
  </>
  )
}

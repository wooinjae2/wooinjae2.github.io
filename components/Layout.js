import styles from './Layout.module.css';
import LeftPanel from './leftPanel';

export default function Layout({ menulist, handleMenuClick, children }) {
  return (
    <main className={styles.mainItem}>
      <LeftPanel menulist={menulist} handleMenuClick={handleMenuClick} />
      <main>{children}</main>
    </main>
  );
}

import React from 'react';
import Header from '../Header/Header';
import styles from './PageContainer.module.css';

function PageContainer({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentWrapper}>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    </div>
  );
}

export default PageContainer;
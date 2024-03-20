
import React from 'react';
import Link from 'next/link'
import styles from './styles/page.module.css'


function Welcomepage() {
  return (
    
    <div className={styles.container}>
      <h1 className={styles.heading}>WELCOME TO MOBILE SHOP</h1>
      <div className={styles.companyDiv}>
                    <h2 className={       styles.iphone}>IPHONE</h2> 
        <h2 className={styles.oppo}>OPPO</h2>
         <h2 className={styles.vivo}>VIVO</h2>
          <h2 className={styles.realme}>REALME</h2>
           <h2 className={styles.samsung}>SAMSUNG</h2>
            <h2 className={styles.redmi}>REDMI</h2>

      </div>
      <p className={styles.notes}> Get an amazing deals and offers in best companies like vivo,oppo ,realme or samsung.  and also assured amazing gifts as well as exciting prices </p>
      
      <Link className={styles.button} href="/Homepage">NEXT ➜</Link>
    </div>
  );
}

export default Welcomepage;
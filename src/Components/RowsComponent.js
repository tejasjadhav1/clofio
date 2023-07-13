import React from 'react'
import styles from './RowsComponents.module.css'


function RowsComponent() {
  return (
    <div className={styles['rows_component']}>
      

      <div className={styles['table_container']}>
        <table className={styles['table']}>
          <h3 className={styles['heading']}>Buckets you own</h3>
          <tr className={styles['table_heading_row']}>
            <th>Name</th>
            <th>Budget</th>
            <th>Spend</th>
            <th>Forecast</th>
          </tr>

        <tr className={styles['table_row']}>
          <td className={styles['table_data']}>ACME Corp</td>
          <td>$200000</td>
          <td>$173162</td>
          <td>$205049</td>
        </tr>
        <tr className={styles['table_row']}>
          <td>ACME Corp</td>
          <td>$200000</td>
          <td>$173162</td>
          <td>$205049</td>
        </tr>
        </table>
      </div >
      <div className={styles['table_container2']}>
          <table className={styles['table']}>
              <h3 className={styles['heading']}>Buckets you own</h3>
              <tr className={styles['table_heading_row']}>
                <th>Name</th>
                <th>Budget</th>
                <th>Spend</th>
                <th>Forecast</th>
              </tr>

            <tr className={styles['table_row']}>
              <td className={styles['table_data']}>ACME Corp</td>
              <td>$200000</td>
              <td>$173162</td>
              <td>$205049</td>
            </tr>
            <tr className={styles['table_row']}>
              <td>ACME Corp</td>
              <td>$200000</td>
              <td>$173162</td>
              <td>$205049</td>
            </tr>
            </table>
       </div>
       <div className={styles['table_container3']}>
          <table className={styles['table']}>
              <h3 className={styles['heading']}>Buckets you own</h3>
              <tr className={styles['table_heading_row']}>
                <th>Name</th>
                <th>Budget</th>
                <th>Spend</th>
                <th>Forecast</th>
              </tr>

            <tr className={styles['table_row']}>
              <td className={styles['table_data']}>ACME Corp</td>
              <td>$200000</td>
              <td>$173162</td>
              <td>$205049</td>
            </tr>
            <tr className={styles['table_row']}>
              <td>ACME Corp</td>
              <td>$200000</td>
              <td>$173162</td>
              <td>$205049</td>
            </tr>
            </table>
       </div>
    </div>
  )
}

export default RowsComponent

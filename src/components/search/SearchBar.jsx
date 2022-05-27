import React from 'react'
import { Button, Container } from 'react-bootstrap';
import styles from "./style.search.module.css";

export default function SearchBar() {
  return (
    <div>
      <Container className={styles.searchBox}>
      <div className={styles.searchContent}>
        <div className={styles.inputGroup}>
          <p className={styles.text}>Tipe Driver</p>
          <select className={styles.formSelect} id="driver" required>
            <option className={styles.item} value="" selected>Pilih Tipe Driver</option>
            <option className={styles.item} value="true">Dengan Sopir</option>
            <option className={styles.item} value="false">
              Tanpa Sopir (Lepas Kunci)
            </option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.text}>Tanggal</p>
          <input type="date" class="form-control" id="date" required />
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.text}>Waktu Jemput/Ambil</p>
          <select className={styles.formSelect} id="time" required>
            <option value="">Pilih Waktu</option>
            {/* <script>
              for (let i = 0; i < 24; i++) {
                if (i < 10) {
                  document.write(
                    '<option value="T0' +
                      i +
                      ':00:00.000Z">0' +
                      i +
                      ".00</option>"
                  );
                } else {
                  document.write(
                    '<option value="T' +
                      i +
                      ':00:00.000Z">' +
                      i +
                      ".00</option>"
                  );
                }
              }
            </script> */}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.text}>Jumlah Penumpang (Opsional)</p>
          <div>
            <input type="number" class="form-control item" id="passanger" />
            {/* style="background-color: #fff;" */}
            {/* <i class="bi bi-people-fill input-group-append people-icon"></i> */}
          </div>
        </div>

        <Button type="submit" className={styles.btn} id="btnFilterCar">
          Cari Mobil
        </Button>
      </div>
    </Container>

    
    

    </div>
  )
}

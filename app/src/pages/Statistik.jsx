import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items } = useKoleksi()

  const perKategori = items.reduce((hitung, item) => {
    const kategori = item.kategori
    hitung[kategori] = (hitung[kategori] || 0) + 1
    return hitung
  }, {})

  const jumlahKategori = Object.keys(perKategori).length

  return (
    <section>
      <h1>Statistik</h1>

      <div className="statistik-ringkasan">
        <div className="statistik-item">
          <h2>Jumlah Agenda</h2>
          <p>{items.length}</p>
        </div>

        <div className="statistik-item">
          <h2>Jumlah Kategori</h2>
          <p>{jumlahKategori}</p>
        </div>
      </div>

      <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
              <tr key={kategori}>
                <td>{kategori}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>Total</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
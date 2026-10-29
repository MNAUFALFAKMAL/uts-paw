import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, error, hapus } = useKoleksi()

  const agenda = items.find((item) => String(item.id) === id)

  if (loading) return <p role="status">Memuat detail agenda...</p>
  if (error) return <p role="alert">Gagal memuat agenda: {error}</p>

  if (!agenda) {
    return (
      <section>
        <h1>Agenda Tidak Ditemukan</h1>
        <p>Agenda dengan ID tersebut tidak tersedia.</p>
        <Link to="/koleksi">Kembali ke daftar agenda</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${agenda.judul}"?`)) {
      hapus(agenda.id)
      navigate('/koleksi')
    }
  }

  return (
    <section>
      <h1>{agenda.judul}</h1>

      <dl>
        <dt>Kategori</dt>
        <dd>{agenda.kategori}</dd>

        <dt>Tanggal</dt>
        <dd>{agenda.tanggal}</dd>

        <dt>Lokasi</dt>
        <dd>{agenda.lokasi}</dd>

        <dt>Penyelenggara</dt>
        <dd>{agenda.penyelenggara}</dd>
      </dl>

      <div className="aksi">
        <button type="button" onClick={() => navigate('/koleksi')}>
          Kembali
        </button>
        <button type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
        <Link to="/tambah">Tambah agenda</Link>
      </div>
    </section>
  )
}

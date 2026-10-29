import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KartuItem from '../components/KartuItem.jsx'
import KotakPencarian from '../components/KotakPencarian.jsx'
import FilterKategori from '../components/FilterKategori.jsx'
import './Koleksi.css'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('Semua')

  if (loading) {
    return <p role="status">Memuat data...</p>
  }

  if (error) {
    return <p role="alert">Gagal memuat data: {error}</p>
  }

  const daftarKategori = [
    'Semua',
    ...new Set(items.map((item) => item.kategori)),
  ]

  const tampil = items.filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (kategori === 'Semua' || item.kategori === kategori),
  )

  return (
    <section>
      <h1>Koleksi Agenda</h1>
      <p>Daftar kegiatan kampus ITERA.</p>

      <div className="alat-koleksi">
        <KotakPencarian
          nilai={cari}
          onUbah={setCari}
        />

        <FilterKategori
          kategori={kategori}
          daftarKategori={daftarKategori}
          onUbah={setKategori}
        />
      </div>

      {tampil.length === 0 ? (
        <p role="status">Tidak ada agenda yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
import { Link } from 'react-router-dom'
import BadgeKategori from './BadgeKategori'

export default function KartuItem({ item }) {
  const { id, judul, kategori, tanggal } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        <BadgeKategori kategori={kategori} /> · tanggal {tanggal}
      </p>
    </article>
  )
}
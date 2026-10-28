import useKoleksi from '../hooks/useKoleksi.js'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()

  if (loading) return <p role="status">Memuat koleksi...</p>
  if (error) return <p role="alert">Gagal memuat koleksi: {error}</p>

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="daftar-kartu">
        {items.map((item) => (
          <article className="kartu" key={item.id}>
            <h2>{item.judul}</h2>
            <p>{item.deskripsi}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
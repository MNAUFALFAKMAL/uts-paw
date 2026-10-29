export default function FilterKategori({
  kategori,
  daftarKategori,
  onUbah,
}) {
  return (
    <select
      aria-label="Filter kategori"
      value={kategori}
      onChange={(e) => onUbah(e.target.value)}
    >
      {daftarKategori.map((nama) => (
        <option key={nama} value={nama}>
          {nama}
        </option>
      ))}
    </select>
  )
}
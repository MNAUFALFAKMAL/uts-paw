export default function BadgeKategori({ kategori }) {
  const warna = {
    Seminar: '#17579F',
    Olahraga: '#ffe600af',
    Wisuda: '#7C3AED',
    Lomba: '#B45309',
    Organisasi: '#00ff1e',
    Kuliah: '#1e00ff',
  }

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: '999px',
        backgroundColor: warna[kategori] ?? '#6B7280',
        color: '#FFFFFF',
        fontSize: '12px',
        fontWeight: 600,
      }}
    >
      {kategori}
    </span>
  )
}
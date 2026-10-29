export default function PesanStatus({ pesan, jenis = 'info' }) {
  return (
    <p role={jenis === 'error' ? 'alert' : 'status'} className={`pesan pesan-${jenis}`}>
      {pesan}
    </p>
  )
}
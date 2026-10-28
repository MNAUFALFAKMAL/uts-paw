import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Tambah() {
  const navigate = useNavigate()

    const { tambahKegiatan } = useKoleksi()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const judul = formData.get('judul')
        const kategori = formData.get('kategori')
        const tanggal = formData.get('tanggal')
        const lokasi = formData.get('lokasi')
        const penyelenggara = formData.get('penyelenggara')
        tambahKegiatan({ judul, kategori, tanggal, lokasi, penyelenggara })
        navigate('/koleksi')
    }
    return (
        <section>
            <h1>Tambah Agenda</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="judul">Judul:</label>
                    <input type="text" id="judul" name="judul" required />
                </div>
                <div>
                    <label htmlFor="kategori">Kategori:</label>
                    <input type="text" id="kategori" name="kategori" required />
                </div>
                <div>
                    <label htmlFor="tanggal">Tanggal:</label>
                    <input type="date" id="tanggal" name="tanggal" required />
                </div>
                <div>
                    <label htmlFor="lokasi">Lokasi:</label>
                    <input type="text" id="lokasi" name="lokasi" required />
                </div>
                <div>
                    <label htmlFor="penyelenggara">Penyelenggara:</label>
                    <input type="text" id="penyelenggara" name="penyelenggara" required />
                </div>
                <button type="submit">Tambah</button>
            </form>
        </section>
    )
}
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = {
  judul: '',
  kategori: '',
  tanggal: '',
  lokasi: '',
  penyelenggara: '',
}

export default function Tambah() {
  const navigate = useNavigate()
  const { tambah } = useKoleksi()
  const [formData, setFormData] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const simpan = (event) => {
    event.preventDefault()

    if (formData.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    setGalat('')

    tambah({
      ...formData,
      judul: formData.judul.trim(),
    })

    navigate('/koleksi')
  }

  return (
    <form className="form-tambah" onSubmit={simpan} noValidate>
      <h1>Tambah Agenda</h1>

      <div>
        <label htmlFor="judul">Judul:</label>
        <input
          id="judul"
          name="judul"
          value={formData.judul}
          onChange={ubah}
        />
      </div>

      <div>
        <label htmlFor="kategori">Kategori:</label>
        <select
          id="kategori"
          name="kategori"
          value={formData.kategori}
          onChange={ubah}
        >
          <option value="">Pilih kategori</option>
          <option value="Seminar">Seminar</option>
          <option value="Olahraga">Olahraga</option>
          <option value="Wisuda">Wisuda</option>
          <option value="Lomba">Lomba</option>
          <option value="Organisasi">Organisasi</option>
          <option value="Kuliah">Kuliah</option>
        </select>
      </div>

      <div>
        <label htmlFor="tanggal">Tanggal:</label>
        <input
          id="tanggal"
          name="tanggal"
          type="date"
          value={formData.tanggal}
          onChange={ubah}
        />
      </div>

      <div>
        <label htmlFor="lokasi">Lokasi:</label>
        <input
          id="lokasi"
          name="lokasi"
          value={formData.lokasi}
          onChange={ubah}
        />
      </div>

      <div>
        <label htmlFor="penyelenggara">Penyelenggara:</label>
        <input
          id="penyelenggara"
          name="penyelenggara"
          value={formData.penyelenggara}
          onChange={ubah}
        />
      </div>

      {galat && <p role="alert">{galat}</p>}

      <button type="submit">Simpan</button>
    </form>
  )
}

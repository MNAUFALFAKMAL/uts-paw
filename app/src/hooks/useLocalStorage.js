import { useState } from 'react'

export default function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilaiState] = useState(() => {
    const tersimpan = localStorage.getItem(kunci)

    if (tersimpan !== null) {
      try {
        return JSON.parse(tersimpan)
      } catch {
        return nilaiAwal
      }
    }
    return nilaiAwal
  })

  const setNilai = (nilaiBaru) => {
    setNilaiState((nilaiLama) => {
      const hasil =
        typeof nilaiBaru === 'function'
          ? nilaiBaru(nilaiLama)
          : nilaiBaru
      if (hasil === null) {
        localStorage.removeItem(kunci)
      } else {
        localStorage.setItem(kunci, JSON.stringify(hasil))
      }
      return hasil
    })
  }
  return [nilai, setNilai]
}
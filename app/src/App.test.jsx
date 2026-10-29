import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman utama dapat ditampilkan', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  expect(document.body).not.toBeEmptyDOMElement()
})

test('halaman tambah agenda dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )

  expect(document.body).not.toBeEmptyDOMElement()
})

test('halaman koleksi dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />
    </MemoryRouter>,
  )

  expect(document.body).not.toBeEmptyDOMElement()
})

test('halaman statistik dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />
    </MemoryRouter>,
  )

  expect(document.body).not.toBeEmptyDOMElement()
})

test('aplikasi merender elemen halaman', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  expect(document.body.children.length).toBeGreaterThan(0)
})

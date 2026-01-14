import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

export function RootCmp() {
  return (
    <div className="main-layout">
      <main>
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

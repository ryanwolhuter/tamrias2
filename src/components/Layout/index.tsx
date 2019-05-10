import React, { FC } from 'react'
import { PageDimensionsProvider } from '../../hooks/PageDimensionsProvider'
import Background from './Background'
import Navbar from './Navbar'
import Home from '../Home'
import About from '../About'
import Music from '../Music'
import Work from '../Work'
import Contact from '../Contact'

import './index.scss'

const Layout: FC = () => {
  return (
    <PageDimensionsProvider>
        <Background />
        <Navbar />
        <Home />
        <Music />
        <Work />
        <About />
        <Contact />
    </PageDimensionsProvider>
  )
}

export default Layout

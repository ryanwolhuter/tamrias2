import React, { createContext, useContext, useState, useEffect, ReactNode, ReactNodeArray } from 'react'

const pageDimensions = () => ({
  height: document.documentElement.scrollHeight,
  width: document.documentElement.clientWidth
})

export const PageDimensionsCtx = createContext(pageDimensions())

export const PageDimensionsProvider = ({ children }: any) => {
  const [dimensions, setDimensions] = useState(pageDimensions())

  useEffect(() => {
    const handleResize = () => {
      setDimensions(pageDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageDimensionsCtx.Provider value={dimensions}>
      {children}
    </PageDimensionsCtx.Provider>
  )
}

export const usePageDimensions = () => useContext(PageDimensionsCtx)
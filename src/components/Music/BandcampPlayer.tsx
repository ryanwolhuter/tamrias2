import React from 'react'
import { usePageDimensions } from '../../hooks/PageDimensionsProvider'

export default function BandcampPlayer() {
  const { width } = usePageDimensions()
  
  if (width <= 1024) return <MediumPlayer/>
  
  return <LargePlayer pageWidth={width}/>
}

function MediumPlayer() {
  return (
    <div className='bandcamp-container'>
      <iframe
        style={{ border: 0, width: '100%', height: '120px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2323951329/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
        seamless>
        <a href="http://moonswingnetlabel.bandcamp.com/album/new-leaf">
          New Leaf by Tamrias
        </a>
      </iframe>
    </div>
  )
}

function LargePlayer({ pageWidth }: { pageWidth: number }) {
  const width = pageWidth / 3
  const height = width + 100
  return (
    <div className='bandcamp-container'>
      <iframe
        style={{ border: 0, width: `${width}px`, height: `${height}px` }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2323951329/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless>
        <a href="http://moonswingnetlabel.bandcamp.com/album/new-leaf">
          New Leaf by Tamrias
      </a>
      </iframe>
    </div>
  )
}
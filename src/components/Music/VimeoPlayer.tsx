import React from 'react';

export default function VimeoPlayer() {
  return (
    <div
      className="vimeo-container"
      style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe 
        src="https://player.vimeo.com/video/268956656?color=ffffff" 
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
      >
      </iframe>
    </div>
  )
}
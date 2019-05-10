import React from 'react'
import Particles from 'react-particles-js'
import { usePageDimensions } from '../../../hooks/PageDimensionsProvider'

import './index.scss'

export default function Background() {

  const { width, height } = usePageDimensions()

  return (
    <Particles
      width={`${width}px`}
      height={`${height}px`}
      className='background'
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
            }
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: false,
            }
          },
          move: {
            enable: false,
            speed: 2,
            direction: 'top',
            random: true,
            straight: true,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true
            },
          },
          retina_detect: true
        }
      }}
    />
  )
}
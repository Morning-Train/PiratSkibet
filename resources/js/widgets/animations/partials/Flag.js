import React from 'react'
import { Env } from '@morningtrain/helpers'
import Animation from 'widgets/animations/Animation'

export default class Flag extends Animation {
  static get defaultProps () {
    return {
      ...super.defaultProps
    }
  }

  get transitionsProps () {
    return {}
  }

  get classNames () {
    return 'flag-'
  }

  get width () {
    return this.scaleWidth(100) + '%'
  }

  get styles () {
    return {
      ...super.styles
    }
  }

  renderContent () {
    return (
      <svg className='flag' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 205 203'>
        <g className='glitchable'>
          <rect x='99.9' y='98.1' transform='matrix(9.179941e-03 -1 1 9.179941e-03 55.7028 255.2449)' className='st0' width='113.5' height='2.9' />
          <a href={Env.get('services.instagram.url', '#')} target='_blank'>
            <polygon className='st0' points='0.5,0.3 27.8,44.9 -0.3,91.5 158.2,92.9 159,1.7 ' />
            <g>
              <path
                className='st1' d='M125.4,65c-0.1,0.3-0.3,0.4-0.5,0.5c-1.5,0.9-3.2,1.4-4.8,2.1c-0.1,0-0.2,0-0.3,0c-0.3-0.1-0.5-0.3-0.6,0.2
                                c-0.1,0.4-1.1,0.3-1.3-0.1c-0.4-0.7-0.7-1.5-1.1-2.2c-0.2-0.4-0.4-0.7-0.9-0.8c-0.3-0.1-0.3-0.5-0.3-0.8c0-0.2-0.1-0.4,0.2-0.6
                                c0.9-0.4,1.7-0.9,2.6-1.3c0.6-0.3,0.7-0.2,1.1,0.3c0.3,0.5,0.5,1.1,0.7,1.6c0.1,0.3,0.3,0.6,0.4,0.9c0.1,0.2,0.2,0.4,0.5,0.4
                                c0.3-0.1,0.5-0.2,0.5-0.5c0-0.2,0-0.3,0-0.5c0-1.1,0-2.2,0-3.2c0-0.7-0.2-0.8-0.8-0.6c-0.9,0.3-1.7,0.7-2.6,1
                                c-0.8,0.3-1.3,0.2-1.8-0.6c-0.6-1.1-0.9-2.4-0.8-3.7c0-0.9,0-1.7,0-2.6c0-0.4,0.1-0.7,0.5-0.9c1.3-0.9,2.7-1.4,4.1-2
                                c0.3-0.1,0.5,0.1,0.7,0.2c0-0.8,0.6-0.8,1.1-0.9c0.5-0.1,0.7,0.3,0.9,0.6c0.3,0.5,0.6,1,0.8,1.5c0.2,0.3,0.4,0.6,0.8,0.7
                                c0.3,0.1,0.3,0.5,0.3,0.8c0,0.2,0,0.4-0.3,0.6c-0.9,0.4-1.7,0.9-2.6,1.3c-0.5,0.3-0.7,0.2-1-0.3c-0.3-0.5-0.4-1.1-0.7-1.6
                                c-0.1-0.3-0.2-0.7-0.6-0.6c-0.4,0.1-0.3,0.5-0.3,0.8c0,1.1,0,2.3,0,3.4c0,0.5,0.1,0.5,0.5,0.4c0.9-0.4,1.8-0.8,2.8-1.2
                                c0.9-0.3,1.3-0.2,1.8,0.6c0.4,0.8,0.7,1.6,0.8,2.5c0,0.1,0,0.2,0.1,0.3c0,0.1,0,0.3,0,0.4c-0.1,0.7,0,1.5-0.1,2.2
                                C125.4,63.9,125.4,64.4,125.4,65'
              />
              <path
                className='st1' d='M125.4,65c0-1.2,0-2.4,0-3.7c0-0.1,0-0.2,0.1-0.3C125.5,62.4,125.5,63.7,125.4,65C125.4,65,125.4,65,125.4,65'
              />
              <path
                className='st1' d='M108.6,36.8c0-1.5,0-2.9,0-4.4c0-0.3,0-0.5-0.1-0.8c-0.2-1.2-1-1.2-1.8-1c-0.3,0.1-0.2,0.3-0.2,0.5
                                c0,2.1,0,4.2-0.1,6.3c0,0.8,0,1.5,0,2.3c0,0.6,0.1,1,0.8,1.3c0.3,0.1,0.3,0.5,0.4,0.8c0,0.3,0,0.5-0.3,0.7
                                c-0.8,0.4-1.6,0.9-2.4,1.3c-0.2,0.1-0.4,0.1-0.6,0c-1-0.6-1.7-1.5-1.6-2.7c0-0.4,0-0.8,0-1.2c0-0.2,0-0.3,0.1-0.4
                                c0.3-0.4,0.4-0.7,0.1-1.1c-0.2-0.3-0.2-0.7-0.2-1c0-1.9,0-3.8,0-5.7c0-0.7-0.2-1.3-1-1.5c-0.3-0.1-0.3-0.5-0.3-0.8
                                c0-0.2-0.1-0.4,0.2-0.6c0.9-0.5,1.8-1,2.7-1.5c0.2-0.1,0.4-0.1,0.6-0.1c0.6,0.2,1.2,0.6,1.4,1.3c0.2,0.4,0.3,0.3,0.5,0.1
                                c0.8-0.4,1.6-0.9,2.4-1.2c0.5-0.2,1-0.2,1.4,0.1c0,0,0.1,0,0.1,0.1c0.2,0.8,1.1,1,1.3,1.8c0.2,0.8,0.5,1.5,0.5,2.3
                                c0,2.7-0.1,5.4-0.1,8.1c0,0.8,0.2,1.1,0.9,1.3c0.5,0.1,0.3,0.5,0.4,0.8c0.1,0.3,0.1,0.6-0.3,0.8c-0.9,0.4-1.7,0.9-2.6,1.4
                                c-0.3,0.2-0.5,0.1-0.8,0c-1-0.6-1.6-1.5-1.6-2.7C108.6,39.7,108.6,38.2,108.6,36.8C108.6,36.8,108.6,36.8,108.6,36.8'
              />
              <path
                className='st1' d='M63.7,39.2c0.8,0,1.3,0.2,1.8,0.6c0.5,0.5,1.3,0.5,2.1,0.6c0.3,0,0.7,0,1,0c0.2,0,0.5-0.2,0.6,0.2
                                c0.1,0.4,0.2,0.9,0.1,1.3c0,0-0.1,0.1-0.2,0.1c-1.2,0.4-2.5,0.9-3.7,1.3c-1,0.3-1.8,0.1-2.5-0.5c-1.5-1.3-2.4-3-2.4-5
                                c0-3.1,0-6.2,0.1-9.3c0-0.2-0.1-0.5,0.2-0.6c0.1,0,0.1-0.1,0.1-0.1c-0.4-1-0.2-2-0.2-3.1c0-1.4,0-1.4,1.3-1.9
                                c1.7-0.7,3.4-1.3,5.2-1.8c0.7-0.2,0.8-0.2,1,0.5c0.1,0.4,0.5,0.8-0.2,1.2c0.5,0.1,0.6,0.5,0.7,0.8c0.2,0.5,0.3,1,0.5,1.6
                                c0.2,0.5,0.5,0.8,1.1,0.8c0.5,0,0.3,0.5,0.5,0.7c0.1,0.2,0.1,0.5-0.2,0.7c-1.1,0.5-2.1,1-3.2,1.5c-0.6,0.3-0.8,0.2-1-0.4
                                c-0.4-0.8-0.6-1.6-0.8-2.4c-0.1-0.4-0.3-0.8-0.4-1.3c-0.1-0.2-0.1-0.5-0.4-0.4c-0.3,0.1-0.2,0.3-0.3,0.5c0,1.4,0,2.9,0,4.3
                                c0,2.5,0,4.9-0.1,7.4c0,0.3,0,0.5,0,0.8C64.3,38.1,64.3,38.7,63.7,39.2'
              />
              <path
                className='st1' d='M80.6,52.2c0.7-0.5,1.3-0.9,2-1.3c0.8-0.5,1.4-0.4,2,0.2c1,1,1.5,2.2,1.6,3.6c0,0.2,0,0.5,0,0.7
                                c0,0.8-0.6,1.3-1.4,1.1c-0.4-0.1-0.5,0-0.6,0.4c0,0.3-0.8,0.9-1,0.8c-0.3-0.1-0.5-0.3-0.6-0.6c-0.2-0.6-0.1-1.3-0.2-1.9
                                c-0.1-0.6-0.7-1.1-1.3-1c-0.2,0-0.2,0.2-0.2,0.3c0,0.6,0,1.2,0,1.7c0,2.3,0,4.6-0.1,6.9c0,0.6,0.1,1.1,0.8,1.4
                                c0.3,0.1,0.3,0.5,0.4,0.9c0,0.3,0,0.5-0.3,0.6c-0.8,0.4-1.6,0.9-2.4,1.3c-0.2,0.1-0.4,0.2-0.6,0c-1.1-0.6-1.7-1.5-1.7-2.8
                                c0-1.3,0-2.6,0-3.8c0-0.7,0-1.3,0.3-1.9c0.2-0.3-0.1-0.6-0.2-0.8c-0.1-0.3-0.1-0.6-0.1-0.9c0-0.7,0-1.3,0-2c0-0.8-0.2-1.4-1.1-1.6
                                c-0.2-0.1-0.2-0.5-0.3-0.7c0-0.2-0.1-0.5,0.2-0.7c1-0.5,2-1,2.9-1.6c0.1-0.1,0.3,0,0.4,0C79.8,50.9,80.3,51.4,80.6,52.2'
              />
              <path
                className='st1' d='M101.6,49.6c0,0.2,0,0.3,0,0.4c0,0.4-0.1,0.8,0.1,1c0.2,0.3,0.6,0.1,1,0.1c0.1,0,0.2-0.1,0.3,0.1
                                c0.2,0.6,0,1.1-0.1,1.6c-0.1,0.3-0.2,0.4-0.5,0.4c-0.1,0-0.3,0-0.4,0c-0.3,0-0.4,0.1-0.4,0.4c0,0.8,0,1.7,0,2.5
                                c0,2.4,0,4.7-0.1,7.1c0,0.7,0.1,1.2,0.8,1.5c0.4,0.1,0.4,1.3,0,1.5c-0.3,0.1-0.5,0.5-0.9,0.3c-0.1,0-0.1,0-0.1,0.1
                                c-0.3,0.7-1.1,0.7-1.6,1.1c-0.1,0.1-0.2,0-0.3,0c-1-0.4-1.8-1.6-1.7-2.6c0-0.6-0.2-1.3,0.3-1.9c0.1-0.1,0-0.2,0-0.2
                                c-0.3-0.5-0.3-1-0.3-1.5c0-2.5,0-5.1,0.1-7.6c0-0.4-0.1-0.6-0.5-0.5c-0.4,0-0.7-0.3-0.7-0.7c0.1-0.3,0.2-0.6,0.2-0.9
                                c0-0.2,0.1-0.2,0.3-0.3c1.6-0.5,2.6-1.6,3.2-3.2c0.1-0.3,0.2-0.5,0.5-0.4c0.3,0.1,0.5-0.1,0.7,0.4
                                C101.6,48.7,101.5,49.2,101.6,49.6'
              />
              <path
                className='st1' d='M74.4,58.1c0,1.6,0,3.2,0,4.8c0,0.7,0,1.3,0.8,1.6c0.5,0.2,0.4,1.2,0,1.5c-0.8,0.4-1.6,0.9-2.4,1.3
                                c-0.2,0.1-0.4,0.1-0.6,0c-1-0.6-1.8-1.5-1.6-2.7c0.2-0.9,0-1.8,0-2.6c0-0.9,0-1.8,0-2.7c0-1.4,0-2.9,0-4.3c0-0.7-0.1-1.2-0.8-1.5
                                c-0.4-0.2-0.4-1.2,0-1.4c0.8-0.5,1.6-0.9,2.5-1.4c0.2-0.1,0.4-0.1,0.6,0c1.1,0.6,1.7,1.5,1.7,2.8C74.5,55,74.5,56.5,74.4,58.1'
              />
              <path
                className='st1' d='M96.4,36.1c0-1.6,0-3.3,0-4.9c0-0.6-0.2-1.1-0.8-1.3c-0.3-0.1-0.3-0.5-0.3-0.8c0-0.2-0.1-0.5,0.2-0.7
                                c0.8-0.4,1.7-0.9,2.5-1.4c0.2-0.1,0.3-0.1,0.5,0c1,0.6,1.7,1.4,1.7,2.7c0,0.6,0,1.3,0,1.9c0,0.4,0,0.8-0.3,1.1
                                c-0.1,0.1-0.1,0.2,0,0.3c0.3,0.3,0.3,0.7,0.3,1.1c0,1.7,0,3.5,0,5.2c0,0.6,0.1,1.2,0.8,1.5c0.3,0.1,0.3,0.5,0.4,0.9
                                c0,0.3-0.1,0.5-0.4,0.6c-0.8,0.4-1.6,0.9-2.4,1.3c-0.2,0.1-0.4,0.1-0.7,0c-1-0.6-1.7-1.5-1.6-2.7C96.4,39.4,96.4,37.8,96.4,36.1'
              />
              <path
                className='st1' d='M71.9,45.1c0.1-0.3,0.2-0.6,0.5-0.7c0.5-0.2,0.8-0.1,1.1,0.4c0.4,0.6,0.6,1.2,0.6,1.8c0,0.4,0,0.9,0,1.3
                                c0.1,0.5-0.1,0.9-0.7,1c-0.5,0.2-1.1,0.4-1.6,0.6c-0.5,0.2-0.8,0-1-0.4c-0.3-0.5-0.5-1.1-0.6-1.7c0-0.6,0-1.1,0-1.7
                                c0-0.3,0-0.5,0.3-0.6c0.4-0.1,0.7-0.5,1.1-0.1C71.8,45,71.8,45,71.9,45.1'
              />
              <path
                className='st1' d='M99.9,24.9c-0.7,0.5-1.6,0.7-2.4,1c-0.3,0.1-0.5,0-0.7-0.2c-0.4-0.5-0.6-1-0.7-1.6c-0.1-0.7,0-1.4,0-2.2
                                c0-0.2,0.1-0.3,0.3-0.4c0.7-0.3,1.4-0.6,2.2-0.8c0.3-0.1,0.5,0,0.6,0.2c0.4,0.5,0.7,1,0.7,1.7C100,23.4,100,24.1,99.9,24.9'
              />
              <path className='st1' d='M99.9,24.9c0-0.8,0-1.5,0-2.3C100,23.4,100,24.1,99.9,24.9' />
              <path
                className='st1' d='M93.8,38.9L93.8,38.9c0-2.7,0-5.4,0-8.2h0C93.8,33.4,93.8,36.2,93.8,38.9 M90.1,35.1c0,1.5,0,2.9,0,4.4
                                c0,0.6-0.2,0.8-0.8,0.9c-0.5,0.1-1.1-0.2-1.3-0.6c-0.1-0.3-0.1-0.7-0.1-1c0-2.8,0-5.5,0.1-8.3c0-0.3,0.1-0.5,0.4-0.6
                                c0.2-0.1,0.4-0.2,0.7-0.3c0.9-0.3,1.2-0.1,1.2,0.8C90.2,32.1,90.2,33.6,90.1,35.1 M85.8,23.9C85.8,23.9,85.8,23.9,85.8,23.9
                                c0.3,0,0.5,0,0.8,0c0,0,0,0,0,0.1C86.3,23.9,86,23.9,85.8,23.9 M95.3,41.6c0-0.3-0.1-0.7-0.4-0.8c-0.8-0.3-1-0.9-1-1.6
                                c0-2.6,0-5.3,0.1-7.9c0-2.3-1-4.2-1.8-6.3c-0.8-0.3-0.7-0.9-0.8-1.5c-0.1-0.6-0.5-1.1-0.8-1.6c-0.4-0.6-0.9-0.8-1.6-0.6
                                c-1.1,0.3-2.2,0.7-3.3,1.1c-0.5,0.2-0.7,0.8-0.5,1.2c0.2,0.3,0.3,0.6,0.7,0.5c0.7-0.1,1.2,0.3,1.6,0.8c0.4,0.7,0.8,1.4,1.1,2.1
                                c0.2,0.4,0.1,0.5-0.3,0.7c-1.3,0.4-2.6,0.9-3.8,1.4c-0.2,0.1-0.5,0.2-0.5,0.5c0,0.9-0.1,1.7,0.4,2.5c0.2,0.2,0.1,0.4-0.1,0.5
                                c-0.3,0.2-0.4,0.5-0.4,0.9c0,1.9,0,3.9,0,5.8c0,1.7,0.8,3.1,2.1,4.1c0.7,0.6,1.5,0.2,1.7-0.7c0.4,0.4,0.8,0.2,1.1,0
                                c0.4-0.3,0.8-0.5,1.2-0.7c0.3,0.7,0.8,1.2,1.5,1.6c0.2,0.1,0.4,0.1,0.7,0c0.9-0.5,1.7-1,2.6-1.5C95.3,42.1,95.3,41.9,95.3,41.6'
              />
              <path
                className='st1' d='M121.1,34.2c-0.1,0.2-0.1,0.4-0.1,0.6c0,1.6,0,3.2,0,4.8c0,0.3-0.1,0.4-0.4,0.4c-1-0.1-1.5-0.6-1.7-1.7
                                c-0.1-1.3,0-2.6,0-3.6c0-1.3,0-2.3,0-3.4c0-0.6,0.2-0.8,0.9-0.9c0.6-0.1,1,0.2,1.2,0.7c0.2,0.5,0,1.1,0.3,1.7
                                C121.4,33.3,121.3,33.8,121.1,34.2 M120.2,30.2c-0.2,0.1-0.4,0.1-0.5,0C119.9,30.1,120,30.2,120.2,30.2 M124.6,31.9
                                C124.6,31.9,124.6,31.9,124.6,31.9c0,2.1,0,4.2,0,6.3c0,0,0,0,0,0C124.5,36.1,124.5,34,124.6,31.9 M124.7,38.3c0-2.1,0.1-4.2,0-6.3
                                c0-1.7-0.6-3.1-1.7-4.3c-0.4-0.4-0.8-0.5-1.4-0.4c-0.9,0.2-1.7,0.4-2.5,0.8c-0.9,0.4-1.9,0.4-2.6,1.2c0,0-0.2,0-0.2,0
                                c-0.7,0-1.3,0.5-1.3,1.2c0,1.4,0,2.9,0,4.6c0,1.4-0.1,3.1,0,4.8c0.1,1.1,0.5,2.2,1.2,3c0.5,0.6,1.1,0.8,1.9,0.5
                                c0.6-0.2,1.2-0.5,1.8-0.7c0.1,0,0.2-0.2,0.3-0.1c0.1,0.1,0,0.2-0.1,0.3c-1.2,1.6-2.5,3.2-4.8,3c-0.1,0-0.2,0-0.3,0.1
                                c-0.2,0.6,0.1,1.4,0.7,1.7c0.2,0.1,0.5,0.2,0.7,0.4c0.5,0.3,0.9,0.4,1.4,0c0.2-0.2,0.3,0,0.4,0.2c0.4,1,1.9,1.3,2.6,0.4
                                c1.6-1.9,2.9-4.1,3.7-6.5c0.3-0.7,0.3-1.4-0.1-2.1c-0.2-0.3-0.1-0.5,0-0.8C124.6,39,124.7,38.7,124.7,38.3'
              />
              <path
                className='st1' d='M63.9,57.5c-1.4,0.7-1.5,0.7-1.4-0.8c0-1.2,0-2.3,0-3.5c0-1.3,0-2.7,0-4c0-0.7,0.2-0.9,0.9-1
                                c0.7-0.1,1.2,0.3,1.2,0.9c0,0.3,0,0.6,0,1c0,2.1-0.1,4.1,0,6.2C64.7,56.9,64.4,57.2,63.9,57.5 M68.6,49.3c0.1-1.8-0.8-3.1-2-4.2
                                c-0.4-0.3-0.7-0.4-1.3-0.2c-0.5,0.2-0.3,0.6-0.4,1c-0.7-0.6-1.2-0.1-1.8,0.2c-0.2,0.1-0.4,0.2-0.5,0.3c-0.2,0.1-0.3,0.1-0.4-0.1
                                c-0.3-0.6-0.8-1.1-1.4-1.4c-0.2-0.1-0.3-0.1-0.6,0c-0.8,0.5-1.6,0.9-2.4,1.3c-0.4,0.2-0.4,0.4-0.3,0.7c0.1,0.3,0,0.7,0.4,0.8
                                c0.5,0.2,0.8,0.6,0.7,1.2c0,0.5,0,1,0,1.5c0,4.5-0.1,9.1-0.1,13.6c0,0.6-0.1,1.2-0.4,1.7c-0.3,0.6-0.8,0.9-1.4,0.9
                                c0.2,0.5,0.3,0.9,0.6,1.4c0.1,0.1,0.1,0.3,0.3,0.2c0.7-0.4,1.7-0.4,2.1-1.3c0.1-0.4,0.4-0.4,0.7-0.3c0.3,0.1,0.6,0.2,0.9,0.1
                                c0.7-0.3,1.3-0.6,2-0.8c0.1-0.1,0.3-0.1,0.3-0.2c0.1-0.5,0-0.9-0.2-1.3c-0.1-0.2-0.4-0.1-0.5-0.2c-0.3-0.1-0.4-0.3-0.4-0.6
                                c-0.1-1,0-2,0-3c0-0.4,0.1-0.5,0.5-0.6c1.7-0.5,3.3-1.2,5-1.9c0.5-0.2,0.7-0.5,0.7-1C68.5,54.5,68.5,51.9,68.6,49.3'
              />
              <path
                className='st1' d='M78,37.5c-0.4,0.6-0.2,1.3-0.2,2c0,0.6-0.2,0.9-0.9,0.9c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.2-0.1-0.5-0.1-0.7
                                c0-1.3,0-2.7,0-4c0-1.3,0-2.7,0-4c0-0.4,0.1-0.6,0.5-0.7c0.7-0.3,1.7,0,1.7,1.1c0,1.7,0,3.3,0,5c0,0.2-0.1,0.5,0.1,0.7
                                C78,37.2,78.1,37.4,78,37.5 M79.7,27.1c-0.2-0.2-0.5-0.4-0.9-0.3c-2.2,0.6-4.4,1.4-6.5,2.3c-0.3,0.1-0.4,0.3-0.4,0.6
                                c0,3.2-0.1,6.4,0,9.6c0,1.5,0.6,2.9,1.8,3.9c0.4,0.4,0.9,0.5,1.5,0.4c0.5-0.1,0.7-0.4,0.8-0.8c0.1-0.3,0.2-0.4,0.5-0.1
                                c0.2,0.2,0.4,0.4,0.8,0.3c1.4-0.5,2.8-1,4.1-1.6c0.3-0.2,0.5-0.4,0.5-0.8c0-1.6,0-3.3,0-4.9c0-1.5,0-2.9,0-4.4
                                C81.8,29.5,81,28.2,79.7,27.1'
              />
              <path
                className='st1' d='M91.7,60.1c-0.5,1-0.2,2-0.3,3c-0.1,0.8-0.8,1.2-1.5,0.9c-0.4-0.2-0.7-0.5-0.7-1c0-0.8,0-1.6,0-2.4
                                c0.1-1.3,0.8-2.1,2.2-2.4c0,0.6,0,1.3,0.2,1.9C91.7,60.1,91.7,60.1,91.7,60.1 M87.8,53.5c0.1,0,0.3,0,0.4,0
                                C88.1,53.6,87.9,53.6,87.8,53.5 M96.6,65.3c-0.1-0.3,0-0.7-0.4-0.8c-0.8-0.3-0.9-0.5-0.9-1.4c0-1.3,0-2.7,0-4c0-1.3,0-2.5,0-3.8
                                c0-1.4-0.4-2.6-1.2-3.7c-0.3-0.4-0.7-0.8-1.3-0.9c-0.3-0.1-0.5-0.1-0.7,0.2c-0.1,0.2-0.2,0.3-0.4,0.1c-0.2-0.2-0.5-0.2-0.7-0.1
                                c-1,0.3-2.1,0.7-3.1,1c-0.7,0.2-0.8,0.6-0.6,1.3c0.1,0.4,0.3,0.5,0.7,0.5c0.7,0,1.5,0.1,2.2,0.3c0.7,0.3,1.1,0.7,1.2,1.5
                                c0,0.3-0.1,0.4-0.4,0.5c-0.5,0.1-0.9,0.3-1.4,0.4c-1.2,0.4-2.3,0.8-3.4,1.4c-0.5,0.3-0.8,0.7-0.8,1.4c-0.1,1.4,0.5,2.9,0,4.3
                                c0,0.1,0,0.2,0,0.3c0.2,1.6,1.1,2.7,2.4,3.5c0.2,0.1,0.3,0,0.5,0c0.9-0.5,1.9-1,2.8-1.5c0.2-0.1,0.3-0.1,0.4,0.1
                                c0.3,0.6,0.8,1.1,1.4,1.4c0.2,0.1,0.4,0.1,0.6,0c0.9-0.5,1.7-1,2.6-1.4C96.6,65.9,96.7,65.6,96.6,65.3'
              />
              <path
                className='st1' d='M109.9,57.5c0,1.4-0.8,2.4-2.2,2.8c0-1.8,0-3.7,0-5.5c0-0.2,0.1-0.4,0.3-0.5c1.1-0.5,1.9-0.1,1.9,1.2
                                C109.9,56.2,109.9,56.8,109.9,57.5 M109.2,53.9c-0.1,0.1-0.2,0.1-0.4,0C108.9,53.8,109,53.8,109.2,53.9 M113.7,59
                                c-0.2-0.7,0-1.3,0-1.9c0-0.6,0-1.3,0-1.9c0.1-1.9-0.9-3.1-2.3-4.1c-0.6-0.4-1.6,0-1.8,0.7c-0.3-0.1-0.5-0.3-0.9-0.2
                                c-1.5,0.5-3,1-4.4,1.7c-0.3,0.1-0.4,0.3-0.4,0.7c0,1.5-0.1,3,0,4.5c0,0.7,0.1,1.3,0,2c-0.1,1-0.1,2,0,3c0.1,1.5,0.6,2.9,1.7,4
                                c0.5,0.4,1,0.6,1.7,0.4c1.3-0.4,2.6-0.8,3.9-1.2c0.7-0.2,0.8-0.5,0.6-1.3c-0.1-0.5-0.4-0.5-0.7-0.5c-0.6,0-1.2-0.1-1.7-0.2
                                c-1-0.2-1.6-0.9-1.6-1.7c0-0.2,0-0.3,0.2-0.3c0.5-0.1,1-0.3,1.5-0.5c1.2-0.4,2.4-0.9,3.5-1.5C113.5,60,113.9,59.6,113.7,59'
              />
            </g>
          </a>
        </g>
        <rect x='111.8' y='152.1' className='st0' width='92.9' height='36.9' />
        <rect x='111.8' y='152.1' className='st3' width='92.9' height='8.4' />
        <rect x='124.9' y='184.6' className='st0' width='3.1' height='18.1' />
        <rect x='140.1' y='184.6' className='st0' width='3.1' height='18.1' />
        <rect x='170.4' y='184.6' className='st0' width='3.1' height='18.1' />
        <rect x='155.3' y='184.6' className='st0' width='3.1' height='18.1' />
        <rect x='185.6' y='184.6' className='st0' width='3.1' height='18.1' />
        <g>
          <path
            className='st1' d='M188.7,176.2c1.9,0,3.5-1.5,3.5-3.5c0-1.9-1.5-3.5-3.5-3.5c-1.9,0-3.5,1.5-3.5,3.5
                        C185.3,174.6,186.8,176.2,188.7,176.2'
          />
          <path
            className='st4' d='M188.7,177c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2c2.3,0,4.2,1.9,4.2,4.2
                        C193,175.1,191.1,177,188.7,177z M188.7,170c-1.5,0-2.7,1.2-2.7,2.7c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7
                        C191.4,171.2,190.2,170,188.7,170z'
          />
        </g>
      </svg>
    )
  }
}

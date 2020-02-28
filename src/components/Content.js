import React from 'react'
import a from '../media/images/a.jpg'
import b from '../media/images/b.jpg'
import c from '../media/images/c.jpg'
import d from '../media/images/d.jpg'
import e from '../media/images/e.jpg'
import f from '../media/images/f.jpg'
import g from '../media/images/g.jpg'
import h from '../media/images/h.jpg'
import i from '../media/images/i.jpg'

const imagesLeft = [a, b, d].map((img, index) => (
  <img src={img} key={index} alt={img} />
))
const imagesRight = [c, e].map((img, index) => (
  <img src={img} key={index} alt={img} />
))
const bestsellers = [f, g, h].map((img, index) => (
  <img src={img} key={index} alt={img} />
))

const Content = () => {
  return (
    <div className='content'>
      <div className='images flex-center'>
        <div className='left'>{imagesLeft}</div>
        <div className='right'>{imagesRight}</div>
        {/* <div>{bestsellers}</div>
        <div>
          <img src={i} alt={i} />
        </div> */}
      </div>
    </div>
  )
}
export default Content

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

import Button from '@material-ui/core/Button'

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
      </div>
      <h1>BESTSELLERY</h1>

      <div className='best flex-center'>
        <div className='b flex-center'>
          <div>{bestsellers[0]}</div>
          <div>
            <h4>Baza rozjaśniająco-matująca BRIGHTENING & MATTIFYING PRIMER</h4>
            <p>rozjaśnia i matuje</p>
          </div>
        </div>

        <div className='b flex-center'>
          <div>{bestsellers[1]}</div>
          <div>
            <h4>Matujący puder sypki MATT your FACE 20</h4>
            <p>UWAGA odkryliśmy sposób na MATT. Od świtu do zmierzchu...</p>
          </div>
        </div>

        <div className='b flex-center'>
          <div>{bestsellers[2]}</div>
          <div>
            <h4>Baza rozjaśniająco-matująca BRIGHTENING & MATTIFYING PRIMER</h4>
            <p>głęboki i mocno nasycony kolor o matowym wykończeniu</p>
          </div>
        </div>
      </div>

      <div className='bottom flex-center'>
        <div>
          <img src={i} alt={i} />
        </div>
        <div className='banner flex-center'>
          <h1>IDEALNY PODKŁAD? CASHMERE FINISH</h1>
          <p>
            Idealny podkład jest jak „mała czarna” stanowi obowiązkowy kosmetyk
            w damskiej kosmetyczce. Matuje, wygładza i wyrównuje koloryt skóry.
            Jest niczym druga skóra, to przysłowiowa „kropka nad i” każdego
            makijażu. Poznaj CASHMERE FINISH mat & cover foundation marki JOKO o
            przedłużonej trwałości, który łączy matowe wykończenie z wysokim
            poziomem krycia.
          </p>
          <Button variant='contained' color='primary' size='large'>
            Więcej informacji
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Content

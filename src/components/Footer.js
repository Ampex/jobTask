import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='links'>
        <div className='around'>
          <div>
            <h5>Kontakt</h5>
            <div className='bar'></div>
            <p>Miraculum S.A.</p>
            <p>ul. Aleje Jerozolimskie 184 B</p>
            <p>02-486 Warszawa</p>
          </div>
          <div style={{ marginTop: 30 }}>
            <p>sekretariat@miraculum.pl</p>
            <p>www.miraculum.pl</p>
          </div>
        </div>
        <div>
          <h5>Infolinia</h5>
          <div className='bar'></div>
          <p>Kontakt dla konsumentów</p>
          <p>801 888 988</p>
        </div>
        <div>
          <div>
            <h5>Kontakt</h5>
            <div className='bar'></div>
            <p>Miraculum S.A.</p>
            <p>ul. Aleje Jerozolimskie 184 B</p>
            <p>02-486 Warszawa</p>
          </div>
          <div>
            <p>sekretariat@miraculum.pl</p>
            <p>www.miraculum.pl</p>
          </div>
        </div>
        <div>
          <h5>Znajdź nans na</h5>
          <div className='bar'></div>
          <p>
            <a href='https://www.facebook.com/JokoMakeupPolska/?fref=ts'>
              Facebook
            </a>
          </p>
          <p>
            <a href='https://www.instagram.com/joko_makeup/'>Pinterest</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React, { useState, Fragment } from 'react'
import { Button, Fade } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const handleSetColor = e => {
  const randomColor =
    '#' +
    Math.random()
      .toString(16)
      .slice(2, 8)
  const target = e.target
  target.style.backgroundColor = randomColor
}

const Element = ({ id, ...props }) => {
  const [isHidden, setIsHidden] = useState(false)

  return isHidden ? null : (
    <Fragment>
      <div onClick={id % 3 === 0 ? handleSetColor : null} className='element'>
        {id}
      </div>
      <CloseIcon onClick={() => setIsHidden(true)} className='close' />
    </Fragment>
  )
}

const Builder = () => {
  const [showElements, setShowElements] = useState(false)

  const handleBuildClick = () => setShowElements(!showElements)

  let elements = []

  for (var i = 1; i <= 100; i++) {
    elements.push(<Element key={i} id={i} />)
  }

  return (
    <Fragment>
      <div>
        <Button
          style={{ marginBottom: 25 }}
          size='large'
          variant='outlined'
          color='primary'
          onClick={handleBuildClick}
        >
          {!showElements ? `create 100 elements` : `hide`}
        </Button>
      </div>
      <Fade in={showElements} timeout={600}>
        <div className='elements flex-center'>{showElements && elements}</div>
      </Fade>
    </Fragment>
  )
}

export default Builder

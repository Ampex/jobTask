import React from 'react'
import {
  Paper,
  IconButton,
  CircularProgress,
  InputBase
} from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'
import CheckIcon from '@material-ui/icons/Check'

const LoadAndFilter = props => {
  const {
    handleHide,
    handleLoad,
    isDisabled,
    isLoaded,
    handleChange,
    value
  } = props

  return (
    <div className='list'>
      <Paper elevation={0} variant='outlined'>
        <IconButton
          onClick={isLoaded ? handleHide : handleLoad}
          aria-label='menu'
          style={{ margin: '0 5px' }}
        >
          {isLoaded ? <CheckIcon color='primary' /> : <PublishIcon />}
          {isDisabled && <CircularProgress style={{ position: 'absolute' }} />}
        </IconButton>
        <InputBase
          className='fetch'
          disabled={isLoaded ? false : true}
          onChange={handleChange}
          type='text'
          value={value}
          placeholder={isLoaded ? 'Filter by title' : 'First load some data'}
        />
      </Paper>
    </div>
  )
}

export default LoadAndFilter

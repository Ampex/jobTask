import React from 'react'
import { Grow, Paper, Typography, Divider } from '@material-ui/core'

const Item = props => {
  const { title, body } = props

  return (
    <div className='item'>
      <Grow in timeout={1000}>
        <Paper elevation={0} variant='outlined'>
          <Typography style={{ padding: 15 }} variant='h5' component='h3'>
            {title}
          </Typography>
          <Divider />
          <Typography
            style={{
              padding: '8px 15px',
              flexWrap: 'nowrap',
              display: 'flex',
              alignItems: 'center'
            }}
            component='p'
          >
            {body}
          </Typography>
        </Paper>
      </Grow>
    </div>
  )
}
export default Item

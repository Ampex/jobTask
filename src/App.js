import React, { Component } from 'react'
import './App.css'
import { Fade } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Repo from './media/posts.json'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import LoadAndFilter from './components/LoadAndFilter'
import Sorted from './components/Sorted'
import Builder from './components/Builder'
import Item from './components/Item'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#111'
    },
    secondary: {
      main: '#08971b'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    }
  }
})

class App extends Component {
  state = {
    items: [...Array(100).keys()],
    list: [],
    value: '',
    sorted: [],
    isLoaded: false,
    isDisabled: false
  }

  //LOAD DATA FROM JSON
  handleLoad = () => {
    if (!this.state.isLoaded) {
      this.setState({
        isDisabled: true
      })
      setTimeout(() => {
        this.setState({
          list: Repo,
          isLoaded: true,
          isDisabled: false
        })
      }, 1200)
    }
  }

  handleHide = () => {
    this.setState({
      isLoaded: false
    })
  }

  //FILTERING
  handleChange = e => {
    const { value, list } = this.state
    this.setState({
      value: e.target.value
    })

    const sorted = list.filter(item => item.title.includes(value))
    const sortedItems = sorted.map(item => (
      <Item key={item.id} title={item.title} body={item.body} />
    ))

    this.setState({
      sorted: sortedItems
    })
  }

  render() {
    const { isDisabled, isLoaded, sorted, value } = this.state

    //JSON LIST
    const list = this.state.list.map(item => (
      <Item key={item.id} title={item.title} body={item.body} />
    ))

    return (
      <ThemeProvider theme={theme}>
        <Fade in timeout={1200}>
          <div className='container'>
            <Header />
            <Content />
            <LoadAndFilter
              value={value}
              handleLoad={this.handleLoad}
              isDisabled={isDisabled}
              isLoaded={isLoaded}
              handleChange={this.handleChange}
              handleHide={this.handleHide}
            />
            {isLoaded && <Sorted value={value} sorted={sorted} list={list} />}
            <Builder />
            <Footer />
          </div>
        </Fade>
      </ThemeProvider>
    )
  }
}

export default App

import React from 'react'
import axios from 'axios'
import ListImages from './components/ListImages'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      imagelinks: []
    }
  }

  search = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3001/search', {
        search: this.state.searchTerm
      })
      .then(res => {
        this.setState({
          imagelinks: res.data
        })
      })
  }

  handleFieldChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  render() {
    return (
      <div>
        <h2>Title search the 100 most viral images on imgur right now</h2>
        <form onSubmit={this.search} >
        <input
          value={this.state.searchTerm}
          onChange={this.handleFieldChange}
        />
        <br/>
        <button type="submit" >Search</button>
        </form>
        <ListImages state={this.state} />
      </div>
    )
  }
}

export default App

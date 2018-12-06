import React, { Component } from 'react'

class Landing extends Component {
  state = {
      locations: [ "Durban,SA" , "Cape Town,SA" ,"PE,SA" , "Johannesburg,SA", "Pretoria,SA", "Delhi,India", "Gujarat,India", "Big Ben,UK" , "California,USA" , "London,UK" ],
      searchInput: '' 
  }

  onInputChange = e => {
      this.setState({ searchInput: e.target.value })
  }

  render() {
    const { searchInput } = this.state

    const filteredLocations = this.state.locations
            .filter(location => location.toLowerCase().includes(searchInput.toLowerCase()))

    return (
        <div className="landing">
            <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h1 className="display-5"> Search our branches </h1>
                            <hr />
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="searchInput" 
                                    placeholder="Location"
                                    className="form-control form-control-md"
                                    defaultValue={this.state.searchInput}
                                    onChange={this.onInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-2 mx-auto text-center text-dark" style={{ overflow: 'auto' }}>
                        <ul className="list-group">
                            {
                                filteredLocations.map((location, index) => {
                                    return <li className="list-group-item" key={index}>{location}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Landing
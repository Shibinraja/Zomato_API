import React, { Component } from 'react'

export class Search extends Component {

    state ={
        name:""
    }

    results = (e) =>{
        e.preventDefault()
        this.props.handleFormSubmit(this.state.name)
        this.props.results()
    }
    render() {
        return (
            <div className="searchBox">

            <input className="searchInput"type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} placeholder="Search"></input>
            <button className="searchButton" onClick={this.results}>
            </button>
        </div>
        )
    }
}

export default Search

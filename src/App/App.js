import React from 'react';
import './App.css';
// import zomato from './zomato';
import Navbar from '../Components/Navbar/Navbar.js'
import Body from '../Components/Body/Body';
import Search from '../Components/Search/Search.js';
import food from './home_page_bg.jpg';
import Results from '../Components/Results/Results.js';
import axios from 'axios'



class App extends React.Component {

  state={
    results :[],
    view:""
  }


    
    handleSubmit = (name) => {
      console.log(name)
      axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=7&entity_type=city&q=${name}&start=1&count=100`,{
        headers: {
          'user-key' : "684d2a36ccab2cee50c807e6b6275e21"
        }
      })
      .then(response => {
        this.setState({results:response.data.restaurants})
        console.log(this.state.results)

      })
    }

    resultitem = () => {
      this.setState({view:"results"})
    }

  
  render(){
    if(this.state.view==="results"){
      return <Results datas ={this.state.results}/>
    }
    return(
        <div>
          <Navbar/>

          <img className="img" src ={food}/>
          <Body/>
          
          <Search  handleFormSubmit={this.handleSubmit} results={this.resultitem}/>

          
          
        </div>
      
    )
  }
}
export default App;

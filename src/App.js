import React, { Component } from 'react'

import ReactSearchBox from 'react-search-box'

export default class App extends Component {
    
    state = {
      data:[],
    };
  
       contactsData= [];
	   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  

  render() {
	  
	
	  
	  var search=[];
	  let valuesTitle= this.state.data.map(el=> search.push({key:el.title,value:el.body}));
	 

    return (
	<div>
      <ReactSearchBox
        placeholder="Placeholder"
        value="search"
        data={search}
        callback={record => console.log(record)}
      />	
         <center > < h1 > Contact List </h1></center > {
            this.state.data.map(el=> ( 
			
			<div class = "card" >
                <div class = "card-body" >                
				<h6 class = "card-subtitle mb-2 text-muted" > { el.title } </h6>
				<p class = "card-text" > { el.body } </p> 
				</div>
				</div>
            ))	  
			} 
	  </div>
	  
    )
	
  }
}
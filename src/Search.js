import React, { Component } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

// const urltosearch = q => `https://api.scryfall.com/cards/search?q=${q}`

export class Search extends Component {
	constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            query: ''
        }
    }

    componentDidMount() {
        
    }

   //  searchinputhandler = (event) => {
   //  	this.setState({
			// query: event.target.value
   //  	}, () => {
			// fetch(`https://api.scryfall.com/cards/search?q=${event.target.value}`)
   //          .then(res => res.json())
   //          .then(json => {
   //              this.setState({
   //                  isLoaded: true,
   //                  data: json.data
   //          })
   //          console.log('data ',this.state.data)
   //      })} 	
   //  }
	searchinputhandler = (e) => {
	    this.setState({
	      query: e.target.value
	    }, () => {
	      if (this.state.query && this.state.query.length > 2) {
	        if (this.state.query.length % 2 === 0) {
	          	AwesomeDebouncePromise(this.searchAPI(), 1000);
	        }
	      } 
	    })
  	}


  	searchAPI = () => {
  		fetch(`https://api.scryfall.com/cards/search?q=${this.state.query}`)
		    	.then(res => res.json())
		    	.then(json => {
		    		this.setState({
		    			isLoaded: true,
		    			data: json.data
		    		})
		    	console.log(this.state.data)
		    })
  	}


	render() {
		if (!this.state.isLoaded) {
			return <div>
					<label >Search</label> <input type="text" value={this.state.query} onChange={this.searchinputhandler} />
				   </div>;
		}else if (!this.state.data) {
			return <div>
					<label >Search</label> <input type="text" value={this.state.query} onChange={this.searchinputhandler} />
					<p>Nothing found.</p>
				</div>;
		}

		

		return (
			<div>
				Search <input type="text" value={this.state.query} onChange={this.searchinputhandler} />
				<ul>
					{this.state.data.map(item => (
						<li key="{item.id}">
							<h2><a href={item.scryfall_uri}>{item.name}</a></h2>
							<div className='card'>
								<a href={item.scryfall_uri}>
								<img className='card-image' src={item.image_uris['normal']} />
								</a>
								<p>{item.oracle_text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Search;

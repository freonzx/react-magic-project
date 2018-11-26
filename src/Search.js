import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import CardList from './components/CardList'
import ShowDeck from './components/ShowDeck'
import { Grid, Paper, Input, Button } from '@material-ui/core/'
import logo from './img/sakashima.jpg'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            query: '',
            total_cards: 0,
            deck: [],
            showDeck: false
        }
    }

    componentDidMount() {
        // this.searchInput.focus();
    }

    // searchinputhandler = (e) => {
    //     this.setState({
    //       query: e.target.value
    //     }, () => {
    //       if (this.state.query && this.state.query.length > 2) {
    //         if (this.state.query.length % 2 === 0) {
    //           this.searchAPI()
    //         }
    //       } 
    //     })
    //  	}
    searchinputhandler = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    addToDeck = (item) => {
        let deckT = this.state.deck
        deckT.push(item)
    	this.setState({
    			deck: deckT
        })
    }

    delDeck = (id) => {
		let deckT = this.state.deck
        deckT.splice(id, 1)
    	this.setState({
    			deck: deckT
        })
    }


    searchAPI = () => {
        fetch(`https://api.scryfall.com/cards/search?q=${this.state.query}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json.data,
                    total_cards: json.total_cards,
                    showDeck: false
                })
                console.log(this.state.data)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.searchAPI()
    }

    handleTest = (e) => {
    	e.preventDefault()
    	this.setState({
                    data: [],
                    showDeck: true,
                    total_cards: 0
        })
    }

    //Search <input type="text" value={this.state.query} onChange={this.searchinputhandler} />
    render() {
        if (!this.state.isLoaded) {
            return <div align="center">
    		<img className='logo-image' src={logo} alt=""/>
			<form onSubmit={this.handleSubmit}>
				{/*<DebounceInput className='searchbox' placeholder='Search for Magic card' minLength={2} debounceTimeout={300} value={this.state.query} onChange={this.searchinputhandler}/>*/}
            	<Input className='searchbox' 
            		   placeholder="Search for Magic card" 
            		   value={this.state.query} 
            		   onChange={this.searchinputhandler}>
            	</Input>

			</form>
		   </div>;
        }

        return (
            <div>
				{/*<DebounceInput className='searchbox' placeholder='Search for card' minLength={2} debounceTimeout={300} value={this.state.query} onChange={this.searchinputhandler}/>*/}

				<div align="center">
					<Button onClick={this.handleTest}>View Deck</Button>
					<form onSubmit={this.handleSubmit}>
					<DebounceInput className='searchbox' placeholder='Search for Magic card' minLength={2} debounceTimeout={300} value={this.state.query} onChange={this.searchinputhandler}/>
					</form>
				</div>

				{this.state.data ?(
					<CardList data={this.state.data}
							  total={this.state.total_cards}
							  addToDeck={this.addToDeck}
							  deck={this.state.deck}/>

				): (<p align="center">Nothing found</p>)}

				{this.state.showDeck ? <ShowDeck data={this.state.deck}
												total={this.state.deck.length}
												delete={this.delDeck}/> : null}
			</div>
        );
    }
}

export default Search;
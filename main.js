import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './Components/list.jsx';
import axios from 'axios';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { term: [] }

		const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
		axios.get(URL)
		.then((data) => {
			this.setState({ term: data });
		})
		.catch((err) => {
			console.log(err);
		});
	}

	render(){
		return (
			<div>
				<List dataList = { this.state.term }/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
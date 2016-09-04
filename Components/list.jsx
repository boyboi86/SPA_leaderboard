import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reactable, { Table, Tr, Td, Thead, Th } from 'reactable';

class List extends Component {

render(){
	if(!this.props.dataList.data){
		return (
			<div>Loading..</div>
		)
	}
		const TopList = this.props.dataList.data.map((el, index) => {
			return (
				<Tr key={index}>
				<Td column="index" data= {index} />
				<Td column="username" data={ el.username} />
				<Td column="recent"  data= {el.recent} />
				<Td column="alltime"  data={el.alltime} />
				</Tr>
				)
		});
		return (
			<Table className="table table-inverse table-striped" sortable={true}>
				<Thead>
					<Th column="index">#</Th>
					<Th column="username">username</Th>
					<Th column="recent">Recent Points</Th>
					<Th column="alltime">All Time Points</Th>
				</Thead>
					{ TopList }
			</Table>
		)
	}
}

export default List;

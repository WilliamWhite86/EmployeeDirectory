import React, { useState } from 'react';
import PageHeader from './PageHeader';
import SearchBar from './SearchBar';
import TableArea from './TableArea';
import TableHeader from './TableHeader';
import TableData from './TableData';
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.css';



export default class EmployeeSearch extends React.Component {

  state = {
    search: '',
    results: []
  };


  // When this component mounts, search the API
  componentDidMount() {
    this.searchEmployees('');
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results },
        console.log(res.data.results)))
      .catch(err => console.log(err));
  };



  employeeSort = event => {
    console.log('button clicked')
    this.setState({
      search: this.state.results.sort()
    });
    return this.renderList();
  };



  filterEmployees = event => {
    console.log('button clicked')
  }

  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <SearchBar></SearchBar>
        <TableArea>
        </TableArea>
        <TableHeader>onClick={() => this.employeeSort()}</TableHeader>
        <TableData
          employeeList={this.state.results}
          employeeSort={this.state.results}
        />
      </div>
    )
  }
}
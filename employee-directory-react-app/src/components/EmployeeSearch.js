import React from 'react';
import PageHeader from './PageHeader';
import SearchBar from './SearchBar';
import TableArea from './TableArea';
import TableHeader from './TableHeader';
import TableData from './TableData';
import API from "../utils/API";

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
      .then(res => this.setState({ results: res.data.results},
        // [0].name.first },
        console.log(res.data.results)))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    console.log(name)
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

    render(){
        return(
            <div>
                <PageHeader></PageHeader>
                <SearchBar></SearchBar>
                <TableArea>
                </TableArea>                    
                <TableHeader></TableHeader>
                <TableData results = {this.state.results}/>
            </div>
        )
    }
}
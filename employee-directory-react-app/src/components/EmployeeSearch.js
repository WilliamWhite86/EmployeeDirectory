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


  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployee("John");
  }

  searchEmployee = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

    render(){
        return(
            <div>
                <PageHeader></PageHeader>
                <SearchBar></SearchBar>
                <TableArea>
                </TableArea>                    
                <TableHeader></TableHeader>
                <TableData></TableData>
            </div>
        )
    }
}
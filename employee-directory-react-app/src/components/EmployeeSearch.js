import React from 'react';
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
      .then(res => this.setState({ results: res.data.results},
        console.log(res.data.results)))
      .catch(err => console.log(err));
  };

//   handleInputChange = event => {
//     event.preventDefault();
//       //gender
//     console.log(event.target)
//     const name = event.target.name;
//     console.log(name)
//     const value = event.target.value;
//     this.setState({
//         //name = html element value = male/female, role, etc.
//       [name]: value
//     });
//   };

  filterEmployees = event => {
      console.log('button clicked')
  }

  handleClick = event => {
    event.preventDefault(); 
    console.log('handle radio click')
    this.filterEmployees(this);
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
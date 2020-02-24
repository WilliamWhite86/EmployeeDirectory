import React from 'react';

export default class FilterBar extends React.Component {
  render() {
    const employeeMaleSorted = this.props.employees.filter(employee => employee.gender != 'female')
      return (
          <div>
              <table className="table table-striped">
                  <tbody>
                      {employeeMaleSorted.map((result) => (
                          <tr key={result.login.username}>
                              <td>{result.name.first} {result.name.last}</td>
                              <td>{result.email}</td>
                              <td>{result.location.city}</td>
                              <td>{result.location.country}</td>
                              <td>{result.gender}</td>
                              </tr>)
                      )}</tbody>
              </table>
          </div>
      );
  }
}
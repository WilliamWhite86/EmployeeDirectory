import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



export default class TableData extends React.Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                        {this.props.employees.map((result) => (
                            <tr key={result.login.username}>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.location.city}</td>
                                <td>{result.location.country}</td>
                                </tr>)
                        )}</tbody>
                </table>
            </div>
        );
    }
}

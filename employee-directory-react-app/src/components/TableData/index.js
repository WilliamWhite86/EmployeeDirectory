import React from "react";



export default class TableData extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        
                    {/* {this.props.results} */}
                    {this.props.results.map((result) => (
                        // console.log(result.name.first)),
                        <tr key={result.login.username}><td >{result.name.first}</td></tr>)
                    )}</tbody></table>



            </div>
        );
    }
}

import React from 'react';

export default class TableHeader extends React.Component {

    render(){
        return(
            <div onClick={() => this.employeeSort()}>
                TableHeader
            </div>
        )
    }
}
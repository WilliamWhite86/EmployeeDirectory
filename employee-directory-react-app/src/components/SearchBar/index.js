import React from 'react';

export default class SearchBar extends React.Component {

    state = {
        search: "",
        employees: []
    };

    handleInputChange = (event) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form>
                    <input
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}>
                    </input>
                    <button>
                        Search
                    </button>
                </form>
            </div>
        )
    }
}
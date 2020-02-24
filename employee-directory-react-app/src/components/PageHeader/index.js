import React from 'react';

export default class PageHeader extends React.Component {

    render() {
        return (
            <div>
                <header>

                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark indigo">
                        <div className="navbar-brand"><strong>Employee Directory</strong></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </header>
            </div>
        )
    }
}
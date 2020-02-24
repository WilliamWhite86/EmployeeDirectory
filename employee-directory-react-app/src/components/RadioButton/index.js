import React from 'react';

export default class RadioButton extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">

                        <form>

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="option1"
                                        className="form-check-input"
                                    />
                                    Option 1
          </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="option2"
                                        className="form-check-input"
                                    />
                                    Option 2
          </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
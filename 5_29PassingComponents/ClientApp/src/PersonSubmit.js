import React from 'react';
import { render } from 'react-dom';

class PersonSubmit extends React.Component {
    render() {
        const { firstName,lastName,age } = this.props;
        return (
            <div className="row">
                <div className="col-md-4">

                    <input value = { firstName }                    
                    onChange={this.props.firstChange}
                    type="text" className="form-control"
                    placeholder="FirstName" />
          
                    <input value={lastName}
                        onChange={this.props.lastChange}
                        type="text" className="form-control"
                        placeholder="LastName" />

                    <input value={age}
                        onChange={this.props.ageChange}
                        type="text" className="form-control"
                        placeholder="Age" />
                </div>
                <div className="col-md-1">
                    <button onClick={this.props.submitClick}
                        className="btn btn-primary">Submit</button>
                </div>
            </div>
        )
    }
}

export default PersonSubmit;
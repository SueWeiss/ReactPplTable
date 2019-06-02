import React from 'react';
class ButtonCounter extends React.Component {

    constructor() {
        super();
        // this.state = {
        //    incrementAmount: 1,
        //    counter: 0
        //};        
    }


    incrementClick = () => {
        this.props.onClickIncrementor();
    }


    render() {
        const { number } = this.props;
        return (
            <div className="row">
                <div className="col-md-2">
                    <h3 style={{ fontSize: 100 }}>{number}</h3>
                    <button className="btn btn-primary" onClick={this.incrementClick}>Increment</button>
                </div>



            </div>
        );
    }
}

export default ButtonCounter;

//INDEX CODE:
//class App extends React.Component {
//    state = {
//        Display: 0

//    }

//    onClickIncrement = () => {
//        this.setState({ Display: this.state.Display + 1 });
//    }

//    render() {
//        return (
//            <div className="container">
//                <ButtonCounter number={this.state.Display} onClickIncrementor={this.onClickIncrement} />
//            </div>
//        );
//    }
//}

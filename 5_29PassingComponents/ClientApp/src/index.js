import React from 'react';
import { render } from 'react-dom';
import ButtonCounter from './BottonCounter';
import PersonSubmit from './PersonSubmit';
import PersonTable from './Table';

class App extends React.Component {
    state = {
            firstName: '',
            lastName: '',
            age: 0,        
        peopleList: []

    }
    
    clear = () => {
        this.setState({ firstName: '', lastName: '', age: ' ' });
    }

    onSubmitClick = () => {
        const copyPersons =  [...this.state.peopleList];
        const person = {
            first: this.state.firstName,
            last: this.state.lastName,
            age: this.state.age
        }
        copyPersons.push(person);
        this.setState({ peopleList: copyPersons })
        this.clear();
        
            }

    textChangeFirst = e => {
        this.setState({ firstName : e.target.value });
    }
    textChangeLast = e => {
        this.setState({ lastName : e.target.value });
    }

    textChangeAge = e => {
        this.setState({ age : e.target.value });
    }
  

    render() {
        return (
            <div className="container">
                <PersonSubmit
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}

                    firstChange={this.textChangeFirst}
                    lastChange={this.textChangeLast}
                    ageChange={this.textChangeAge}
                    submitClick={this.onSubmitClick} />


                <div>
                    <PersonTable
                        peopleList={this.state.peopleList}
                    />
                </div>
            </div>
           
        );
    }
}

render(<App />, document.getElementById('root'));

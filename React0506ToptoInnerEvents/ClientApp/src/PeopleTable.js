import React from 'react';
import PeopleForm from './PeopleForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [
            //{
            //    firstName: 'Chana',
            //    lastName: 'Becker',
            //    age: 20
            //}, 

            //{
            //    firstName: 'Mendy',
            //    lastName: 'Becker',
            //    age: 20
            //}
        ],

        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onFirstNameChange = e => {
        const copy = { ...this.state.person, firstName: e.target.value };
        this.setState({ person: copy });        
    }

    onLastNameChange = e => {
        const copy = { ...this.state.person, lastName: e.target.value };
        this.setState({ person: copy });
    }

    onAgeChange = e => {
        const copy = { ...this.state.person, age:  e.target.value };
        this.setState({ person: copy });
    }

    onAddClick = () => {
        //const peopleCopy = [...this.state.people];
        //peopleCopy.push(this.state.person); 

        const peopleCopy = [...this.state.people, this.state.person] //spreading/copying the array and also tacking on another value - the latest person object
        this.setState(
            {
                people: peopleCopy,
                person: {
                    firstName: '',
                    lastName: '',
                    age: ''
                }
            }
         );
    }

    onClearClick = () => {
        this.setState(
            {
                people: ''

            }
          );
    }



    render() {
        return (

            <div className="container" style={{ marginTop: 60 }}>
                <PeopleForm
                    person={this.state.person}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
              <div className="col-md-8">
                    {!!this.state.people.length && <table className="table table-hover table-striped table-border" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((p, i) => <PersonRow key={i} person={p} />

                                //<tr key={i}>
                                //    <td>{p.firstName}</td>
                                //    <td>{p.lastName}</td>
                                //    <td>{p.age}</td>
                                //</tr>
                            )
                            }

                        </tbody>
                    </table>}  
                     {!this.state.people.length && <h2>No people exist, add people! </h2>} 
                    
                   </div>
            </div>
          
               
                
                
        )
    }


}

export default PeopleTable;
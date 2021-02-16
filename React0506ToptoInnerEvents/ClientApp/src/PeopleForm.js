import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';


class PeopleForm extends React.Component

{

    render() {

        const { firstName, lastName, age } = this.props.person;
        const { onFirstNameChange, onLastNameChange, onAgeChange,onAddClick,  onClearClick } = this.props;

        return (  
             <div className="row jumbotron" style={{ textAlign:"center"  }}>
                <div className="col-md-3">
                    <input
                            value={firstName}
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            onChange={onFirstNameChange}
                      />
                                           
                </div>

                    <div className="col-md-3">
                        <input
                            value={lastName}
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            onChange={onLastNameChange}
                        />
                    </div>

                        <div className="col-md-3">
                            <input
                            value={age}
                            className="form-control"
                            type="text"
                            placeholder="Age"
                            onChange={onAgeChange}
                            />
                       </div>

                      <div className="col-md-3"> 
                        <button className="btn btn-primary" onClick={onAddClick}>Add person </button>
                       </div>                    

                    <div className="col-md-3 offset-md-9" >
                        <button className="btn btn-danger" onClick={onClearClick}>Clear Table</button>
                    </div>
                

          </div>   
          
            )
    }
}

export default PeopleForm;
import React, { Component } from 'react';

class FormEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:this.props.firstName,
            lastName:this.props.lastName
        };
        this.editName = this.editName.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    editName(){
        let nameDiv = document.getElementById("name-group");
        nameDiv.style.display = "none"

        let form = document.getElementsByTagName("form")[0]
        form.style.display = "block"

    }

    submitForm(){
        let nameDiv = document.getElementById("name-group");
        nameDiv.style.display = "block"

        let form = document.getElementsByTagName("form")[0]
        form.style.display = "none"

        let firstNameInput = document.getElementById("firstNameInput");
        let lastNameInput = document.getElementById("lastNameInput");
        console.log("firstname", firstNameInput.value)
        console.log("lastname", lastNameInput.value)

        this.setState({"firstName":firstNameInput.value, "lastName":lastNameInput.value})
    }

    cancel(){
        let nameDiv = document.getElementById("name-group");
        nameDiv.style.display = "block"

        let form = document.getElementsByTagName("form")[0]
        form.style.display = "none"
    }
    render(){
        return(
            <div>
                <div id="name-group">
                    <span id="fname">{this.state.firstName}</span>
                    <span id="lname">{this.state.lastName}</span>
                    <div className="btn-group">
                        <button id="edit" className="btn btn-primary btn-sm btn-block col-md-12" onClick={this.editName}>Edit</button>

                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form style={{display:"none"}}>
                                <div className="form-group" id="fnameInput">
                                    <input type="text" className="form-control" placeholder="First Name" id="firstNameInput" defaultValue={this.state.firstName} />
                                </div>

                                <div className="form-group" id="lnameInput">
                                    <input type="text" className="form-control" placeholder="First Name" id="lastNameInput" defaultValue={this.state.lastName}/>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary" onClick={this.submitForm}>Save</button>

                                    <button type="button" className="btn btn-secondary" onClick={this.cancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>


            </div>
        )
    }
}

export default FormEdit;

import React, { Component } from 'react';

class FormEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:this.props.firstName,
            lastName:this.props.lastName
        };
        this.editName = this.editName.bind(this);
    }

    editName(){
        let nameDiv = document.getElementById("name-group");
        nameDiv.style.display = "none"

        let form = document.getElementsByTagName("form")[0]
        form.style.display = "block"

        let firstNameInput = document.getElementById("firstNameInput");
        let lastNameInput = document.getElementById("lastNameInput");

        this.setState({"firstName":firstNameInput.value, "lastName":lastNameInput.value})
    }

    render(){
        return(
            <div>
                <div id="name-group">
                    <span id="fname">{this.state.firstName}</span>
                    <span id="lname">{this.state.lastName}</span>
                    <button id="edit" onClick={this.editName}>Edit</button>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <form style={{display:"none"}}>
                                <div class="form-group" id="fnameInput">
                                    <input type="text" class="form-control" placeholder="First Name" id="firstNameInput"/>
                                </div>

                                <div class="form-group" id="lnameInput">
                                    <input type="text" class="form-control" placeholder="First Name" id="lastNameInput"/>
                                </div>
                                <div class="form-group">
                                    <input type="button" class="form-control" value="Submit"/>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>


            </div>
        )
    }
}

export default FormEdit;

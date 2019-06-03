import React, {Component} from 'react';

class ContactCard extends Component{
    constructor(props) {
        console.log(props.name)
        super(props);
        this.state = {
            name: this.props.name,
            work_number: this.props.work_number,
            mobile_number: this.props.mobile_number,
            email:this.props.email
        };
        this.updateName = this.updateName.bind(this);
        this.updateWorkNumber = this.updateWorkNumber.bind(this);
        this.updateMobileNumber = this.updateMobileNumber.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    };
    updateName(e){
        console.log(e.target.value)
        this.setState({name: e.target.value});
    };
    updateWorkNumber(e){
        this.setState({work_number: e.target.value});
    };
    updateMobileNumber(e){
        this.setState({mobile_number: e.target.value});
    };
    updateEmail(e){
        this.setState({email: e.target.value});
        console.log(this.state.email)
    };

  render(){
      return(
      <div className="container">
    	<div className="row">
            <div className="col-sm-6">
                <div className="business-card">
                    <div className="media">
                        <div className="media-left">
                            <img className="media-object img-circle profile-img" alt="profile pic" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
                        </div>
                        <div className="media-body">
                            <h2 className="media-heading">{this.state.name}</h2>
                            <div className="mnumber">Mobile Number: {this.state.mobile_number}</div>
                            <div className="wnumber">Work Number: {this.state.work_number}</div>
                            <div className="mail">Email: <a href={this.state.email}>{this.state.email}</a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                {/*
                Extra form info. Not necessary. May be useful for future code
                <form action="#">
                    <div className="form-group">
                        <input type="text" className="name form-control" placeholder="Full name" value={this.props.name} onChange={this.updateName} required></input>
                    </div>

                    <div className="form-group">
                        <input type="tel" className="mobile_number form-control" placeholder="Mobile Number" value={this.props.mobile_number} onChange={this.updateMobileNumber} required></input>
                    </div>
                    <div className="form-group">
                        <input type="email" className="email form-control" placeholder="Email Address" value={this.props.email} onChange={this.updateEmail} required></input>
                    </div>
                    <div className="form-group">
                        <input type="tel" className="work_number form-control" placeholder="Work Number" value={this.props.work_number} onChange={this.updateWorkNumber}></input>
                    </div>

                    <div className="form-group">
                        <input type="button" className="btn btn-primary" id="submit" value="Update Card"></input>
                    </div>
                </form>
                */}
            </div>
    	</div>
    </div>
    )}
}
export default ContactCard;

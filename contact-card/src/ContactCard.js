import React, {Component} from 'react';

class ContactCard extends Component{

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
                            <h2 className="media-heading">Daniel</h2>
                            <div className="mnumber">111-111-1111</div>
                            <div className="wnumber">111-111-1111</div>
                            <div className="mail"><a href="mailto:daniel@bla.ch">daniel@bla.ch</a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <form action="#">
                    <div class="form-group">
                        <input type="text" className="name form-control" placeholder="Full name" required></input>
                    </div>

                    <div class="form-group">
                        <input type="tel" className="mobile_number form-control" placeholder="Mobile Number" equired></input>
                    </div>
                    <div class="form-group">
                        <input type="email" className="email form-control" placeholder="Email Address" equired></input>
                    </div>
                    <div class="form-group">
                        <input type="tel" className="work_number form-control" placeholder="Work Number"></input>
                    </div>

                    <div class="form-group">
                        <input type="button" className="btn btn-primary" id="submit" value="Update Card"></input>
                    </div>
                </form>
            </div>
    	</div>
    </div>
    )}
}
export default ContactCard;

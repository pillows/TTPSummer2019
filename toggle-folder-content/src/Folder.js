import React, { Component } from 'react';

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            status:[true, true, true]
        };

        this.toggleFile = this.toggleFile.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    toggleFile(e){
        // e.target.style.display = "none"
        console.log(e.currentTarget.dataset.id)
        let listId = e.currentTarget.dataset.id

        // .slice() makes a copy of the state array
        let copyStatus = this.state.status.slice()
        copyStatus[listId] = !this.state.status[listId]
        this.setState({status:copyStatus})

        console.log(this.state.status)
    }

    toggleStatus(){

        let list = document.getElementsByTagName("ul")[0].getElementsByTagName("li")

        let copyStatus = this.state.status.slice()

        for(let i = 0; i < list.length; i++){
            if(!this.state.status[i]){
                list[i].style.display = "list-item"
            }
            else{

                list[i].style.display = "none"
            }
             copyStatus[i] = !this.state.status[i]

        }


        this.setState({status:copyStatus})
    }

    render(){
        return(
            <div style={{marginLeft:"50px", marginTop:"50px"}}>
                <div>Home</div>
                <ul>
                    <li data-id="0" onClick={this.toggleFile}>File 1</li>
                    <li data-id="1" onClick={this.toggleFile}>File 2</li>
                    <li data-id="2" onClick={this.toggleFile}>File 3</li>
                </ul>

                <div>
                    <button type="button" onClick={this.toggleStatus} className="btn btn-primary btn-sm">Toggle</button>
                </div>
            </div>
        )
    }
}

export default Folder;

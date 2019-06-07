import React, { Component } from 'react';
import GifCard from './GifCard'
class SearchField extends Component {
    constructor(props){
        super(props);
        this.state = {
            api_key:"6hZFhURMDB2FGWn7NGYQb8FlCxLNru1N",
            image_list:[],
            query:"regular"
        }

        this.randomQuery = this.randomQuery.bind(this)
        this.searchQuery = this.searchQuery.bind(this)
        this.queryChange = this.queryChange.bind(this)
    }

    randomQuery(){
        this.setState({image_list:[]})
        const that = this
        fetch(`http://api.giphy.com/v1/gifs/random?api_key=${this.state.api_key}`)
          .then(function(response) {
            return response.json();
          })
          .then(function(jsonResponse){
              // console.log(jsonResponse.data.image_url)

              that.setState({image_list:[...that.state.image_list, jsonResponse.data.image_url]})
              // console.log(that.state.image_list)
          });


    }

    searchQuery(){
        this.setState({image_list:[]})
        const that = this
        let query_type = this.state.query
        let query_text = document.getElementById("query").value

        let url = ""
        if(query_type === "trending"){
             url = `http://api.giphy.com/v1/gifs/${query_type}?api_key=${this.state.api_key}`

        }

        else if(query_type === "regular"){
             url = `http://api.giphy.com/v1/gifs/search?q=${query_text}&api_key=${this.state.api_key}`
        }

        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(jsonResponse){
              console.log(jsonResponse.data.length)

              for(let i = 0; i < jsonResponse.data.length; i++){
                  // console.log(jsonResponse.data[i].id)

                  let image_constructor = `https://media1.giphy.com/media/${jsonResponse.data[i].id}/giphy.gif`
                  that.setState({image_list:[...that.state.image_list, image_constructor]})
              }

              // that.setState({image_list:[...that.state.image_list, jsonResponse.data.image_url]})
              // console.log(that.state.image_list)
          });
    }

    queryChange(e){
        // console.log(e.target.value)
        let type = e.target.value
        if(type === "trending"){
            document.getElementById("query").readOnly = true
        }
        else{
            document.getElementById("query").readOnly = false
        }
        this.setState({query:e.target.value});
    }

    preventSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-nav navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">Gif Search</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <main role="main" className="container">
                    <div className="starter-template">
                        <form onSubmit={this.preventSubmit}>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="query" placeholder="#RG19"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <select id="query-type" className="form-control" onChange={this.queryChange}>
                                            <option value="regular">Regular</option>
                                            <option value="trending">Trending</option>

                                        </select>

                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-btn btn-group">
                                                <button type="button" className="btn btn-primary" onClick={this.searchQuery}>Search</button>
                                                <button type="button" className="btn btn-secondary" onClick={this.randomQuery}>Random</button>

                                            </span>
                                        </div>


                                    </div>
                                </div>



                            </div>
                        </form>

                        <div id="results" className="mx-auto" style={{width: "300px"}}>


                          {
                        		this.state.image_list.map((obj,index) => {
                        			return (
                        				<GifCard key={index} url={obj}/>
                        			)
                        		})
                        	}
                        </div>
                    </div>

                </main>
            </div>
        )
    }
}

export default SearchField

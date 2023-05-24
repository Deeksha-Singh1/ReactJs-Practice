import React, { Component } from 'react';
import axios from 'axios'; 

class PostApi extends Component {

  constructor(props){
    super(props)
    this.state = {
      userid:'',
      title : '',
      body : ''
    }
  }

changeHandler = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();

  console.log(this.state);

  axios.post("https://jsonplaceholder.typicode.com/posts" , this.state)
  .then(
    response =>{
      console.log(response);
    }
  ).catch(
    error =>{
      console.log(error);
    }
  )
}

  render() {

    // const { userid , title , body} = this.state

    return (
      
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>userId</label>
            <input type="text"  onChange={this.changeHandler} value={this.state.userid}/>
          </div>

          <div>
            <label>title</label>
            <input type="text" value={this.state.title} onChange={this.changeHandler}/>
          </div>

          <div>
            <label>body</label>
            <input type="text" value={this.state.body} onChange={this.changeHandler}/>
          </div>

          <button>Submit</button>
        </form>
      
    );
  }
}

export default PostApi;

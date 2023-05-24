import React, { Component } from 'react'

export class Product extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       favoriteColor : "red",
       show : true
    };
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoriteColor : 'yellow'})
    },1000)
    console.log("color mounted");
  }

 static getDerivedStateFromProps(props , state){
  console.log("color getDerivedState");
    return {favoriteColor : props.favCol};
    
  }

getSnapshotBeforeUpdate(prevProps, prevState){
  return document.querySelector('h1').innerHTML = "Before update the fav color was " + prevState.favoriteColor;
}

componentDidUpdate(){
  console.log("color updated");
  document.querySelector('h1').innerHTML = "After update the fav color is " + this.state.favoriteColor;
}

 shouldComponentUpdate(){
  return false;
 }

  changeColor = () => {
    
    this.setState(
      {favoriteColor : 'blue'}
    );
   
  }

  delHeader = () => {
    this.setState({
      show:false
    });
  }
  
  render() {

    let myHeader ;
    if(this.state.show){
      myHeader = <Child/>
    };

    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>

        <button type='button' onClick={this.changeColor}>Change color</button>
        {myHeader}
        <button onClick={this.delHeader}>Delete Header</button>
      </div>
    )
  }
}

export default Product



class Child extends Component {
  componentWillUnmount(){
    console.log("header unmounted");
    alert("this component named header is about to be unmounted")
  }
  render() {
    return (
      <div> Hello world </div>
    );
  }
}


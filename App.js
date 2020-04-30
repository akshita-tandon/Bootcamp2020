import React, { useState, Component } from 'react';
import './App.css';
import Fruits from './Fruits/Fruits'
import './Fruits/Fruits.css'

class App extends Component{

   state={
      fruits:[],
      name:"",
      quantity:"",
      fruitsInput: ""
     };
    


  submit=()=>{
    const {fruits,name,quantity}=this.state;
    fruits.push([name,quantity]);
    this.setState({fruits: fruits, fruitsInput: ""})
   
  }

  keyPressed=(event)=> {
    if (event.key === "Enter") {
      this.submit();
    }
  }

  deleteFruitHandler=(fruitsIndex)=>{
    const fruits=[...this.state.fruits];
    //console.log(fruits);
    fruits.splice(fruitsIndex,1);
    this.setState({fruits:fruits})
   
  }

  updateInput=(event)=>{
    let input=event.target.value;
    let newInput=input.split("-");
    debugger
    this.setState({name:newInput[0], quantity:newInput[1], fruitsInput: input });
    // console.log(newInput);
    // console.log(this.state);
  
  }

  render(){
    const style={
      backgroundColor:'white',
      display:'block',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };
    const style2= {
      display: 'table',
      border: '1px solid black',
      width: '50%',
      borderCollapse: 'collapse'
    }
 
    const { fruitsInput } = this.state;
    return (
      <div className="App">
        <input id="fruitsquan" type="text" value={fruitsInput} onChange={this.updateInput} onKeyDown={this.keyPressed} ></input>
        <button ref="fruitbutton"
         style={style} onClick={this.submit} >Submit</button>
        <table style={style2}> 
         <tbody>
          {this.state.fruits.map((fruit,index) =>{
            return <Fruits 
            click={() => this.deleteFruitHandler(index)}
            name={fruit[0]}
            quantity={fruit[1]}/>
          })}
           
        </tbody>   
      </table> 
       </div>
    )
}
  
}

export default App;

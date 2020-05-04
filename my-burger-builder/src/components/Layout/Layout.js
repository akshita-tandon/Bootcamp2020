import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component{

   state={
     showSideDrawer:false
   }
 sideDrawerclosedHandler=()=>{
    this.setState({showSideDrawer:false})
 }
 sideDrawerOpenHandler=()=>{
  this.setState((prevState)=>{
     return {showSideDrawer:!prevState.showSideDrawer}
  });
}

  render(){
    return (
      <Aux>
         <ToolBar drawerclick={this.sideDrawerOpenHandler} />
         <SideDrawer closed={this.sideDrawerclosedHandler} open={this.state.showSideDrawer}/>
         <main className={classes.Content}>
           {this.props.children}
         </main>
        </Aux>
    )
  }
}

export default Layout;
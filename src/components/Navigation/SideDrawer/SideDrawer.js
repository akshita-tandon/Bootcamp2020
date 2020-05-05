import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
const sideDrawer =(props)=>{
    let attachedDrawer=[styles.SideDrawer,styles.Close];
    console.log(props.open);
    if(props.open){
        attachedDrawer=[styles.SideDrawer,styles.Open]
    }
    return (
        <Aux>
        <Backdrop clicked={props.closed} show={props.open}/>
        <div className={attachedDrawer.join(' ')}>
            <div className={styles.Logo}>
              <Logo/>
            </div>
            <nav > 
            <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;

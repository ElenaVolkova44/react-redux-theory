import React from 'react';
import {connect} from "react-redux";
import classes from './App.module.css';
import Counter from "./Counter";
import {add, asyncAdd} from "./redux/actions/actions";

class App extends React.Component {

   render() {
      return (
         <div className={classes.App}>
            <div className={classes.AppCounter}>Счетчик {this.props.counter}</div>
            <div className={classes.Buttons}>
               <div className={classes.Button} onClick={this.props.onAdd.bind(this, 1)}>+</div>
               <div className={classes.Button} onClick={this.props.onAdd.bind(this, -1)}>-</div>
               <div className={classes.Button} onClick={this.props.onAsyncAdd.bind(this, 100)}>async 100</div>
            </div>
            <Counter/>
         </div>
      );
   }
}

function mapStateToProps(state){
   return {
      counter: state.counter1.counter
   }
}

function mapDispatchToProps(dispatch) {
   return {
      onAdd: (number) => dispatch(add(number)),
      onAsyncAdd: (number) => dispatch(asyncAdd(number))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

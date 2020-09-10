import React, {Component} from 'react';
import {connect} from "react-redux";
import {add2} from "./redux/actions/actions";

class Counter extends Component {
   render() {
      return (
         <div style={{padding: 20, border: '1px solid #ccc'}}>
            <h1>Counter {this.props.counter}</h1>
            <hr/>
            <div>
               <button onClick={this.props.onAdd.bind(this, 1)}>add</button>
               <button onClick={this.props.onAdd.bind(this, -1)}>sub</button>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state){
   return {
      counter: state.counter2.counter
   }
}

function mapDispatchToProps(dispatch){
   return {
      onAdd: number => dispatch(add2(number))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

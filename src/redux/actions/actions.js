import {ADD} from "./actionTypes";
import {ADD2} from "./actionTypes";

export function add(number) {
   return {
      type: ADD, number
   }
}

export function add2(number) {
   return {
      type: ADD2, number
   }
}

export function asyncAdd(number) {
   return (dispatch) => {
      setTimeout(()=> {
         dispatch(add(number))
      }, 3000)
   }
}

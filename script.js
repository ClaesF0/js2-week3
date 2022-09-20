import "./style.css";
import {addNumbers} from "./math.mjs";
import {showAlternateMessage, showMessage} from "./showmessage.mjs"
import { functionOne, functionTwo } from "./showmessage.mjs";
import passTheBall, {shootTheBall} from "./team.mjs";




/* 
TO IMPORT EVERYTHING FROM FILE: 
import * as math from "./math.mjs" 
math.addNumbers();
*/

const result = addNumbers (100, 100);
console.log("result: ", result);

shootTheBall();
passTheBall();
showMessage();
showAlternateMessage("hello i am showAlternateMessage in use");
functionOne();
functionTwo();


//pls create module script file 
//name it actions
//create a function which will show a message to the user
//name this function showMessage
//this func takes a message as an argument 
//and console log it to the user
//user
//showMessage(message)
//go to the main.js and use this function with this message
//"hello i am showMessage in use"



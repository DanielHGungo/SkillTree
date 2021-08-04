//array with Lines ids of all connectors for the Guide Button AKA Line-Button-Array
//var GuideArray=["Guide-Scavenger", "Guide-Walker", "Guide-Pioneer"];
// const express = require('express');
// const router = express.Router();
// const MoviesDAO = require('../public/dao/moviesDAO')

// extract, extractObject are reading variables
let extract;
let extractObject;
//hidden_input, input_Object are writing variables
let hidden_input;
let input_Object = {};

var LockedButtons = [];
var LockedButtonsNotCreated = true;

var totalPoints = 0;
var myPoints = 10;
let ListOfKeys = ["Attr1", "Attr2", "Attr3", "Attr4", "Attr5", "Attr6", "Attr7", "Attr8", "Attr9"];
var myCountry = ["USA"];
var Attr1Array = ["Attr1-Attr3", "Attr1-Attr4"];
var Attr3Array = ["Attr3-Attr5"];
var Attr4Array = ["Attr4-Attr5"];
var Attr5Array = ["Attr5-Attr6"];
var Attr2Array = ["Attr2-Attr7", "Attr2-Attr8"];
var Attr6Array = [], Attr9Array = [];
var Attr7Array = ["Attr7-Attr9"];
var Attr8Array =["Attr8-Attr9"];
var Passer = "";
var myData = {
    "_id":{"$oid":"610199a5425cfdb01d39df6a"},
    "owner":"Daniel",
    "skills":
      {"Exploration":{"Attr1":true,"Attr2":false,"Attr3":false,"Attr4":true,"Attr5":false,"Attr6":false,"Attr7":false,"Attr8":false,"Attr9":false},
      "Necromancy":{"Attr1":false,"Attr2":true,"Attr3":false,"Attr4":false,"Attr5":false,"Attr6":false,"Attr7":false,"Attr8":true,"Attr9":false},
      "Archaeomancy":{"Attr1":true,"Attr2":true,"Attr3":false,"Attr4":false,"Attr5":false,"Attr6":false,"Attr7":false,"Attr8":false,"Attr9":false},
      "Inkomancy":{"Attr1":true,"Attr2":true,"Attr3":false,"Attr4":true,"Attr5":false,"Attr6":true,"Attr7":false,"Attr8":false,"Attr9":false},
      "Elementomancy":{"Attr1":false,"Attr2":false,"Attr3":false,"Attr4":false,"Attr5":false,"Attr6":false,"Attr7":false,"Attr8":false,"Attr9":false}
      }
};
//array that holds all the Line-Button-Arrays
var LineMasterArray = [Attr1Array, Attr2Array, Attr3Array, Attr4Array, Attr5Array, Attr6Array, Attr7Array, Attr8Array, Attr9Array];
//object that holds the index position of the Line-Button-Arrays in the LineMasterArray
var A1LinesType2 = ["Attr1-Attr2", "Attr1-Attr3", "Attr1-Attr4"];
var A2LinesType2 = ["Attr2-Attr5"];
var A3LinesType2 = ["Attr3-Attr7", "Attr3-Attr6"];
var A4LinesType2 = ["Attr4-Attr6"];
var A5LinesType2 = [], A9LinesType2 =[];
var A6LinesType2 = ["Attr6-Attr8"];
var A7LinesType2 = ["Attr7-Attr9"];
var A8LinesType2 = ["Attr8-Attr9"];
var LMArrayType2 = [A1LinesType2, A2LinesType2, A3LinesType2, A4LinesType2, A5LinesType2, A6LinesType2, A7LinesType2, A8LinesType2, A9LinesType2];
const ButtonMasterArray = {
	Attr1: 0,
	Attr2: 1,
	Attr3: 2,
	Attr4: 3,
	Attr5: 4,
	Attr6: 5,
	Attr7: 6,
	Attr8: 7,
	Attr9: 8
};
var ButtonTruths = {
	Attr1: false,
	Attr2: false,
	Attr3: false,
	Attr4: false,
	Attr5: false,
	Attr6: false,
	Attr7: false,
	Attr8: false,
	Attr9: false
};
var BtnObjSuprArray = [ButtonTruths];
var nmButtonTruths = JSON.parse(JSON.stringify(ButtonTruths));
var arButtonTruths = JSON.parse(JSON.stringify(ButtonTruths));
var ioButtonTruths = JSON.parse(JSON.stringify(ButtonTruths));
var elButtonTruths = JSON.parse(JSON.stringify(ButtonTruths));
BtnObjSuprArray.push(nmButtonTruths);
BtnObjSuprArray.push(arButtonTruths);
BtnObjSuprArray.push(ioButtonTruths);
BtnObjSuprArray.push(elButtonTruths);
//ButtonTruths.Attr4 = true;
//console.log("[Attr4] is " + ButtonTruths[`Attr4`]);
//console.log("the bool is " + BtnObjSuprArray[0][3]);
//let mytemp = "Attr4";
/*if(BtnObjSuprArray[0][mytemp] == true) {
	console.log("the double bracket notation works!");
}
else { console.log("the boolean didn't detect proper"); }
*/
var MayITurnOn = {
	Attr1: true,
	Attr2: true,
	Attr3: false,
	Attr4: false,
	Attr5: false,
	Attr6: false,
	Attr7: false,
	Attr8: false,
	Attr9: false
};
var MITOsuperArray = [MayITurnOn];
var nmMayITurnOn = JSON.parse(JSON.stringify(MayITurnOn));
var arMayITurnOn = JSON.parse(JSON.stringify(MayITurnOn));
var ioMayITurnOn = JSON.parse(JSON.stringify(MayITurnOn));
var elMayITurnOn = JSON.parse(JSON.stringify(MayITurnOn));
MITOsuperArray.push(nmMayITurnOn);
MITOsuperArray.push(arMayITurnOn);
MITOsuperArray.push(ioMayITurnOn);
MITOsuperArray.push(elMayITurnOn);
/*var MayITurnOff = {
	Attr1: false,
	Attr2: false,
	Attr3: false,
	Attr4: false,
	Attr5: false,
	Attr6: false,
	Attr7: false,
	Attr8: false,
	Attr9: false
};
var MITOFFsuperArray =[MayITurnOff];
var nmMayITurnOff = JSON.parse(JSON.stringify(MayITurnOff));
MITOFFsuperArray.push(nmMayITurnOff); */
//not used atm....MancyTruths
/*
var MancyTruths = {
	Exploration: false,
	Archaeomancy: false
};*/


var ListofMancys = ["Exploration", "Necromancy", "Archaeomancy", "Inkomancy", "Elementomancy"];
//var GuideArray = ["Guide-Scavenger"];
// e is Attr#, my is the unique # for each Mancy
function newPower(e, my){
	let myprefix = getmyID(my);
	let myE = myprefix + e;
	//console.log("myE is " + myE);
	//bfs lets me return early from ButtonFlagSetter and debug/add features
	let bfs = "";
	let cbs = "";
	//console.log("hello missy the value of boolean is" + ButtonTruths[e]);
if(BtnObjSuprArray[my][e] == false){
	if(myPoints <= 0){ console.log("no points"); return; }	
	if(MITOsuperArray[my][e] == true) {
		BtnObjSuprArray[my][e] = true;
		if(my <= 2) {
		bfs = ButtonFlagSetter(e, my);
		document.getElementById(myE).style.background = "aqua";
		pointUsed();
		Passer = getMyArray(e, my);
		LineLighter(Passer, BtnObjSuprArray[my][e], myprefix);
		}
		else if (my <= 5){
			bfs = bfsTypeTwo(e, my);
			document.getElementById(myE).style.background = "yellow";
			pointUsed();
			Passer = getMyArray(e, my);
			LineLighter(Passer, BtnObjSuprArray[my][e], myprefix);
		}
	
	}
	else{ console.log(e + " could not be turned on before its parent."); }

}
else if(BtnObjSuprArray[my][e] == true){
	if(LockedButtons[my][ButtonMasterArray[e]]){
		console.log('This button is LOCKED!');
		return;
	}

	if(document.getElementById(myE).style.background == "yellow"){
		console.log('that button was yellow!');
	}
	//cbs function checks if childs of a button are off, returning true if they're off, false if even 1 is on
	if(my <= 2){
		if(AreMyChildsOff(e, my) == true) { 
			document.getElementById(myE).style.background = "radial-gradient(grey 10%, black )";
			pointReturned();
			BtnObjSuprArray[my][e] = false;
			bfs = ButtonFlagSetter(e, my);
			Passer = getMyArray(e, my);
			LineLighter(Passer, BtnObjSuprArray[my][e], myprefix);
			}
			else { console.log("childs were not off; could not turn off button."); }
	}
	// copy same block code for my 3-5
	else if(my <= 5){
		if(AMCoffTwo(e, my) == true){
		document.getElementById(myE).style.background = "radial-gradient(grey 10%, black )";
		pointReturned();
		BtnObjSuprArray[my][e] = false;
		bfs = bfsTypeTwo(e, my);
		Passer = getMyArray(e, my);
		LineLighter(Passer, BtnObjSuprArray[my][e], myprefix);
		}
		
	}
	
}
else {
	console.log("error with boolean in ButtonTruths.");
}
}
function getmyID(my){
	if (my == 0) {return "";}
	else if (my == 1) {return "nm";}
	else if (my == 2) {return "ar";}
	else if (my == 3) {return "io";}
	else if (my == 4) {return "el";}
	else { 
		console.log("Trouble with getmyID func");
		return null;
	}
}
function LineLighter(e, BT, myprefix){
	if (BT == true){
		for(let i = 0; i<e.length; i++){
		//console.log("I should turn on " + myprefix + e[i]);
		let myline = myprefix + e[i];
		//console.log("and the output can! " + mylight);
		document.getElementById(myline).style.backgroundColor = "yellow";
		}
	}
	if(BT == false){
		for(let i = 0; i<e.length; i++){
		let OffLine = myprefix + e[i];
		document.getElementById(OffLine).style.backgroundColor = "green";
		}
	}
}
function getMyArray(e, my){
	if(my <= 2){
	let p = ButtonMasterArray[e];
	return LineMasterArray[p];
	}
	else if (my <= 4){
	let p = ButtonMasterArray[e];
		// console.log("my is less than 5 but greater than 2");
		return LMArrayType2[p];
	}
	else{ console.log("my did not fit my getMyArray param expectations"); }
}

function hideAllBut(e) {
	for(let k = 0; k < ListofMancys.length; k++){
		document.getElementById(ListofMancys[k]).style.visibility = "hidden";
	}
	document.getElementById(e).style.visibility = "visible";
}

// function submit(){
// 	// hidden_input = document.querySelector("[name='js_object']");
// 	// hidden_input.value = JSON.stringify(ButtonTruths);
// 	// router.post('/', (req, res) =>{
//     // console.log('I posted it boss');
	
// 	// });
//     // inputJSON = JSON.parse(JSON.stringify(ButtonTruths));
// 	// console.dir(`Initial data transfer inputJSON: ${inputJSON}`);
// 	console.log('I submitted the json to the console');
// 	document.getElementById('myData').innerHTML = "This is my NEW data";
// }
//UNUSED TRICK?
//TODO: Once Save my skills is done, do not allow Load my skills.
function trick(){
	console.log('Creating the input_Object: ');
	for(let k=0; k<ListofMancys.length; k++){
		input_Object[ListofMancys[k]] = JSON.parse(JSON.stringify(BtnObjSuprArray[k]));
	}
	console.log('Completed change');
	console.log(input_Object);
	hidden_input = JSON.stringify(input_Object);
	document.getElementById('inputBtns').value = hidden_input;
	document.getElementById('inputNumSkills').value = 22;

	document.getElementById('skillSaverForm').submit();
	// hidden_input = JSON.stringify(ButtonTruths);
	// document.getElementById('inputAttr1').value = hidden_input;
	// let h2i = JSON.stringify(nmButtonTruths);
	// document.getElementById('inputAttr2').value = h2i;
}
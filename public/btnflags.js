// Logic for turning on buttons for type 1 skill tree
function ButtonFlagSetter(e, my){
	if(e == "Attr6" || e == "Attr9"){
		return "BFScomplete";
	}
	if( e == "Attr1"){
		if(BtnObjSuprArray[my][e] == true){
		MITOsuperArray[my][`Attr3`] = true;
		MITOsuperArray[my][`Attr4`] = true;
		return "BFScomplete";
		}
		if(BtnObjSuprArray[my][e] == false){
		MITOsuperArray[my][`Attr3`] = false;
		MITOsuperArray[my][`Attr4`] = false;
		return "BFScomplete";
		}
	}
	else if( e == "Attr3"){
		if(BtnObjSuprArray[my][e] == true){
			MITOsuperArray[my][`Attr5`] = true;
			return "BFScomplete";
		}
		if(BtnObjSuprArray[my][e] == false && BtnObjSuprArray[my][`Attr4`] == false){
			MITOsuperArray[my][`Attr5`] = false;
			return "BFScomplete";
		}
	}
	else if( e == "Attr4"){
		if(BtnObjSuprArray[my][e] == true){
			MITOsuperArray[my][`Attr5`] = true;
			return "BFScomplete";
		}
		if(BtnObjSuprArray[my][e] == false && BtnObjSuprArray[my][`Attr3`] == false){
			MITOsuperArray[my][`Attr5`] = false;
			return "BFScomplete";
		}
	}
	else if( e == "Attr5"){
		if(BtnObjSuprArray[my][e] == true){
			MITOsuperArray[my][`Attr6`] = true;
			return "BFScomplete";
		}
		else if(BtnObjSuprArray[my][e] == false){
			MITOsuperArray[my][`Attr6`] = false;
			return "BFScomplete";
		}
	}
	else if( e == "Attr2"){
		if(BtnObjSuprArray[my][e] == true){
			MITOsuperArray[my][`Attr7`] = true;
			MITOsuperArray[my][`Attr8`] = true;
			return "BFScomplete";
		}
		else if(BtnObjSuprArray[my][e] == false) {
			MITOsuperArray[my][`Attr7`] = false;
			MITOsuperArray[my][`Attr8`] = false;
			return "BFScomplete";
		}
	}
	else if( e == "Attr7" || e == "Attr8"){
		if(BtnObjSuprArray[my][e] == true){
			MITOsuperArray[my][`Attr9`] = true;
			return "BFScomplete";
		}
		else if (BtnObjSuprArray[my][e] == false && BtnObjSuprArray[my][`Attr8`] == false){
			MITOsuperArray[my][`Attr9`] = false;
			return "BFScomplete";
		}
	}
	else{
		console.log("BFS could not find a matching button for argument e");
		return "BFSvoid";
	}

}
function AreMyChildsOff(e, my){
	if( e == "Attr9" || e == "Attr6"){
		return true;
	}
	if( e == "Attr1"){
		if(BtnObjSuprArray[my][`Attr3`] == false && BtnObjSuprArray[my][`Attr4`] == false){
			return true;
		}
		else { return false; }
	}
	else if( e == "Attr3" ){
		if(BtnObjSuprArray[my][`Attr5`] == false){
			return true;
		}
		else {
			if(BtnObjSuprArray[my][`Attr4`] == true){ return true; }
			else {
				return false;
			} 
		}
	}
	else if( e == "Attr4" ){
		if(BtnObjSuprArray[my][`Attr5`] == false){
			return true;
		}
		else {
			if(BtnObjSuprArray[my][`Attr3`] == true){ return true; }
			else {
				return false;
			} 
		}
	}
	else if( e == "Attr5"){
		if(BtnObjSuprArray[my][`Attr6`] == false){
			return true;
		}
		else { return false; }
	}
	else if( e == "Attr2"){
		if(BtnObjSuprArray[my][`Attr7`] == false && BtnObjSuprArray[my][`Attr8`] == false){
			return true;
		}
		else { return false; }
	}
	else if( e == "Attr7" ){
		if(BtnObjSuprArray[my][`Attr9`] == false){
			return true;
		}
		else {
			if(BtnObjSuprArray[my][`Attr8`] == true){ return true; }
			else {
				return false;
			} 
		}
	}
	else if( e == "Attr8" ){
		if(BtnObjSuprArray[my][`Attr9`] == false){
			return true;
		}
		else {
			if(BtnObjSuprArray[my][`Attr7`] == true){ return true; }
			else {
				return false;
			} 
		}
	}
	else { return "error in cbs";}
}
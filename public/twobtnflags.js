function bfsTypeTwo(e, my){
    if(e == "Attr5" || e == "Attr9"){
        return "bfsTypeTwo complete";
    }
    if(e == "Attr1"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr2`] = true;
            MITOsuperArray[my][`Attr3`] = true;
            MITOsuperArray[my][`Attr4`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == false){
            MITOsuperArray[my][`Attr2`] = false;
            MITOsuperArray[my][`Attr3`] = false;
            MITOsuperArray[my][`Attr4`] = false;
            return "bfsTypeTwo complete";
        }
    }
    if(e == "Attr2"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr5`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == false){
            MITOsuperArray[my][`Attr5`] = false;
            return "bfsTypeTwo complete";
        }

    }
    if(e == "Attr3"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr6`] = true;
            MITOsuperArray[my][`Attr7`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == false && BtnObjSuprArray[my][`Attr4`] == false){
            MITOsuperArray[my][`Attr6`] = false;
            MITOsuperArray[my][`Attr7`] = false;
            return "bfsTypeTwo complete";
        }
    }
    if(e == "Attr4"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr6`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr6`] = true;
            return "bfsTypeTwo complete";
        }
    }
    if(e == "Attr6"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr8`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == false){
            MITOsuperArray[my][`Attr8`] = false;
            return "bfsTypeTwo complete";
        }
    }
    if(e == "Attr7"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr9`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == false && BtnObjSuprArray[my][`Attr8`] == false){
            MITOsuperArray[my][`Attr9`] = false;
            return "bfsTypeTwo complete";
        }
    }
    if(e == "Attr8"){
        if(BtnObjSuprArray[my][e] == true){
            MITOsuperArray[my][`Attr9`] = true;
            return "bfsTypeTwo complete";
        }
        if(BtnObjSuprArray[my][e] == false && BtnObjSuprArray[my][`Attr8`] == false){
            MITOsuperArray[my][`Attr9`] = false;
            return "bfsTypeTwo complete";
        }
    }
}
function AMCoffTwo(e, my){
    if ( e == "Attr9" || e == "Attr5"){
        return true;
    }
    if( e == "Attr1"){
        if(BtnObjSuprArray[my][`Attr2`] == false && BtnObjSuprArray[my][`Attr3`] == false && BtnObjSuprArray[my][`Attr4`] == false){
            return true;
        }
        else { return false; }
    }
    if( e == "Attr2"){
        if(BtnObjSuprArray[my][`Attr5`] == false){
            return true;
        }
        else { return false; }
    }
    if( e == "Attr3"){
        if(BtnObjSuprArray[my][`Attr7`] == false){
            if(BtnObjSuprArray[my][`Attr6`] == false){ return true; }
            else{
                if(BtnObjSuprArray[my][`Attr4`] == true){ return true; }
                else{ return false; }
            }
        }
        else { return false; }
    }
    if( e == "Attr4"){
        if(BtnObjSuprArray[my][`Attr6`] == false){
            return true;
        }
        else {
            if(BtnObjSuprArray[my][`Attr3`] == true){ return true; }
            return false;
            }
    }
    if( e == "Attr6"){
        if(BtnObjSuprArray[my][`Attr8`] == false){
            return true;
        }
        else { return false; }
    }
    if( e == "Attr7"){
        if(BtnObjSuprArray[my][`Attr9`] == false){
            return true;
        }
        else{ 
            if(BtnObjSuprArray[my][`Attr8`] == true){
                return true;
            }
            else { return false;}
        }
    }
    if( e == "Attr8"){
        if(BtnObjSuprArray[my][`Attr9`] == false){
            return true;
        }
        else{ 
            if(BtnObjSuprArray[my][`Attr7`] == true){
                return true;
            }
            else { return false;}
        }
    }
}
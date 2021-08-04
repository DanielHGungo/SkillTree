function displayPoints(){
    document.getElementById("points").innerHTML = "Skill Points available: "+ myPoints;
}
function pointUsed(){
     myPoints--; 
     displayPoints(); }
function pointReturned(){ myPoints++; displayPoints(); }


// let ListOfMancys = ["Exploration", "Necromancy", "Archaeomancy", "Inkomancy", "Elementomancy"];
// let ListOfKeys = ["Attr1", "Attr2", "Attr3", "Attr4", "Attr5", "Attr6", "Attr7", "Attr8", "Attr9"];
function loadMySkills(){
    if(LockedButtonsNotCreated){
        for(let p=0; p<27; p++){
            LockedButtons.push([false, false, false, false, false, false, false, false, false,]);
        }
    }
    extract = document.getElementById('initialBtns').innerHTML;
    if(extract.length <= 20){
        console.log('no database connected');
        return;
    }
    console.log('turning extract into Object');
    extractObject = JSON.parse(extract);
    // k is the unique number for each Mancy
    for(let k=0; k<ListofMancys.length; k++){
        //h is the button Attr #
        for(let h=0; h<9; h++){
            if(extractObject['skills'][ListofMancys[k]][ListOfKeys[h]] === true){
                // console.log(' Calling newPower() at : ' + ListofMancys[k] + ':  ' +ListOfKeys[h]);
                newPower(ListOfKeys[h], k);
                LockedButtons[k][h] = true;
                // console.log('1st argument is: '+ListOfKeys[h]);
                // console.log('2nd argument is: ' +k);
            }
        }
    }
    LockedButtonNotCreated = false;
    document.getElementById('myLoader').style.visibility='hidden';
}
function myTime(){ 
    document.getElementById('timingTest').value='FAST';
}
function showLocked(){ 
    console.log(LockedButtons);
}
// function getDiv(){
    // extract = document.getElementById('initialBtns').innerHTML;
    // console.log('turning extract into Object');
    // extractObject = JSON.parse(extract);
    // console.dir(extract);
// }
function displayPoints(){
    totalPoints = parseInt(document.getElementById('initialPoints').innerHTML);
    myPoints = totalPoints - pointsUsed;
    document.getElementById("points").innerHTML = "Skill Points available: "+ myPoints;
}
function pointUsed(){
     pointsUsed++; 
     displayPoints(); }
function pointReturned(){ pointsUsed--; displayPoints(); }

function changePoints(){
    totalPoints++;
    document.getElementById('initialPoints').innerHTML = totalPoints;
    displayPoints();
}

// let ListOfMancys = ["Exploration", "Necromancy", "Archaeomancy", "Inkomancy", "Elementomancy"];
// let ListOfKeys = ["Attr1", "Attr2", "Attr3", "Attr4", "Attr5", "Attr6", "Attr7", "Attr8", "Attr9"];
function loadMySkills(){
    // if(LockedButtonsNotCreated){
    //     for(let p=0; p<27; p++){
    //         LockedButtons.push([false, false, false, false, false, false, false, false, false,]);
    //     }
    // }
    resetMySkills(false);
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
    // LockedButtonNotCreated = false;
    document.getElementById('myLoader').style.visibility='hidden';
}
//used for dev only
function myTime(){ 
    document.getElementById('timingTest').value='FAST';
}
//used for dev only
function showLocked(){ 
    console.log(LockedButtons);
}
// TODO: move these js functions into smaller js file 
// because it is only for index.ejs 'login page'
function showSignInBlock(){ 
    document.getElementById('LoginBlock').style.visibility='hidden';
    document.getElementById('SignInBlock').style.visibility='visible';
}
function showLoginBlock(){ 
    document.getElementById('SignInBlock').style.visibility='hidden';
    document.getElementById('LoginBlock').style.visibility='visible';
}
function removeInvalidUserMsg(){
    document.getElementById('LoginErrorMsg').style.visibility='visible';
    setTimeout(function(){
        document.getElementById('LoginErrorMsg').style.visibility='hidden';
    }, 2000);
}

//Reset global variables, and css
function resetMySkills(UserClicked){
    if(UserClicked){
      document.getElementById('ResetStatus').innerHTML="Reseting Skills...";
    }
    //LockedButtons array
    for (let a=0; a < LockedButtons.length; a++){
        for(let b=0; b < LockedButtons[a].length; b++){
            LockedButtons[a][b] = false;
        }
    }
    //points
    pointsUsed = 0;
    displayPoints();

    //ButtonTruths Master Array "BtnObjSuprArray"
    for(let c=0; c < BtnObjSuprArray.length; c++){
        BtnObjSuprArray[c][`Attr1`] = false;
        BtnObjSuprArray[c][`Attr2`] = false;
        BtnObjSuprArray[c][`Attr3`] = false;
        BtnObjSuprArray[c][`Attr4`] = false;
        BtnObjSuprArray[c][`Attr5`] = false;
        BtnObjSuprArray[c][`Attr6`] = false;
        BtnObjSuprArray[c][`Attr7`] = false;
        BtnObjSuprArray[c][`Attr8`] = false;
        BtnObjSuprArray[c][`Attr9`] = false;
    }
    
    //MayITurnOn "MITOsuperArray"
    for(let d=0; d < MITOsuperArray.length; d++){
        MITOsuperArray[d][`Attr1`] = true;
        MITOsuperArray[d][`Attr2`] = true;
        MITOsuperArray[d][`Attr3`] = false;
        MITOsuperArray[d][`Attr4`] = false;
        MITOsuperArray[d][`Attr5`] = false;
        MITOsuperArray[d][`Attr6`] = false;
        MITOsuperArray[d][`Attr7`] = false;
        MITOsuperArray[d][`Attr8`] = false;
        MITOsuperArray[d][`Attr9`] = false;
    }

    //CSS
    let CssElements = document.getElementsByClassName("connector");
    // console.log(CssElements);
    for(let e=0; e < CssElements.length; e++){
        CssElements[e].style.backgroundColor = "green";
    }
    let SkillElements = document.getElementsByClassName("Skill");
    let SkillElements2 = document.getElementsByClassName("Skill2");

    for(let f=0; f < SkillElements.length; f++){
        SkillElements[f].style.background = "radial-gradient(grey 10%, black )";
    }

    for(let f2=0; f2 < SkillElements2.length; f2++){
        SkillElements2[f2].style.background = "radial-gradient(grey 10%, black )";
    }

    if(UserClicked){
      document.getElementById('ResetStatus').innerHTML="Skills were Reset!";
      setTimeout(function(){
          document.getElementById('ResetStatus').innerHTML="";
      }, 4000);
    }

    document.getElementById('myLoader').style.visibility='visible';
    // console.log(LockedButtons);
    // console.log(BtnObjSuprArray);
    // console.log(MITOsuperArray);
}
// function getDiv(){
    // extract = document.getElementById('initialBtns').innerHTML;
    // console.log('turning extract into Object');
    // extractObject = JSON.parse(extract);
    // console.dir(extract);
// }
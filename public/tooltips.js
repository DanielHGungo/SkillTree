function tooltip(e){
	let ev = window.event;
	let x = ev.clientX;
	let y = ev.clientY;
	//let offset = 50;
	let stringY = `${x + 5}px`;
	/*be WARNED this code works or doesnt work based on no space before px: let stringY = `${x + offset} px`; */
	let stringX = `${y + 5}px`;
	//console.log(`${x + offset} px`);
	//console.log("stringY equals " + stringY);
	//console.log("stringX equals " + stringX);
	//document.getElementById(e).style.left = "250px";
	document.getElementById(e).style.left = stringY;
	document.getElementById(e).style.top = stringX;
    //document.getElementById(e).style.top = `${x + offset} px`;
    //document.getElementById(e).style.left = `${y + offset} px`;
	document.getElementById(e).style.visibility = "visible";
}
function tooltipdelete(e){
	document.getElementById(e).style.visibility = "hidden";
}

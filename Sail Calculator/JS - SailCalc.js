///raw data var
var sailArea
var displacement
var beam
var waterlineLength
var lengthOverAll

///calculated var
var displacementCubicFeet = 0
var sailAreaRatio = 0
var capsizeScore = 0
var displacementLengthRatio = 0 
var displacementLengthRatioString = ""
var comfortScore = 0
var hullSpeed = 0

var validated = true

var sailAreaValidated
var displacementValidated
var beamValidated
var waterlineLengthValidated
var lengthOverAllValidated


function setUp(){
	///Set Variable Values
	sailArea= document.getElementById("Sail Area").value;
	displacement= document.getElementById("Displacement").value;
	beam=document.getElementById("Beam").value;
	waterlineLength=document.getElementById("LWL").value;
	lengthOverAll=document.getElementById("LOA").value;
	
	///Validate Inputs
	
	worker();
	
}

function worker(){
	
	displacementCubicFeet = displacement / 64;
	
	sailAreaDisplacementRatio();

	capsizeScreeningScore();

	waterlineLengthRatio();

	brewerComfortScore();

	hullSpeedCalc();

	printResults();
};

function validateInput(input){
	let inputVal=(input.value); 
	console.log(inputVal);
	console.log(isNaN(inputVal))
	if(isNaN(inputVal)){
		document.getElementById("validate").innerHTML = `<div class="validationresult"> Please Enter a Valid Number </div>`
	
	} 
	else{
		document.getElementById("validate").innerHTML = ``
	}
};



function sailAreaDisplacementRatio(){
	
	sailAreaRatio =(sailArea / Math.pow(displacementCubicFeet, .6666)).toFixed(2);
	
};


function capsizeScreeningScore(){
	capsizeScore = (beam / Math.pow(displacementCubicFeet, .3333)).toFixed(2);
	
};

function waterlineLengthRatio(){
	displacementLengthRatio = ((displacement / 2240) / Math.pow((.01 * waterlineLength),3)).toFixed(2);
	if (displacementLengthRatio >= 360) {
		displacementLengthRatioString = "Ultraheavy";
	}
	else if (displacementLengthRatio >= 270){
		displacementLengthRatioString = "Heavy";
	}
	else if (displacementLengthRatio >= 180){
		displacementLengthRatioString = "Moderate";
	}
	else if (displacementLengthRatio >= 90){
		displacementLengthRatioString = "Light";
	}
	else {
		displacementLengthRatioString = "Ultralight";
	}
	
};

function brewerComfortScore(){
	comfortScore = (displacement / (.65 *((waterlineLength * .7) +(lengthOverAll *.3)) * Math.pow(beam, 1.33))).toFixed(2);
	
};

function hullSpeedCalc(){
	hullSpeed = (1.34 * Math.sqrt(waterlineLength)).toFixed(2);
	
};

function printResults(){
	
		
	let sailAreaRatioResult = `<tr><td> Sail Area / Displacment Ratio: </td> <td> ${sailAreaRatio}</td></tr>`;
	let capsizeScreeningResult = `<tr> <td>Capsize Screening Score:</td> <td>${capsizeScore}</td> </tr>`;
	let displacementLengthResult = `<tr> <td>Displacement-Length Ratio:</td> <td>${displacementLengthRatio} - ${displacementLengthRatioString}</td> </tr>`;
	let comfortScoreResult = `<tr> <td>Brewer Comfort Score: </td> <td>${comfortScore}</td> </tr>`;
	let hullSpeedResult = `<tr> <td>Hull Speed:</td> <td>${hullSpeed}</td> </tr>`;
	
	///Results as HTML Table Elements
	let tableHead = `<table><tr><th>Name</th><th>Value</th></tr><tr>`;
	let tableFoot = `</table>`;
	let tableBody = `${sailAreaRatioResult} ${capsizeScreeningResult} ${displacementLengthResult} ${comfortScoreResult} ${hullSpeedResult}`;

	
	
	
	///Results combined into table
	
	let results = `${tableHead} ${tableBody}  ${tableFoot}`;
	document.getElementById("results").innerHTML = results;
	
		
	
	
	
	
	
};




var sailArea = 0
var displacement = 0
var beam = 0
var waterlineLength = 0
var displacementCubicFeet = 0
var sailAreaRatio = 0
var capsizeScore = 0
var displacementLengthRatio = 0 


function worker(){
	sailArea= document.getElementById("Sail Area").value;
	displacement= document.getElementById("Displacement").value;
	beam=document.getElementById("Beam").value;
	waterlineLength=document.getElementById("LWL").value;
	
	displacementCubicFeet = displacement / 64;
	
	sailAreaDisplacementRatio();
	///console.log("Sail Area / Displacement Ratio is ", sailAreaRatio);
	///console.log("Sail area is ", sailArea, ",displacement is ", displacement);
	///console.log("Displacment in cubic feet it ", displacementCubicFeet);
	///console.log(beam);
	
	capsizeScreeningScore();
	///console.log(capsizeScore);
	
	waterlineLengthRatio();
	///console.log(waterlineLength)
	
	printResults();
};


function sailAreaDisplacementRatio(){
	
	sailAreaRatio =(sailArea / Math.pow(displacementCubicFeet, .6666));
	
};


function capsizeScreeningScore(){
	capsizeScore = beam / Math.pow(displacementCubicFeet, .3333);
	
};

function waterlineLengthRatio(){
	displacementLengthRatio = (displacement / 2240) / Math.pow((.01 * waterlineLength),3);
	
};


function printResults(){
	///Results as HTML Table Elements
	let tableHead = `<table><tr><th>Name</th><th>Value</th></tr><tr>`;
	let tableFoot = `</table>`;
	let sailAreaRatioResult = `<tr><td> Sail Area / Displacment Ratio: </td> <td> ${sailAreaRatio}</td></tr>`;
	let capsizeScreeningResult = `<tr> <td>Capsize Screening Score:</td> <td>${capsizeScore}</td> </tr>`;
	let displacementLengthResult = `<tr> <td>Displacement-Length Ratio:</td> <td>${displacementLengthRatio}</td> </tr>`
	
	
	///Results combined into table
	let results = `${tableHead} ${sailAreaRatioResult} ${capsizeScreeningResult} ${displacementLengthResult} ${tableFoot}`;
	
	document.getElementById("results").innerHTML = results;

};


///raw data var
var sailArea = 0
var displacement = 0
var beam = 0
var waterlineLength = 0
var lengthOverAll = 0

///calculated var
var displacementCubicFeet = 0
var sailAreaRatio = 0
var capsizeScore = 0
var displacementLengthRatio = 0 
var comfortScore = 0


function worker(){
	sailArea= document.getElementById("Sail Area").value;
	displacement= document.getElementById("Displacement").value;
	beam=document.getElementById("Beam").value;
	waterlineLength=document.getElementById("LWL").value;
	lengthOverAll=document.getElementById("LOA").value;
	
	
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
	
	brewerComfortScore();
	///console.log(comfortScore);
	///console.log(lengthOverAll)
	
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

function brewerComfortScore(){
	comfortScore = displacement / (.65 *((waterlineLength * .7) +(lengthOverAll *.3)) * Math.pow(beam, 1.33));
	
};

function printResults(){
	
		
	let sailAreaRatioResult = `<tr><td> Sail Area / Displacment Ratio: </td> <td> ${sailAreaRatio}</td></tr>`;
	let capsizeScreeningResult = `<tr> <td>Capsize Screening Score:</td> <td>${capsizeScore}</td> </tr>`;
	let displacementLengthResult = `<tr> <td>Displacement-Length Ratio:</td> <td>${displacementLengthRatio}</td> </tr>`;
	let comfortScoreResult = `<tr> <td>Brewer Comfort Score: </td> <td>${comfortScore}</td> </tr>`;
	
	///Results as HTML Table Elements
	let tableHead = `<table><tr><th>Name</th><th>Value</th></tr><tr>`;
	let tableFoot = `</table>`;
	let tableBody = `${sailAreaRatioResult} ${capsizeScreeningResult} ${displacementLengthResult} ${comfortScoreResult}`;

	
	
	///Results combined into table
	let results = `${tableHead} ${tableBody}  ${tableFoot}`;
	
	document.getElementById("results").innerHTML = results;

};


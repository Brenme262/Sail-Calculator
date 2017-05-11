
var sailArea = 0
var displacement = 0

var displacementCubicFeet = 0
var sailAreaRatio = 0
var capsizeScore = 0


function worker(){
	sailArea= document.getElementById("Sail Area").value;
	displacement= document.getElementById("Displacement").value;
	
	
	displacementCubicFeet = displacement / 64;
	
	sailAreaDisplacementRatio();
	///console.log("Sail Area / Displacement Ratio is ", sailAreaRatio);
	///console.log("Sail area is ", sailArea, ",displacement is ", displacement);
	///console.log("Displacment in cubic feet it ", displacementCubicFeet);
	///console.log(beam);
	
	printResults();
};


function sailAreaDisplacementRatio(){
	
	sailAreaRatio =(sailArea / Math.pow(displacementCubicFeet, .6666));
	
};





function printResults(){
	let sailAreaRatioResult = `<td> Sail Area / Displacment Ratio: </td> <td> ${sailAreaRatio}</td>`;
	
	let results = `<table><tr><th>Name</th><th>Value</th></tr><tr> ${sailAreaRatioResult}</tr></table>`;
	
	document.getElementById("results").innerHTML = results;

};


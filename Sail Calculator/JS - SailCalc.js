function results(){
	sailAreaDisplacementRatio()
};



function sailAreaDisplacementRatio(){
	var sailArea= document.getElementById("Sail Area").value;
	var displacement= document.getElementById("Displacement").value;
	var displacementCubicFeet = displacement / 64;
	console.log("Sail area is ", sailArea, ",displacement is ", displacement);
	console.log("Displacment in cubic feet it ", displacementCubicFeet);
	console.log("This boat's sail area to displacement ratio is ",
	(sailArea / Math.pow(displacementCubicFeet, .6666)));
};






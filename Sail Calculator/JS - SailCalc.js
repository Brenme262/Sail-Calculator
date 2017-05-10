
var sailArea = 0
var displacement = 0
var displacementCubicFeet = 0
var sailAreaRatio = 0


function worker(){
	sailArea= document.getElementById("Sail Area").value;
	displacement= document.getElementById("Displacement").value;
	displacementCubicFeet = displacement / 64;
	
	sailAreaDisplacementRatio();
	
	
	/// Used to test if code was working, not used in final product.
	///console.log("Sail Area / Displacement Ratio is ", sailAreaRatio);
	///console.log("Sail area is ", sailArea, ",displacement is ", displacement);
	///console.log("Displacment in cubic feet it ", displacementCubicFeet);
	
	printResults();
};


function sailAreaDisplacementRatio(){
	
	sailAreaRatio =(sailArea / Math.pow(displacementCubicFeet, .6666));
	
};



function printResults(){
document.getElementById("results").innerHTML = "Sail Area / Displacement Ratio is " + sailAreaRatio;

};


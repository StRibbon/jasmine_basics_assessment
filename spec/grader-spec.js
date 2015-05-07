var letterGrader = require('../grader.js');

// 1. 
// 2. 
// 3. 

describe('Letter Grader', function (){
// take test result number as input, and return a letter grade

	it("return grade", function(){

		expect(letterGrader.grader(100)).toEqual("A");
		expect(letterGrader.grader(95)).toEqual("A");
		expect(letterGrader.grader(89)).toEqual("B");
		expect(letterGrader.grader(73)).toEqual("C");
		expect(letterGrader.grader(65)).toEqual("D");
		expect(letterGrader.grader(52)).toEqual("F");
		expect(letterGrader.grader(18)).toEqual("You really suck");



	});
 
});

module.exports = {
	grader: function (num){
		
		if(num>=90){
			return "A";
		}
		else if(num>=80){
			return "B";
		}
		else if(num>=70){
			return "C";
		}
		else if(num>=60){
			return "D";
		}
		else if(num>=50){
			return "F";
		}
		else {
			return "You really suck";
		}
	}
	score: function (arr){
		for(var i in arr){
			arr[i] += arr[i];
		}
	}
}
var main = function(){
	"use strict"

	var newListItem
	var i, N;
	$("#addButton").on("click", function(event){
		$(".mylist").empty(); // clear previous output
		N = parseInt($("input").val());
		if (Number.isInteger(N) && N > 0){
			for (i = 1; i <= N; i++){
				if (i % 3 === 0 && i % 5 === 0)
					newListItem = $("<li>").text("FizzBuzz");
				else if (i % 5 === 0)
					newListItem = $("<li>").text("Buzz");
				else if (i % 3 === 0)
					newListItem = $("<li>").text("Fizz");
				else
					newListItem = $("<li>").text(i);
				$(".mylist").append(newListItem);
			}
		}
		else{
			window.alert("Please enter positive an integer >= 1 only.")
		}
		
	});
	

}

$(document).ready(main)
var main = function(){
	"use strict"

	var newListItem
	var i;
	for (i = 1; i <= 100; i++){
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

$(document).ready(main)
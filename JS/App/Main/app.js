$(function() {

//variables declearations
var numberOfTiles = 4;
var randomNum = new Array();

//Generate the list of random numbaers.
function uniqueRandomNum(){
	var insertPos = 0;
	while(randomNum.length <= numberOfTiles){
	var duplicate = 0;
	var temp = Math.floor((Math.random() * 9) + 1);
		for(var k=0;k<=randomNum.length;k++){
		
			if(randomNum[k] == temp)
			{
				duplicate ++;
			}
		}
		if(duplicate == 0)
		{
			randomNum[insertPos] = temp;
			insertPos++;
		}
	}
	return randomNum;
  }
  
	
function createTiles(numberOfTiles)
{
	var tilesAdded = 0 ,createdListOfTiles ="",newTilesWithId="";
	uniqueRandomNum(); 
	while(tilesAdded < numberOfTiles){
		newTilesWithId = "<div id='draggable"+ tilesAdded +"' class='draggable ui-widget-content pulse animated  infinite'>"+ randomNum[tilesAdded] +"</div>"
		createdListOfTiles = createdListOfTiles + newTilesWithId ;
		tilesAdded++;
	}
	return createdListOfTiles;
}

$(".col").html(createTiles(numberOfTiles));

$( ".draggable" ).draggable();
  
  
    $( ".draggable" ).droppable({
      drop: function( event, ui ) {
	    //----------------------
		 var opration = $("input[name='oprations']:checked").val();
		 var num1 = $("#" + ui.draggable.attr("id")).text();
		if(opration){
				var result = $(this).text();
				if(opration == "add"){
				 var result = eval(result) + eval(num1);
				  $(this).text(result);
				  $("#" + ui.draggable.attr("id")).remove();
				}
				else if(opration == "sub"){
				var result = eval(result) - eval(num1);
				  $(this).text(result);
				  $("#" + ui.draggable.attr("id")).remove();
				}
				else if(opration == "divide"){
					var result = eval(result) / eval(num1);
					var newResult = Math.floor(result);
					if(newResult == result)
					{
						$(this).text(result);
						$("#" + ui.draggable.attr("id")).remove();
					}
					else
					{
						alert("This division gives dicimal value. Try again!!");
					}
				  
				}
				else if(opration == "multiply"){
				var result = eval(result) * eval(num1);
				  $(this).text(result);
				  $("#" + ui.draggable.attr("id")).remove();
				}
				else if(opration == "power"){
				  var result = Math.pow(eval(result), eval(num1)) ;
				  $(this).text(result);
				  $("#" + ui.draggable.attr("id")).remove();
				}
				else {
					alert("Invalid Opration!!");
				}
		}
		else{
			alert("Please select a operation !!");
		}
		
		var nubTiles = $( ".draggable" ).length ; 
		if(nubTiles == 1)
		{
			var checkZero = $( ".draggable" ).text();
			if(checkZero == 0)
			{
				alert("Congratulation You Won !!");
			}
			else{
				alert("Sorry You Loss.Try again!!");
			}
		}
		//----------------------
      }
    });
	$(".draggable").dblclick(function(){
		var opration = $("input[name='oprations']:checked").val();
		var num1 = $(this).text();
		 
		if(opration == "sqroot"){
			var result = Math.sqrt(eval(num1)) ;
			var floorValue = Math.floor(result);
			if(eval(num1) == (floorValue * floorValue))
			{
				$(this).text(result);
			}
			else{
				alert("Can't find perfect square root !!")
			}			
		}
		else if(opration == "cuberoot"){
		var result = Math.cbrt(eval(num1)) ;
		var floorValue = Math.floor(result);
		
		if(eval(num1) == (floorValue * floorValue * floorValue))
			{
				$(this).text(result);
			}
			else{
				alert("Can't find perfect cube root !!")
			}
		}
	});
	$("span").click(function(){
		//$("input[name='oprations']").attr('checked',false)
		$(this).children("input[name='oprations']").attr('checked',true);
	});

	function touchHandler(event) {
	    var touch = event.changedTouches[0];

	    var simulatedEvent = document.createEvent("MouseEvent");
	    simulatedEvent.initMouseEvent({
	        touchstart: "mousedown",
	        touchmove: "mousemove",
	        touchend: "mouseup"
	    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

	    touch.target.dispatchEvent(simulatedEvent);
	    //event.preventDefault();
	}

	function init() {
	    document.addEventListener("touchstart", touchHandler, true);
	    document.addEventListener("touchmove", touchHandler, true);
	    document.addEventListener("touchend", touchHandler, true);
	    document.addEventListener("touchcancel", touchHandler, true);
	}

  });
  
  
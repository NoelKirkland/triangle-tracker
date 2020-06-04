$(document).ready(function(){
  $("form#triangle-side-lengths").submit(function(event){
    event.preventDefault();
    const side1 = parseInt($("#first-side").val());
    const side2 = parseInt($("#second-side").val());
    const side3 = parseInt($("#third-side").val());

    // if (!(side1 && side2 && side3) || (side1<0 && side2<0 && side3<0))
    if(!side1 || side1<0){
      alert("Incorrect input side 1");
    }
    else if(!side2 || side2<0){
      alert("incorrect input side 2");
    }
    else if(!side3 || side3<0){
      alert("incorrect input side 3");
    }
    else{
      if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
        $("#answer").text("not a triangle");
      }
      else if(side1 === side2 && side1 === side3){
        $("#answer").text("Equilateral");
      }
      else if(side1 === side2 || side1 === side3 || side2 === side3){
        $("#answer").text("Isosceles");
      }
      else if(side1 !== side2 && side1 !== side3 && side2 !== side3){
        $("#answer").text("Scalene");
      }
    }
    $(".type-of-triangle").show();
  });
});

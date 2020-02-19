var wrapperEle= document.body.querySelector(".wrapper1");
var numbers=[-30, 14, 66, 21, 72, -4]

//var display[];
//function numbers{
 // var that=this;
 // this.number=0;
  
//}
for(var i=0; i<numbers.length;i++){
  var ele=document.createElement("div");
  var that=this;
  this.numbers = numbers;
  this.ele.addEventListener("click", function(){
    this.increaseNumbers();
    var increase = numbers[i]+ 1;
      });
  this.numbers[i]= numbers[i];
  
  if (numbers[i]<0){
    var increase = numbers[i]+ 1;
    ele.innerHTML= "The number is "+ numbers[i]+ " and if the number is below 0 "+ " the number would be " + increase;
    
  } 
  

 if (numbers[i]==14){
    //that++;
   
   var increase = numbers[i]+ 1;
    ele.innerHTML= "The number is "+ numbers[i]+ " and if the number eqauls 14 "+ " the number would be " + increase;
    
  }
  if (numbers[i]>50){
    //that++;
    var increase = numbers[i]+ 1;
    ele.innerHTML= "The number is "+ numbers[i]+ " and if the number is greater than 50, " + " the number would be " + increase;
    
  }
  //ele.innerHTML= "The number is "+ numbers[i];
  
  //if(number[i]>0)
    
  //var numberEle= document.createElement("h4");
  wrapperEle.appendChild(ele);
}
 

//this.ele.innerHTML= "The number is "+ numbers+ "if the number is ";
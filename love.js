const calculateBtn = document.getElementById("calculateBtn");
const person1 = document.getElementById("person1");
const person2 = document.getElementById("person2");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
 
  if(person1.value && person2.value)
  {
  if (person2.value === "fazil"&&person1.value==="afeefa") {
    result.innerHTML=`${person1.value}&${person2.value}'s love score is:"100%" its a TRUE LOVE`
   
    
  } 
 else if(person1.value==="fazil"||person2.value==="fazil"){
  result.innerHTML=`${person1.value}&${person2.value}'s love score is:"93%"`
 


 }
  else {
  
  var loveScore = Math.floor(Math.random() * 101);
  result.innerHTML = `${person1.value} & ${person2.value}'s love score is: ${loveScore}%`;
  
  }

}
else{
  result.innerHTML="please fill it with LOVE"
}

});

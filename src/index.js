module.exports = function zeros(expression) {
  let elements = [];
  elements = expression.split("*");

  let sumZeros = 0;   // счетчик
  let sumEndFive = 0; // учитываем 5-ки в конце числа (без 0-й)
  let sumEndTwo = 0;  // учитываем четность числа (без 0-й)
  let add = 0;        // учитываем 5*2 множителей (без 0-й)
  elements.forEach(element => {

    let regScreamer = /!/g;
    let number = element.replace(/!+/g , "");   
    let sumScreamer = element.match(regScreamer).length; 
      
        if (sumScreamer===2 && number>4 && number%2==1){
          sumEndFive+=1;
        }

        if ((sumScreamer===1 &&number%2===0  && number%10!==0)
            || (sumScreamer===2 && number%2===0))  {      
            sumEndTwo+=100;
        }

//screamer2       
        if (sumScreamer===2 && number%2===1) {
            element = 0;
        } else

        if (sumScreamer===2 && number%2===0 && number!=100 && number<52){ //!
            element = Math.floor(number/10);
        } else

        if (sumScreamer===2 && number%2===0 && number!=100 && number>50 ){ //!
          element = Math.floor(number/10)+1; //+1
        } else

        if (sumScreamer===2 && number%2===0 && number==100){   //!
            element = Math.floor(number/10)+2; //+1
        } else


 //screamer1  if      
        if (sumScreamer===1 && number<25){
            element = Math.floor(number/5);
        } else

        if (sumScreamer===1 && number<50) {
            element = Math.floor(number/5)+1;
        } else

        if (sumScreamer===1 && number<75) {
            element = Math.floor(number/5)+2;
        } else

        if (sumScreamer===1 && number<100) {
            element = Math.floor(number/5)+3;
        } else

        if (sumScreamer===1 && number==100) {
            element = Math.floor(number/5)+4;
        }

        sumZeros+=element;      
  });

  add = (sumEndFive<sumEndTwo && sumEndTwo>0) ? add=sumEndFive : add=0;
  sumZeros+=add;
  return sumZeros;
}

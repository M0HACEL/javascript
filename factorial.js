

function zero_factorial(integerNumber){
    function factorial(integerNumber){
        total=1;
        for(i=integerNumber; i>0; i--){
            total=i*total;
        }
        return total;
    }
   let asume_Factorial = factorial(integerNumber+1);
   realFactorial = asume_Factorial/(integerNumber+1);
   console.log(realFactorial);
}

zero_factorial(3);
for (i=1; i<=100;i++){
    if (i%3!=0 && i%5!=0){
        console.log(i);
    }
    else if (i%3==0 && i%5!=0){
        console.log('Fizz');
    }
    else if (i%3!=0 && i%5==0){
        console.log('Buzz');
    }
    else {
        console.log('FizzBuzz');
    }
}
// operators

// arithtmetic Operators :: +,-,/,* %
document.write(5%2) 

// assignment ::: =, +=,-=,
x = 12 // assignment - asign a value to a var
x = 14 //
x = x-2 // 12
x-=2 //10
x+=2; //
document.write(x)


// comparison operators :: ==, ===, <>, >=,<= 
document.write('<br>') 
document.write(10<2) 
document.write(1234 == 5678) // false  
document.write(1234 == 1234) // true  
document.write(1234 == '1234') // true  
document.write(1234 === '1234') // false


document.write(10+'10') // error! 

document.write('<br>'+ x) // concatenation 

// logical operators || = OR, && = AND , !=NOT 
document.write('<br>'+ x) //  
document.write('<br>') //  
document.write(10>2 || 5>4) //true

document.write('<br>') //  
document.write(10>2 || 5<4) //true
document.write('<br>') //  
document.write(10>2 && 5<4) //false
document.write('<br>') //  
document.write(!5<4) //true


// ===, ==, >,<, +=, &&, ||, ! 

document.write(5424 === '5424') // false ::: usefulness
document.write(2=='2') //true ::: password check 
document.write(1200 > 1000 ) //true ::: password check 
// document.write() //true ::: password check 
document.getElementById('user' == '' ||'1234' == '') //true 
document.getElementById('user' !== '') //true 




// concatenation 

text = 'hello'
text += 'World'
str = text // HelloWorld

// ``

str = `<br> Hello World! ${text} ${x}`;

document.getElementById('tt').innerHTML += 'Solomon'
document.write(str);

// 
str = 'The Amount is : ' + (12 + 12)   // 
str = ("Hello world");
document.write(str); 

// methods  - 
showText = function (){

    // pass = 1234 : true || false 

    x = document.getElementById('data').value;
    document.getElementById('tt').innerHTML = (x ==1234);
}

user = {
    'first':'Solomon',
    title:'Mr'
}


car =  {
    name:'honda',
    car_start:function(){
        document.write('car Started');
    },
    details:()=>{
        return car.name;
    }
}



car.car_start()

// document.getElementById().innerHTML
document.write(car.details())















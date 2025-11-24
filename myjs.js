person = {
    name: 'Henry',
    age:34,
    details: 'Name: Solomon Age:34',
    my_details:function(){
        document.write('Name: Solomon Age:34')

    }

}


car  = {
    name: "Honda",
    mft:2024,
    car_start:function(){
        document.write('car started')
    }
}

car.car_start()
person.my_details()

// string methods 
n1 = "Hello"
n2 = 'World!'

n3 = n1+n2 +" New Line " // Hello World
document.write(n3)
n4 = n1.concat(n3)
document.write(n4)
n4 = n1.concat('New text Here ',n2)
document.write(n4)


text = " Name : "+person.name +"Age : "+ person.age
text2 = `Name : ${person.name} Age : ${person.age} `
text2 = `Name : ${person.name} Age : ${person.age} `
document.write('<br>')
document.write(text)
document.write('<br>')
document.write(text2)
document.write(`the result is ${12/4}`)

my_html= `
        <div class="alert alert-warning container m-2">
            <h2>Success!</h2>
            <p> Name:${person.name} </p>
            <p> Age:${person.age} </p>
        </div>
`

document.getElementById('content').innerHTML = my_html


// index of 
user = 'solomon sonex'
// indx  = user.indexOf()
document.write('<br>'+user.length) // length of text (string)
document.write('<br>'+user.indexOf('s')) //find a string and returns the position 
document.write('<br>'+user.lastIndexOf('o')) //find a string and returns the position 
document.write('<br>'+user.lastIndexOf('z')) // -1 if not found 
document.write('<br>'+user.charAt(0)) // 

// slice method

document.write('<br>'+user.slice(0)) // 
document.write('<br>'+user.slice(3)) // 
document.write('<br>'+user.slice(3,5)) // 
document.write('<br>'+user.slice(0,1)) // 
document.write('<br>'+user[0]) // 

// case _

document.write('<br>'+user.toLowerCase()) // 
document.write('<br>'+user.toUpperCase()) // 


email = 'sonex@mail.com'
new_mail ='SONEX@MAIL.COM'
new_mail  = new_mail.toLowerCase();

if(email == new_mail){
    document.write('<br>'+ 'Success') // 
    
}else{

    document.write('<br>'+ 'Failed!') // 
}

user = 'Solomon sonex'
document.write('<br>'+ user.toLowerCase().indexOf('s')) // 


// replace  :: 

user_input = "$Solomon sonex sonex sonex $"
document.write('<br>'+ user_input) // 
document.write('<br>'+ user_input.replace('$','_')) // 
document.write('<br>'+ user_input.replace('$','')) // 

document.write('<br>'+ user_input.replace('s','X')) // 
document.write('<br>'+ user_input.replace(/s/gi,'X')) // 

user = " solomon "
new_user = "solomon"

verify = user.trim() == new_user.trim() // true or false  :: 
document.write('<br>'+ verify) //

// number n Maths 

n1 =  12.9545
document.write('<br>'+ n1.toFixed()) //
document.write('<br>'+ n1.toFixed(2)) //
document.write('<br>'+ Math.PI) //
document.write('<br>'+ Math.random()) //
document.write('<br>'+ Math.floor(n1)) //
n1 = 12.2;
document.write('<br>'+ Math.ceil(n1)) //
document.write('<br>'+ Math.round(n1)) //
document.write('<br>'+ Math.cos(n1)) //
document.write('<br>'+ Math.sin(n1)) //
document.write('<br>'+ Math.max(3,6,7,2,8,4)) //
document.write('<br>'+ Math.min(3,6,7,2,8,4)) //


// arrays - object :: mutilevel 
stu = ['Jen','Ben','luke','sam','duke']

document.write('<br>'+stu) //
document.write('<br>'+stu[4]) //

stu = [
    ['Jen','Ben',],
    ['luke','sam','duke']
]
document.write('<br>'+stu[0][1]) //
document.write('<br>'+stu[0]) //.



stu = {
    backend: ['Jen','Ben',],
    frontend: ['luke','sam','duke']
}
document.write('<br>'+stu.backend[0]) //

products = [
    {name:'Watch'},
    {name:'TV'},
    {name:'Phone'},
]



// mark    
//     sam
//         Luke
//         Mart
//     ben


//     mar-sam


const products = {
    USA: {
        California: [
            {
                id: 1,
                name: "Wireless Headphones",
                price: 99.99,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Amazing sound quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Very comfortable, but a bit pricey."
                    }
                ]
            },
            {
                id: 2,
                name: "Smartphone",
                price: 699.99,
                reviews: [
                    {
                        user: "Charlie",
                        rating: 4,
                        comment: "Great features, but battery life could be better."
                    },
                    {
                        user: "Diana",
                        rating: 5,
                        comment: "Best phone I've ever owned!"
                    }
                ]
            }
        ],
        Texas: [
            {
                id: 3,
                name: "Laptop",
                price: 1299.99,
                reviews: [
                    {
                        user: "Eve",
                        rating: 5,
                        comment: "Perfect for gaming and work!"
                    },
                    {
                        user: "Frank",
                        rating: 3,
                        comment: "Good performance, but heavy."
                    }
                ]
            }
        ]
    },
    Canada: {
        Ontario: [
            {
                id: 4,
                name: "Smartwatch",
                price: 199.99,
                reviews: [
                    {
                        user: "Grace",
                        rating: 4,
                        comment: "Very useful for tracking fitness."
                    },
                    {
                        user: "Hank",
                        rating: 5,
                        comment: "Love the design and functionality!"
                    }
                ]
            }
        ],
        BritishColumbia: [
            {
                id: 5,
                name: "Bluetooth Speaker",
                price: 49.99,
                reviews: [
                    {
                        user: "Ivy",
                        rating: 4,
                        comment: "Great sound for the price!"
                    },
                    {
                        user: "Jack",
                        rating: 2,
                        comment: "Battery life is too short."
                    }
                ]
            }
        ]
    }
};

// Example of accessing product details
console.log(products.USA.California[0]); // Wireless Headphones details
console.log(products.Canada.Ontario[0].reviews); // Reviews for Smartwatch












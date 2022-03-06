let btnArr1 = document.getElementById('btnArr1');
let btnArr2 = document.getElementById('btnArr2');
let btnArr3= document.getElementById('btnArr3');
let btnArr4= document.getElementById('btnArr4');
let btnArr5= document.getElementById('btnArr5');
let btnArr6= document.getElementById('btnArr6');
let btnArr7= document.getElementById('btnArr7');
let btnArr8= document.getElementById('btnArr8');


btnArr1.addEventListener('click', ()=>{
    const shopping = ['bread', 'milk', 'cheese', 'chocolates', 'noodles'];
    console.log(shopping);
    //length - to get number of elements of an array
    console.log(shopping.length);
    //To get value for individual element (position)
    console.log(shopping[0]);
    
});

/**
 * Multideminsional Array - Array which contains array
 */
btnArr2.addEventListener('click',()=>{
    const random = ['tree', 795, [0, 1, 2]];
    console.log(random);
    console.log(random[2]);
    console.log(random[2][0]);
    console.log(random[2][1]);

});

/**
 * Finding items in an array
 */
btnArr3.addEventListener('click',()=>{
    const birds = ['Parrot', 'Falcon', 'Owl'];
    console.log(birds.indexOf('Owl'));   //  2
    console.log(birds.indexOf('Rabbit')); // -1
    
});
/**
 * Adding items to array - using push method - To add one or more items to the end of an array we can use push() method.
 */
 btnArr4.addEventListener('click',()=>{
    const cities = ['Manchester', 'Liverpool'];
    console.log('Length of array is ', cities.length);
    cities.push('Cardiff');
    console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
    console.log('Length of array is ', cities.length);
    cities.push('Bradford', 'Brighton');
    console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
    console.log('Length of array is ', cities.length);
    
 });
/**
 * Adding items to the start of the array, use unshift()
 */
 btnArr5.addEventListener('click',()=>{
    const cities = ['Manchester', 'Liverpool'];
    console.log(cities);     // ["Manchester", "Liverpool" ]
    console.log(cities.length); 
    cities.unshift('Edinburgh');
    console.log(cities);     // [ "Edinburgh", "Manchester", "Liverpool" ]
    console.log(cities.length); 
    
 });

 /**
  * To remove the last item from the array, use pop()
  */
  btnArr6.addEventListener('click', ()=>{
    const cities = ['Manchester', 'Liverpool'];
    console.log(cities);     // [ "Manchester",'Liverpool' ]
    console.log(cities.length);
    cities.pop();
    console.log(cities);     // [ "Manchester" ]
    console.log(cities.length);
  });
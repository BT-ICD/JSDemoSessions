/**
 * Learning reference: 
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */
let btnArr1 = document.getElementById('btnArr1');
let btnArr2 = document.getElementById('btnArr2');
let btnArr3= document.getElementById('btnArr3');
let btnArr4= document.getElementById('btnArr4');
let btnArr5= document.getElementById('btnArr5');
let btnArr6= document.getElementById('btnArr6');
let btnArr7= document.getElementById('btnArr7');
let btnArr8= document.getElementById('btnArr8');
let btnArr9= document.getElementById('btnArr9');
let btnArr10= document.getElementById('btnArr10');
let btnArr11= document.getElementById('btnArr11');
let btnArr12= document.getElementById('btnArr12');
let btnArr13= document.getElementById('btnArr13');

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

  /**
   * To remove the first item from an array, use shift()
   */
  btnArr7.addEventListener('click',()=>{
    const cities = ['Manchester', 'Liverpool'];
    console.log(cities);
    console.log(cities.length);
    cities.shift();
    console.log(cities);     // [ "Liverpool" ]
    console.log(cities.length);
  });

  /**
   * To remove item from a particular position/index, use splice()
   */
  btnArr8.addEventListener('click',()=>{
    const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
    console.log(cities);
    console.log(cities.length);
    let removedElements = cities.splice(1,1); //index, number of elements
    console.log(cities); // ['Manchester', 'Edinburgh', 'Carlisle']
    console.log(cities.length); 
    console.log(removedElements); // [ 'Liverpool']

  });

  /**
   * To access every element of an array. Statement for ... of
   */
   btnArr9.addEventListener('click',()=>{
    const birds = ['Parrot', 'Falcon', 'Owl'];
    for(const bird of birds){
        console.log(bird);
    }
   });

   /**
    * To get new array from existing array with modified values map()
    */
   btnArr10.addEventListener('click',()=>{
    const numbers = [5, 2, 7, 6];
    const doubled = numbers.map(double);
    console.log(numbers);
    console.log(doubled);
   });

   function double(number){
       return number*2;
   }

   /**
    * To filter elements of an array, use filter()
    */
   btnArr11.addEventListener('click',()=>{
    const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
    const longer = cities.filter(isLong);
    console.log(cities); // ['London', 'Liverpool', 'Totnes', 'Edinburgh']
    console.log(longer);  // [ "Liverpool", "Edinburgh" ]
   });

   function isLong(city){
       return city.length>8;
   }

   /**
    * Converting from string to an array, use split()
    */
    btnArr12.addEventListener('click',()=>{
    const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    const cities = data.split(',');
    console.log(data);
    console.log(cities);
   });

   /**
    * Converting from an array to string, use join() or toString()
    */
    btnArr13.addEventListener('click',()=>{
        const countries = ["India","Japan","USA","Canada", "France"] ;
        const countrieStr = countries.join(',');
        const countrieStr1 = countries.toString();
        console.log(countries);
        console.log(countrieStr);
        console.log(countrieStr1);
    });
/***
 * Learning Reference:
 * http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/
 */
// create a function expression
// dynamically at runtime and
// bind it to "foo" identifier
 
var foo = function () {
    console.log("foo");
  };
   
  // pass it to another function,
  // which in turn is also created
  // at runtime and called immediately
  // right after the creation; result
  // of this function is again bound
  // to the "foo" identifier
   
  foo = (function (funArg) {
   
    // activate the "foo" function
    funArg(); // "foo"
   
    // and return it back as a value
    return funArg;
   
  })(foo);

 
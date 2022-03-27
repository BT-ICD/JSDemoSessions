/**
 * Function scope and conflicts
 * Both functions you want to call are called greeting(), but you can only ever access the first.js file's greeting() function
 * (the second one is ignored). In addition, an error results when attempting (in the second.js file) 
 * to assign a new value to the name variable — because it was already declared with const, and so can't be reassigned.
 * 
 *  Keeping parts of your code locked away in functions avoids such problems, and is considered the best practice.
 * Learning Reference:
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts
 * 
 */
 const name = 'Chris';
 function greeting(){
     alert(`Hello ${name}: welcome to our company `);
 }

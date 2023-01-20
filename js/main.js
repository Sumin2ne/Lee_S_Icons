console.log('JavaScript is running!');

/* longer JS block commnet
-const is a type of varianle - a bit of memory that can hold a value

JS uses (can use) AY valid CSS selector to make a connetiona to Any elemet on the page -it works the same way as CSS selectors do, because it is USING css sellectors to find matching eelments.

the doctument is the DOM -the web page and all of its elements

querySelector is the method (function) that makes the connetion between JS and the DOM (the elements)*/


// Step 1- make the connetion to thr elements you want to interact with

const jpgGrapic = document.querySelector("#bitmap");
const vectorGrapic = document.querySelector('#vector');


function logID() {
      console.log('clinked on this element', this.id);
}

// step 2 - decide how you want the user to interact with the obect you created in step 1

vectorGrapic.addEventListener('click', logID);
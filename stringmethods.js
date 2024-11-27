let a = "Hello World";
console.log(a.length);

//to uppercase

console.log(a.toUpperCase());

//to lower case

console.log(a.toLowerCase());

//charat

console.log(a.charAt(2));

//indexof

console.log(a.indexOf("o"));

// last index of *(position of a value)
console.log(a.lastIndexOf('o'));

//slice;

let b = a.slice(5);
console.log(b);

//substring

console.log(a.substring(5,11));

//replace

console.log(a.replace("Hello","welcome"));
console.log(a.replaceAll("o","z" ));

//trim

let c = "  hai  ";
console.log(c.trim());
console.log(c);

//split
console.log(a.split(" "));


//concat

console.log (a.concat("earth"));

//startwith

console.log(a.startsWith("h"));
//ends with
console.log(a.endsWith("s"));
//includes
console.log(a.includes("Hello"));


//repeat 

console.log(a.repeat(2));

//match

let d = a.match(/come/);
console.log("match :" +d);

//search()
console.log(a.search("Hello"));



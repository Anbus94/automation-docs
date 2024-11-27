
// //console.log (a);
// //console.log(a.length);

// for (let i = 0;i<a.length;i++){
//     console.log(a[i]);
// }
// for (let x of a){
//     console.log(x);
// }

// // push

// a.push(23,45,55,66,67,89);
// console.log(a);
// // pop
// a.pop();
// console.log(a);

// //shift
// a.shift();
// console.log(a);

// //unshift

// a.unshift(1);
// console.log(a);

// //slice
// let c = a.slice(0,3);
// console.log(c);

// //splice
// a.splice(3,4);
// console.log(a);

// //concat
// let b = [11,22,33];
// let d = a.concat(b);
// console.log(d);

// // index off

// console.log(a.indexOf(2)); 

// let k = a.includes(67);
// console.log(k);

// //sort
// console.log(a.sort());
// console.log(a.reverse());

// //for each
// a.forEach( (f) => {console.log(f*2)});
// let c = a.every(e => e%2==0);
// console.log(c);
// let k = a.map(e=> e*2);//map

// console.log(k);
// console.log(a)
// let g = a.filter(e=>e%2==1); //filter
// console.log(g);
// //reduce
// let v = a.reduce( (h ,j) => h+j , 0);
// console.log(v);
// console.log(a);


// let a = [1,2,3,4,5];

// let reasults = a.reduce((j,k) => j>k ? j:k);
                                     
// console.log(reasults);

// let smallest = a.reduce((j,k) => j<k ? j : k);
                                     
// console.log("The smallest number is :" + smallest);

let a = [1,990, 22,44,555,768];
console.log(a.sort());

let b = [222,1,44,6665,12];
let c = b.sort();
console.log(`The ascending oder is :`+c);

//some

// let g= [1,2,3,4,5];
// let h = g.some((e) => e%2==1);

// console.log(h);

let g= [1,2,3,4,5];
let h = g.some((e) => e>1);

console.log(h);
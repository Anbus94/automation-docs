let a =[1,2,3,4,5];
let results = a.reduce( (j,k) => ({larget : k>j.larget ? k : j.larget,smallest : k<j.smallest ? k : j.smallest}),{ larget: a[0] , smallest : a[0]});
console.log(results.larget);
console.log(results.smallest);



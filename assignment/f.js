
functionsprdFun1()
{
    console.log('Spread Example');
const[x, ...y] = [1, 2, 3];
console.log(x); console.log(y);
}
functionsprdFun2()
{
leta, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [60, 80, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);
}
functionsprdFun3()
{
({a, b, ...rest} = {a:10, b:20, c:30, d:40});
console.log(a); console.log(b);
 console.log(rest);
 }
 functionsprdFun4()
 {constfoo= ['one', 'two'];
 const[r, y, g, b, p] = foo;
 console.log(r);
  console.log(y);
   console.log(g); 
   console.log(b); 
   console.log(p);
 }
 functionsprdFun5()
 {
    constarr= [1,2,3];
    [arr[2], arr[1]] = [arr[1], arr[2]];
    console.log(arr);
 }
 functionsprdFun1();
 functionsprdFun2();
 functionsprdFun3();
 functionsprdFun4();
 functionsprdFun5();

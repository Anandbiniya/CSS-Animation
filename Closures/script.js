function closer(){
    var c=0
    function inner(){
        c++
        // return c
    }
    return inner;

}
const outerfun=closer()
console.log(outerfun)



function x(b){
    
    function y(){
     
        console.log(a)

    }
    var a=1;
    return y;
   
}
var z=x()
console.log(z)
z()

// Advantages of closures
// module pattern,function currying,memoization

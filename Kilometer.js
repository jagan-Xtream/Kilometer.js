const readline = require('readline')
const put = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
})
var a;
put.on('line', (data) => {
a=Number(data)
})
   function kilo(num){
   console.log (parseInt(num*1000))
   console.log(parseInt(num*100000))
   
}
    put.on('close', () => {
    kilo(a)
    
})

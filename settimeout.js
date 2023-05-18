let pizza 

function OrderPizza () {
    console.log("Order pizza");
    setTimeout (() => {
        pizza = "BIG PIZZA"
     }, 2000 );
     setTimeout (() => {
        console.log("Pizza was ordered");
     }, 1000 );
}
OrderPizza ()
setTimeout (() => {
    console.log("Watch UCL")
  }, 2000 );
   console.log(`Eat ${pizza}`);




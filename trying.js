function addingItem (){
  var items = 0
  return {
    add: function(){
      console.log("item added to cart ! ");
      items++;
    }  
    ,getcounting: function(){
      return items+" Total items!"
    }
  }
}

let cart = addingItem();

cart.add();
console.log(cart.getcounting())

cart.add();
console.log(cart.getcounting())
cart.add();
console.log(cart.getcounting())
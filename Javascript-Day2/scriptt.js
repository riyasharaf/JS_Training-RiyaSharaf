const productList = document.getElementById("products-container");
const calculate = document.getElementById('calculate');
const cartdetails = document.getElementById('showcart');
const totalBox = document.getElementById("totals");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    
    const myycartt = [];
   

    console.log("Cart Items:", myycartt);


      for(let i = 0; i < products.length; i++){
      const listt = document.createElement("li");
      listt.innerHTML = `
        <p><strong>${products[i].title}</strong></p>
        <p>Price: $${products[i].price}</p>
         <img src="${products[i].image}" width="100">
        <button>Add to cart</button>
      `;

      const btn = listt.querySelector('button');

      btn.addEventListener("click" ,()=>{
      Addtocart(products[i].id)  
      });
      productList.appendChild(listt);

      
    }

     function Addtocart(n1){
      let crr = null;

      
      for (let k = 0; k < products.length; k++) {
        if (products[k].id == n1) {
          crr = products[k];
          break;
        }
      }

      if (!crr) {
        console.log("Product is not there!");
        return;
      }

    
      let productisincart = false;

      for (let i = 0; i < myycartt.length; i++) {
        if (myycartt[i].id === crr.id) {
          myycartt[i].quantity += 1;
          productisincart = true;
          break;
        }
      }


      if (!productisincart) {
        const newItem = {
          id: crr.id,
          name: crr.title,
          price: crr.price,
          quantity: 1,
          image: crr.image
        };
        myycartt.push(newItem);
      }

      console.log("Updated Cart:", myycartt);
 showCart();
      }

       function showCart() {
      cartdetails.innerHTML = ""; 
      for (let i = 0; i < myycartt.length; i++) {
        const cartElementt = document.createElement("li");
        cartElementt.innerHTML = `
          <p><strong>${myycartt[i].name}</strong></p>
          <p>Price: $${myycartt[i].price}</p>
          <p>Quantity: ${myycartt[i].quantity}</p>
          <img src="${myycartt[i].image}" width="100">
          <hr>
        `;
        cartdetails.appendChild(cartElementt);
      }
    }


    function totalPrice  (){
      let total = 0;
    let totalQuantity = 0;
    for(let i = 0; i < myycartt.length; i++){
      total += myycartt[i].price * myycartt[i].quantity;
      totalQuantity += myycartt[i].quantity;
    }

    let quantityDiscount = 0;
    if(totalQuantity > 10){
      quantityDiscount = total * 0.10;
    }
    let afterQuantityDiscount = total - quantityDiscount;

    let priceDiscount = 0;
    if(afterQuantityDiscount > 500){
      priceDiscount = afterQuantityDiscount * 0.05; 
    }

    let finalTotal = afterQuantityDiscount - priceDiscount;

    console.log("Subtotal: $" + total);
    console.log("Quantity Discount: $" + quantityDiscount);
    console.log("Price Discount: $" + priceDiscount);
    console.log("Final Total: $" + finalTotal);

     totalBox.innerHTML = `
       
        <p>Subtotal: $${total}</p>
        <p>Quantity Discount: $${quantityDiscount}</p>
        <p>Price Discount: $${priceDiscount}</p>
        <h4>Final Total: $${finalTotal}</h4>
      `;

    }




    calculate.addEventListener('click' ,()=>{
      showCart();
      totalPrice();
    });

  






    

   
       

  });
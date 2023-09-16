let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"jbfjbf",
    name:"Casual MAMAShirt",
    price: 65,
    img: "https://m.media-amazon.com/images/I/81Y-9Em-bxL._AC_UL480_FMwebp_QL65_.jpg"
},
{
    id:"jbwwf",
    name:"Casual TTTShirt",
    price: 65,
    img: "https://m.media-amazon.com/images/I/81Y-9Em-bxL._AC_UL480_FMwebp_QL65_.jpg"

},
{
    id:"jbfokn",
    name:"Casual Shirt",
    price: 65,
    img: "https://m.media-amazon.com/images/I/81Y-9Em-bxL._AC_UL480_FMwebp_QL65_.jpg"

}]

let basket = [];

/*console.log(shop);*/

let generateShop =()=>{
    return (shop.innerHTML=shopItemsData
      .map((x)=>{
        let {id,name,price,img} =x;
        return`
        <div id=product-id-${id} class="item">
          <img src="${img}" alt="">
          <div class="details">
            <h3>${name}</h3>
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id}  class="quantity">0</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
        `
    }).join(""));
};

generateShop();

let increment =(id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);
  
  if(search === undefined){
    basket.push({
      id: selectedItem.id,
      item: 1,
     });
  }
  else{
    search.item += 1;
  }

  
  //console.log(basket);
  update(selectedItem.id);
};
let decrement =(id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);
  
  if(search.item === 0) return;
  else{
    search.item -= 1;
  }

  
  //console.log(basket);
  update(selectedItem.id) ;
};
let update =(id)=>{
  let search = basket.find((x)=> x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
};
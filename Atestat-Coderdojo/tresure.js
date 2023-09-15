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


console.log(shop);

let generateShop =()=>{
    return (shop.innerHTML=shopItemsData.map((x)=>{
        let {id,name,price,img} =x;
        return`
        <div id=product-id-${id} class="item">
          <img src="${img}" alt="">
          <div class="details">
            <h3>${name}</h3>
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i class="bi bi-dash-lg"></i>
                <div class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
        `
    }).join(""));
};

generateShop();
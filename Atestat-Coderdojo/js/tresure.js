let shop = document.getElementById('shop');

let shopItemsData = [{
  id: "item1",
  name: "The Iron Throne",
  price: 50,
  img: "https://m.media-amazon.com/images/I/81Y-9Em-bxL._AC_UL480_FMwebp_QL65_.jpg"
},
{
  id: "item2",
  name: "Queen Comforter",
  price: 45,
  img: "https://m.media-amazon.com/images/I/71RmzzI017L.__AC_SX300_SY300_QL70_FMwebp_.jpg"

},
{
  id: "item3",
  name: "Casual Shirt",
  price: 23,
  img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81-kcSBPJbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png"
},
{
  id: "item4",
  name: "House Targaryen mug",
  price: 25,
  img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyzAMq-08pzXsJXgidxwjIYgFY31g5K2pkOc1zfIyyyXk0LkGOPgtv6zuNC-Lpvkg7ypDSQsU63ERExTunvRuKU_d-C6yCnuFsQH9Tnh71XoocGGImnJub&usqp=CAc"
},
{
  id: "item5",
  name: "CARAXES FIGURE",
  price: 55,
  img: "https://wbshop.com/cdn/shop/products/WB100-MC-CR-FT-MF_d26e19bc-5525-461b-b177-e17d78741c56_900x.jpg?v=1685539218"
},
{
  id: "item6",
  name: "SYRAX FIGURE",
  price: 65,
  img: "https://wbshop.com/cdn/shop/products/WB100-MC-SY-FT-MF_359e4103-13c4-4083-8d51-e00720365440_360x.jpg?v=1685539282"
},
{
  id: "item7",
  name: "CROWN HOUSE GOLD ENAMEL PIN",
  price: 15,
  img: "https://wbshop.com/cdn/shop/products/HOTDCROWNPIN01--1-of-4_360x.jpg?v=1678122105"
},
{
  id: "item8",
  name: "CARAXES MUG",
  price: 17,
  img: "https://wbshop.com/cdn/shop/files/HOTD-MUGcopy_ebccd32c-cdd3-47b2-9805-334e0ecad355_900x.jpg?v=1683923482"
},
{
  id: "item9",
  name: "SYRAX FUNKO POP! VINYL FIGURE",
  price: 0.01,
  img: "https://wbshop.com/cdn/shop/products/HOTD-SYR_360x.png?v=1673380767"
},
{
  id: "item10",
  name: "DAEMON TARGARYEN FUNKO POP! VINYL FIGURE",
  price: 15,
  img: "https://wbshop.com/cdn/shop/products/65607-HotD-GLAM-1-1-WEB_360x.png?v=1655817627"
},
{
  id: "item11",
  name: "TARGARYEN THREE HEADED DRAGON SIGIL CUFFLINKS",
  price: 70,
  img: "https://wbshop.com/cdn/shop/products/GT-TGDR3-SL_360x.png?v=1654717225"
},
{
  id: "item12",
  name: "RHAENYRA TARGARYEN FUNKO POP! VINYL FIGURE",
  price: 15,
  img: "https://wbshop.com/cdn/shop/products/65604-Rhaenyra-Targaryen-GLAM-1-1-WEB1-_11_360x.png?v=1672178147"
}
]

let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
        <div id=product-id-${id} class="item">
          <img src="${img}" alt="">
          <div class="details">
            <h3>${name}</h3>
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id}  class="quantity">
                ${search.item === undefined? 0 : search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
        `
    }).join(""));
};

generateShop();
//check the tutorial at the beginning of cart page to understand the changes
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  }
  else {
    search.item += 1;
  }

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  
};


let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};


let update = (id) => {
  let search = basket.find((x) => x.id === id);
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};


let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};



calculation();
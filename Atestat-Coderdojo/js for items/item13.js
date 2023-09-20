let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item13",
        name: "Valyrian Jewelry Queen Rhaenyra Gold Oval Earrings",
        price: 12,
        img: "https://i.etsystatic.com/46264359/r/il/ba80fb/5278186363/il_794xN.5278186363_spap.jpg"
    },
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

            
            <p>FayeFantasy 5 out of 5 stars</p><br>

            <p class="description">
            Details
            </p>
            <h4>Handmade item</h4>

            <p class="description">
            Description
            </p>

            <h4>
            You can now wear the same gold earrings Princess Rhaenyra wore in House of the Dragon!
            <br>
            These stunning earrings are not only unique and special, but they also make an ideal gift for your closest friends, suitable for any special occasion. Crafted entirely from brass with stainless steel gold.
            <br>
            We take great time & care with each individual set of earrings, as we know how important quality is to our customers. With that in mind, it creates a limited stock - so grab yours today while it's in stock.
            
            </h4>
            
            
            
            
            
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id}  class="quantity">
                ${search.item === undefined ? 0 : search.item}
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
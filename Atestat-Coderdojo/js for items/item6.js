let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item6",
        name: "SYRAX FIGURE",
        price: 65,
        img: "https://wbshop.com/cdn/shop/products/WB100-MC-SY-FT-MF_359e4103-13c4-4083-8d51-e00720365440_360x.jpg?v=1685539282",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item6.html"
    },
]

let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, img,link } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
        <div id=product-id-${id} class="item">
          <img src="${img}" alt="">

          <div class="details">
          <a href="${link}">
            <h3>${name}</h3></a>

            
            <p>FayeFantasy 5 out of 5 stars</p><br>

            <p class="description">
            Details
            </p>
            <div class="list">
            <ol>
            <li>Material: PVC</li>
            <li>Size: about 20cm</li>
            <li>Product Weight: about 1800g</li>
            <li>Applicable Age: 3 years old and above</li>
            <li>Package: No Retail Box</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            Behold the exquisite Syrax Dragon Figurine, a masterpiece of fantasy craftsmanship. This finely detailed sculpture captures the essence of House Targaryen's cherished dragon companion, Syrax, with meticulous precision. Crafted from high-quality resin, the figurine showcases Syrax's graceful form, adorned with vivid, iridescent scales and wings poised for flight. Every intricate feature, from her elegant horns to her fiery eyes, evokes the awe-inspiring power of dragons in the world of Westeros. Whether displayed proudly on a shelf or as the centerpiece of a collection, the Syrax Dragon Figurine is a testament to the mythical beauty and grandeur of Game of Thrones lore.

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
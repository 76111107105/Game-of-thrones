let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item11",
        name: "TARGARYEN THREE HEADED DRAGON SIGIL CUFFLINKS",
        price: 70,
        img: "https://wbshop.com/cdn/shop/products/GT-TGDR3-SL_360x.png?v=1654717225",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item11.html"
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
            <li>Measures approx. 3/4" (W) x 3/4" (H)</li>
            <li>Made from plated base metal</li>
            <li>Closure: Knopfleiste</li>
            <li>Model: GT-TGDR-SL</li>
            <li>Comes as a gift, presented in a Game of Thrones gift box</li>
            <li>Packaging may vary from the pictures shown.</li>
            <li>100% officially licensed merchandise.</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            Elevate your style with Targaryen Three-Headed Dragon Seal Cufflinks. Crafted in exquisite detail, these cufflinks feature the iconic Targaryen sigil in miniature form. Made from polished silver-tone metal, they add a touch of regal sophistication to any attire, making them the perfect accessory for Game of Thrones enthusiasts.            </h4>
            
            
            
            
            
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
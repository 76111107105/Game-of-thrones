let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item7",
        name: "CROWN HOUSE GOLD ENAMEL PIN",
        price: 15,
        img: "https://wbshop.com/cdn/shop/products/HOTDCROWNPIN01--1-of-4_360x.jpg?v=1678122105",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item7.html"
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
            <li>Officially licensed House of The Dragon product</li>
            <li>High quality design</li>
            <li>HOTDCROWNPIN01</li>
            <li>Satisfaction guaranteed</li>
            <li>Great gift idea!</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            The House of the Dragon Golden Crown Pin epitomizes regal splendor in every detail. Crafted with exquisite precision, this pin is a miniature masterpiece that pays homage to the Targaryen legacy. Gleaming in rich, lustrous gold, it features the iconic Targaryen three-headed dragon sigil, a symbol of power and fire, intricately etched upon a circular backdrop. Its delicate yet sturdy design ensures it can adorn lapels, sashes, or garments with ease, adding an aura of noble authority to any outfit. The pin is a tangible link to the epic world of Game of Thrones, making it a coveted collectible for fans and a mark of distinction for Targaryen enthusiasts.

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
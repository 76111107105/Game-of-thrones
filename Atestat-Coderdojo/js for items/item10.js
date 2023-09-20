let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item10",
        name: "DAEMON TARGARYEN FUNKO POP! VINYL FIGURE",
        price: 15,
        img: "https://wbshop.com/cdn/shop/products/65607-HotD-GLAM-1-1-WEB_360x.png?v=1655817627",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item10.html"
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
            <li>Color: Multicolor</li>
        <li>Material: Vinyl</li>
        <li>Product size: 9 cm</li>
        <li>Package size: 16 x 7 x 12 cm</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            The Daemon Targaryen Funko Pop! Vinyl Figure captures the essence of the legendary dragonrider with remarkable detail. Standing proudly at 3.75 inches tall, this collectible radiates the charisma of House Targaryen's rogue prince. Daemon's signature armor, adorned with fiery dragon motifs, is faithfully recreated, while his iconic Valyrian steel sword, Dark Sister, gleams at his side. His silver hair cascades in waves, framing his brooding visage and fierce lavender eyes. From his intricate facial features to the minutiae of his attire, every aspect of Daemon Targaryen is impeccably rendered. A must-have for Game of Thrones devotees and Funko enthusiasts alike, it's a piece of Westerosi history immortalized in vinyl.
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
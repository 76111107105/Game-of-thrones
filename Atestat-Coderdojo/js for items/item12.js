let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item12",
        name: "RHAENYRA TARGARYEN FUNKO POP! VINYL FIGURE",
        price: 15,
        img: "https://wbshop.com/cdn/shop/products/65604-Rhaenyra-Targaryen-GLAM-1-1-WEB1-_11_360x.png?v=1672178147",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item12.html"
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
           
            The Rhaenyra Targaryen Funko Pop! Vinyl Figure brings the tumultuous world of Westeros to life in a collectible masterpiece. Standing at a charming 3.75 inches, this figurine encapsulates Rhaenyra's fierce spirit and indomitable presence. Her intricately detailed costume, complete with dragon adornments, mirrors her royal lineage as the Princess of Dragonstone. With her signature silver hair cascading down, she carries the weight of her Targaryen heritage. The vibrant paintwork captures every nuance, from her determined expression to the intricacies of her attire. This Funko Pop! is not just a keepsake; it's a portal to the intrigues of House Targaryen and a must-have for Game of Thrones devotees.            
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
let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item8",
        name: "CARAXES MUG",
        price: 17,
        img: "https://wbshop.com/cdn/shop/files/HOTD-MUGcopy_ebccd32c-cdd3-47b2-9805-334e0ecad355_900x.jpg?v=1683923482",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item8.html"
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
        <li>High-quality design</li>
        <li>Measures 3.5” tall; 2.875” wide at the base, and 3.625” at the top</li>
        <li>Microwave safe and top-rack dishwasher safe</li>
        <li>Satisfaction guaranteed</li>
        <li>Great gift idea!</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            
The House of the Dragon Caraxes Mug embodies the essence of Targaryen might. Crafted with meticulous artistry, this mug showcases Caraxes, the Black Dread, in fierce detail. Against a jet-black backdrop, the dragon's crimson eyes and scales stand out, evoking its fiery nature. Sip your favorite beverage in the company of this legendary dragon, celebrating the mythical allure of House Targaryen.
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
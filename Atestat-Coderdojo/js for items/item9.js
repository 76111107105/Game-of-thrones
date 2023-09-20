let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item9",
        name: "SYRAX FUNKO POP! VINYL FIGURE",
        price: 0.01,
        img: "https://wbshop.com/cdn/shop/products/HOTD-SYR_360x.png?v=1673380767",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item9.html"
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
           
            Introducing the Syrax Funko Pop! Vinyl Figure, a captivating embodiment of dragon majesty from the Game of Thrones universe. This collectible stands in miniature grandeur, featuring the legendary dragon Syrax in an adorable chibi-style form. Syrax's intricate details, from her scaled body to her delicate wings, are faithfully recreated, capturing her mythical essence. With her fiery eyes and elegant posture, this figurine radiates Targaryen power. Standing proudly at 4 inches tall, it's the perfect addition to any collector's shelf, allowing fans to bring the magic of dragons and House Targaryen to life in a charming and collectible way.
            
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
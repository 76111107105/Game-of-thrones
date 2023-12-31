let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item1",
        name: "The Iron Throne",
        price: 50,
        img: "https://m.media-amazon.com/images/I/81Y-9Em-bxL._AC_UL480_FMwebp_QL65_.jpg",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item1.html"
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
          <a href="http://127.0.0.1:5500/Atestat-Coderdojo/TheIronThrone.html">
            <h3>${name}</h3></a>

            
            <p>FayeFantasy 5 out of 5 stars</p><br>

            <p class="description">
            Details
            </p>
            <div class="list">
            <ol>
                <li>Intricate</li>
                <li>Authentic</li>
                <li>Majestic</li>
                <li>Resin-cast</li>
                <li>Regal</li>
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
            Unleash the epic power struggle of Westeros right in the palm of your hand with The Iron Throne Collectible Toy. Crafted with meticulous attention to detail, this miniature replica captures the grandeur and intrigue of the Game of Thrones universe. Whether you're a loyal fan of the hit series or a collector of iconic pop culture artifacts, The Iron Throne Toy is the perfect addition to your collection.
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
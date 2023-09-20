let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item2",
        name: "Queen Comforter",
        price: 45,
        img: "https://m.media-amazon.com/images/I/71RmzzI017L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item2.html"
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
          <a href="http://127.0.0.1:5500/Atestat-Coderdojo/item2.html">
            <h3>${name}</h3></a>

            
            <p>FayeFantasy 5 out of 5 stars</p><br>

            <p class="description">
            Details
            </p>
            <div class="list">
            <ol>
            <li><strong>Size:</strong> Queen</li>
            <li><strong>Included components:</strong> Lace pillowcases, quilts</li>
            <li><strong>Color:</strong> Multi - Game of Thrones Game of Thrones</li>
            <li><strong>Age range (description):</strong> baby</li>
            <li><strong>Style:</strong> Modern</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            Transform your bedroom into the Seven Kingdoms with this stunning Game of Thrones-themed bedsheet. Featuring intricate illustrations of iconic Westerosi sigils and landmarks, this bedsheet is a must-have for any fan of the epic fantasy series. Made from soft, high-quality fabric, it ensures both comfort and style fit for a king or queen. Drift into dreams of dragons, knights, and intrigue as you snuggle beneath this captivating Game of Thrones bedsheet. Embrace the world of Westeros every night with this enchanting addition to your bedroom decor.

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
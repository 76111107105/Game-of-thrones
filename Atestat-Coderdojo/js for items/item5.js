let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item5",
        name: "CARAXES FIGURE",
        price: 55,
        img: "https://wbshop.com/cdn/shop/products/WB100-MC-CR-FT-MF_d26e19bc-5525-461b-b177-e17d78741c56_900x.jpg?v=1685539218",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item5.html"
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
            <li>Weight: 1.0000 kg</li>
        <li>Size in cm: 20</li>
        <li>Theme: House of the Dragon</li>
        <li>Product Type: Statues</li>
        <li>Packaging: Window Box</li>
        <li>Material: Plastic</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            Fiercest of all the young dragons in the Dragonpit, Caraxes was once the mount of Prince Aemon Targaryen, son of Jaeherys and uncle to both Daemon and Viserys I, but he became Daemon's mount by the year 105 AC. Nicknamed the Blood Wyrm for both his color and his brutal tendencies-he is savage, cunning and battle-tested-Caraxes has a noticeable appetite."

            <br><br>Rider: Daemon Targaryen
            <br>Incredibly detailed figure of Caraxes from the first season of the HBO series Game of Thrones House of the Dragon. Includes House of the Dragon sculpted base. Dragon comes with large attachable wings. Figure is showcased in House of the Dragon window box packaging.



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
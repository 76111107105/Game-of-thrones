let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item4",
        name: "House Targaryen mug",
        price: 25,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyzAMq-08pzXsJXgidxwjIYgFY31g5K2pkOc1zfIyyyXk0LkGOPgtv6zuNC-Lpvkg7ypDSQsU63ERExTunvRuKU_d-C6yCnuFsQH9Tnh71XoocGGImnJub&usqp=CAc",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item4.html",
        desc: "Used since ancient times, in various rituals or to beautify with its elegance the place where it is placed, the cup or chalice is a special decoration, with an interesting history, which conveys a story.Whether you will use it for decoration, or whether it will be the carrier of the life-giving liquid (or inspiration), it will surely delight your heart. Hand-painted with great attention to detail, the cup looks like it's made of solid steel. The outer portion of the cup is made of a high quality resin, with a very fine finish. A perfect gift for any knight, any enthusiast of the medieval era!"
    },
]

let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, img,link,desc } = x;
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
            <li>Material: Resin</li>
        <li>Decoration: 360 degrees</li>
        <li>Grammage~: 300g</li>
        <li>Height~: 105mm</li>
        <li>Volume~: 400 ml</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            ${desc}
            
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
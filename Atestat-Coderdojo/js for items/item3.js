let shop = document.getElementById('shop');

let shopItemsData = [
    {
        id: "item3",
        name: "Casual Shirt",
        price: 23,
        img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81-kcSBPJbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
        link: "http://127.0.0.1:5500/Atestat-Coderdojo/item3.html"
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
            <li><strong>Brand:</strong> Game of Thrones</li>
        <li><strong>Color:</strong> Black</li>
        <li><strong>Suitable Type:</strong> Regular Fit</li>
        <li><strong>Style:</strong> Classic</li>
        <li><strong>Collar Style:</strong> Boat Neck</li>
        <li><strong>Age Range (description):</strong> Adult</li>
        <li><strong>Material:</strong> Cotton</li>
        <li><strong>Sleeve Type:</strong> Short Sleeve</li>
        <li><strong>Null:</strong> 100% Cotton</li>
        <li><strong>Case:</strong> Party</li>
    
            </ol>
            </div>

            <p class="description">
            Description
            </p>

            <h4>
           
            Channel the legendary House Targaryen's power and majesty with this striking T-shirt. Proudly displaying the iconic Targaryen dragon emblem in bold crimson and black, this shirt is a homage to a lineage known for its unmatched strength and determination. Created from a blend of soft, breathable fabrics, it not only ensures maximum comfort but also showcases your unwavering loyalty to the house that once reigned supreme over the Seven Kingdoms.
            
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
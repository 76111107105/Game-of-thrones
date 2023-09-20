let shop = document.getElementById('shop');

let shopItemsData = [
    { 
        id: "item14",
        name: "Travel Mug The The Rougue Prince",
        price: 13,
        img: "https://m.media-amazon.com/images/I/71r+yIx5iSL._AC_SX425_.jpg"
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
            <h3>${name}</h3>

            
            <p>FayeFantasy 5 out of 5 stars</p><br>

            <p class="description">
            Details
            </p>
            <h4>brand: Regal Living<br>
            color: Multi/Black<br>
            special function: Leak Proof, Non-Slip<br>
            style: House of Dragons<br>
            theme: Game<br>
            material: Stainless Steel</h4>

            <p class="description">
            Description
            </p>

            <h4>
            This stainless steel insulated tumbler is a must-have for a die-hard Daemon fans. Show off your love for House of Dragons and Game of Thrones! This 12oz wine and coffee tumbler is the perfect gift for a raving fan.
            <br>
            Our House of the Dragon merchandise tumbler is engineered and tested against leading brands. Our Tumblers match performance all day long and with our splash proof closable lid you can keep your drinks insulated and protected for longer! A wonderful game of thrones mug which you cannot afford to miss out on.
            <br>
            Your new Game of Thrones merchandise Daemon Targaryen tumbler will have everyone raving about it and asking you where you got it. Our 12oz travel mug with lid is versatile, sleek and stylish. The double wall insulated design makes it great for a warm drink on a cool day or a cold drink on a hot summer day.
            
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
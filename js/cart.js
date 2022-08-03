/* Basket */

let addToCartBtns = document.querySelectorAll(".addToCart");
let basketCount = document.querySelector("#count");
let productList = document.querySelector("#tbody");
let products = JSON.parse(localStorage.getItem("products"));

if (products == null) {
  localStorage.setItem("products", JSON.stringify([]));
  products = [];
}

function updateBasketCount() {
  let basketCount = document.querySelector("span#count");
  basketCount.innerText = products.length;
}

function updateTotalCount() {
  let totalCount = 0;
  let totalPrice = 0;

  products.forEach((product) => {
    totalCount += +product.count;
    totalPrice += +product.price * product.count;
  });

  document.querySelector("#totalCount").innerText = totalCount;
  document.querySelector("#sumPrice").innerText = totalPrice;
}

function updatePrice(el, productId) {
  let currentCount = el.value;

  let product = products.find((p) => p.id == productId);

  let price = +product.price;
  price *= currentCount;

  product.count = currentCount;

  localStorage.setItem("products", JSON.stringify(products));

  let totalPrice = el.parentElement.parentElement.querySelector(".total-price");

  totalPrice.innerText = price;

  updateTotalCount();
}


updateBasketCount();

function addToBasket(ev, productId) {
  ev.preventDefault();

  let productItem = ev.target.closest(".deal-item");
  let productTitle = productItem.querySelector("h4").innerText;
  let productPrice = productItem.querySelector(".card-pr span").innerText;
  let productImage = productItem.querySelector(".deal-img img").src;

  let product = products.find((p) => p.id == productId);

  if (product === undefined) {
    products.push({
      id: productId,
      image: productImage,
      title: productTitle,
      price: +productPrice.replace("US $", ""),
      count: 1,
    });
  } else {
    product.count = +product.count + 1;
  }

  localStorage.setItem("products", JSON.stringify(products));

  updateBasketCount();
}

function removeProduct(el, productId) {
  let productIndex = products.findIndex((p) => p.id == productId);
  products.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(products));
  el.parentElement.parentElement.remove();
  updateBasketCount()
}


addToCartBtns.forEach((cartBtn, index) => {
  cartBtn.addEventListener("click", (ev) => {
    addToBasket(ev, index);
  });
});

products.forEach((product) => {

  productList.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>
                <img src="${product.image}"/>
            </td>
            <td>${product.title}</td>
            <td>
                <input 
                    class="form-control" 
                    min="1"
                    type="number" value="${product.count}" 
                    onchange="updatePrice(event.target, ${product.id})"
                />
            </td>
            <td>${product.price} <span>AZN</span></td>
            <td>
             <span class="total-price">${product.price * product.count}</span>
            </td>
            <td>
                <button 
                  class="btn btn-danger remove-product" 
                  onclick="removeProduct(event.target, ${product.id })">
                    Remove
                </button>
            </td>
        </tr>
    `;
});
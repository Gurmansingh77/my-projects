let createProduct = document.querySelector("#createproduct");
let formparent = document.querySelector(".form");
let crossbtn = document.querySelector(".crosssvg");
let RForm = document.querySelector("form");
let productname = document.querySelector(".productname");
let description = document.querySelector(".description");
let price = document.querySelector(".price");
let imgurl = document.querySelector(".imgurl");

let products = document.querySelector(".products");

let updateIndex = null

createProduct.addEventListener("click", function () {
  formparent.style.display = "flex";
});

crossbtn.addEventListener("click", function () {
  formparent.style.display = "none";
});

let productArr = JSON.parse(localStorage.getItem('products')) || [];


let renderUI = () => {

  products.innerHTML = "";

  productArr.forEach((e , index) => {

    products.innerHTML += `
      <div class="productcard">

        <div class="img">
          <img src="${e.imgurlVal}" alt="">
        </div>

        <h3 style = "font-weight:800;">${e.productnameVal}</h3>
        <h4>${e.descriptionVal}</h4>
        <h4>${e.priceVal}</h4>

        <div class="btn">
          <button id="update" onclick ="updateProduct('${e.productnameVal}')">Update</button>
          <button id="delete" onclick ="deleteproduct(${index})">Delete</button>
        </div>

      </div>
    `;
  });
};

renderUI()

formparent.addEventListener("submit", function (e) {
  e.preventDefault();

  let productnameVal = productname.value;
  let descriptionVal = description.value;
  let priceVal = price.value;
  let imgurlVal = imgurl.value;

  if (
    productnameVal.trim() === "" ||
    descriptionVal.trim() === "" ||
    priceVal.trim() === "" ||
    imgurlVal.trim() === ""
  ) {
    alert("Fields cannot be empty");
    return;
  }

  let obj = {
    productnameVal,
    descriptionVal,
    priceVal,
    imgurlVal,
  };

  if(updateIndex !== null){
    productArr[updateIndex] = obj
    updateIndex = null
    localStorage.setItem("products" , JSON.stringify(productArr))
  }else{
    productArr.push(obj);
    localStorage.setItem("products" , JSON.stringify(productArr))
  }


  renderUI();

  RForm.reset();
  formparent.style.display = "none";
});

let updateProduct = (name) => {
    formparent.style.display = "flex";
  let product = productArr.find((elem) => elem.productnameVal === name)
  updateIndex = productArr.findIndex((elem) => elem.productnameVal === name)

  RForm[0].value = product.productnameVal
  RForm[1].value = product.descriptionVal
  RForm[2].value = product.priceVal
  RForm[3].value = product.imgurlVal
}

let deleteproduct = (index) => {
  productArr.splice(index , 1)
  localStorage.setItem("products" , JSON.stringify(productArr))
  renderUI()
}

localStorage.setItem('name'  , 'gurman singh')
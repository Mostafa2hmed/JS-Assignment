var productNameInput = document.getElementById("productName");
var producPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var searchInput = document.getElementById("searchInput");
var updateBtn = document.getElementById("updateBtn");
var addBtn = document.getElementById("addBtn");
var indexUpdate=0;

var productContainer = [];
if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayData();
}
function addProduct() {
  var product = {
    name: productNameInput.value,
    price: producPriceInput.value,
    Category: productCategoryInput.value,
    description: productDescriptionInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayData();
  clearData();
}
function displayData() {
  var cartona = "";
  for (var i = 0; i < productContainer.length; i++) {
    cartona += ` <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].Category}</td>
        <td>${productContainer[i].description}</td>
        <td>
          <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">Update</button>
          <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>`;
  }
  document.getElementById("tableData").innerHTML = cartona;
}
function clearData() {
  productNameInput.value = "";
  producPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}
function deleteProduct(index) {
  productContainer.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayData();
}
function searchProduct() {
  var term = searchInput.value;
  var cartona = "";
  for (var i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += ` <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].Category}</td>
        <td>${productContainer[i].description}</td>
        <td>
          <button class="btn btn-outline-warning btn-sm">Update</button>
          <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>`;
    }
  }
  document.getElementById("tableData").innerHTML = cartona;
}
function setData(index) {
  indexUpdate=index;
  var currentProduct = productContainer[index];
  productNameInput.value = currentProduct.name;
  producPriceInput.value = currentProduct.price;
  productCategoryInput.value = currentProduct.Category;
  productDescriptionInput.value = currentProduct.description;
  updateBtn.classList.remove("d-none")
  addBtn.classList.add("d-none")
  console.log(currentProduct);
}
function updateProduct(){
var product = {
    name: productNameInput.value,
    price: producPriceInput.value,
    Category: productCategoryInput.value,
    description: productDescriptionInput.value,
  };
  productContainer.splice(indexUpdate,1,product)
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayData()
  clearData()
    updateBtn.classList.add("d-none")
  addBtn.classList.remove("d-none")
}
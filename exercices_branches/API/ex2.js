const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");

async function fetchProducts(query = "") {
    const url ='https://www.themealdb.com/api/json/v1/1/search.php?s=' + query; 
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data.meals);
}

function displayProducts(meals) {
    productList.innerHTML = "";
    meals.forEach(meals => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${meals.strMealThumb}">
            <h3>${meals.strMeal}</h3>
        `;
        productList.appendChild(productElement);
    });
}

searchBar.addEventListener("input", () => {
    const query = searchBar.value.trim();
    fetchProducts(query);
});

fetchProducts();














// const productList = document.getElementById("productList");
// const searchBar = document.getElementById("searchBar");

// async function fetchProducts(query = "") {
//     const url ='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'; 
//     const response = await fetch(url);
//     const data = await response.json();
//     displayProducts(data.meals);
// }

// function displayProducts(meals) {
//     productList.innerHTML = "";
//     meals.forEach(meals => {
//         const productElement = document.createElement("div");
//         productElement.classList.add("product");
//         productElement.innerHTML = `
//             <img src="${meals.strMealThumb}">
//             <h3>${meals.strMeal}</h3>
//         `;
//         productList.appendChild(productElement);
//     });
// }

// searchBar.addEventListener("input", () => {
//     const query = searchBar.value.trim();
//     fetchProducts(query);
// });

// fetchProducts();







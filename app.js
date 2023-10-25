const product_container = document.getElementById('product-container');

const brands = [
    {
        id:1,
        name:'Apple'
    },
    {
        id:2,
        name:'Samsung'
    },
    {
        id:3,
        name:'Huawei'
    },
    {
        id:4,
        name:'Xiaomi'
    },
    {
        id:5,
        name:'Nokia'
    },
]

const products = [
    {
        "telefon": "iPhone 14",
        "fiyat": 799,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Apple"
      },
      {
        "telefon": "iPhone 14 Pro",
        "fiyat": 999,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Apple"
      },
      {
        "telefon": "iPhone 14 Pro Max",
        "fiyat": 1099,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Apple"
      },
      {
        "telefon": "Xiaomi SE (2022)",
        "fiyat": 429,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Xiaomi"
      },
      {
        "telefon": "Xiaomi 13",
        "fiyat": 699,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Xiaomi"
      },
      {
        "telefon": "Galaxy S23 Ultra",
        "fiyat": 1199,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Samsung"
      },
      {
        "telefon": "Galaxy S23+",
        "fiyat": 999,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Samsung"
      },
      {
        "telefon": "Galaxy S23",
        "fiyat": 799,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Samsung"
      },
      {
        "telefon": "Huawei A53 5G",
        "fiyat": 449,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Huawei"
      },
      {
        "telefon": "Nokia A33 5G",
        "fiyat": 349,
        "resim": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
        "brand":"Nokia"
      }
]

const displayProducts = (arr) => {
    product_container.innerHTML = ''; 
    arr.forEach((item)=>{
        product_container.innerHTML += `
        <div class='col-4 mb-4' brand="${item.brand}">
            <div class="card bg-dark text-white">
                <img class="card-img opacity-50" src="${item.resim}" alt="Title">
                <div class="card-img-overlay">
                    <h4 class="card-title">${item.telefon}</h4>
                    <p class="card-text">${item.brand}</p>
                    <p class="card-text">${item.fiyat}</p>
                </div>
            </div>
        </div>
       `
    })
}
displayProducts(products)


const displaySidebars = (arr) => {
    sidebar.innerHTML='';
    arr.forEach((item)=>{
        sidebar.innerHTML+=`
            <div class='col-12 d-flex'>
                <input id='brand-${item.name}' type='checkbox' class='form-check-input brends'>
                <label class='form-check-label' for='brand-${item.name}'>${item.name}</label>
            </div>
        `;
    })
}
displaySidebars(brands)
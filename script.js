document.addEventListener("DOMContentLoaded", function() {
   const menuItems = [
      { name: "Spaghetti Carbonara", price: "₱699", image: "image/carbonara.jpg" },
      { name: "Margherita Pizza", price: "₱599", image: "image/pizza.jpg" },
      { name: "Grilled Salmon", price: "₱899", image: "image/salmon.jpg" },
      { name: "Caesar Salad", price: "₱399", image: "image/salad.jpg" },
      { name: "Beef Wellington", price: "₱9999", image: "image/beef.jpg"},
      { name: "Lobster Thermidor", price: "₱3999", image: "image/lobster.jpg"}
   ];
   
   const menuContainer = document.getElementById("menu-items");
   
   menuContainer.innerHTML = "";
   
   menuItems.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("col-md-4", "mb-4");
      menuItem.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Price: ${item.price}</p>
                </div>
            </div>
        `;
      menuContainer.appendChild(menuItem);
   });
});


function setupClickListener(elementId, url) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", function () {
      window.location.href = url;
    });
  }
}

const links = [
  { ids: ["signup"], url: "/index.html" }
];

links.forEach(link => {
  link.ids.forEach(id => setupClickListener(id, link.url));
});

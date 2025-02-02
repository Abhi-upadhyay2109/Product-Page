  import products from './data.js'

  const productsContainer = document.getElementById('products-container');

  // Initial products display
  displayProducts(products);

  // Add filter and sorting options
  const categoryFilter =document.getElementById("filterByCategory")
  const priceSort = document.getElementById("sortByPrice")
  

  // Event listeners for filter and sorting
  categoryFilter.addEventListener('change', applyFilters);
  priceSort.addEventListener('change', applySort);

  function applyFilters() {
      const category = categoryFilter.value;
      const filteredProducts = products.filter(product => !category || product.category === category);
      displayProducts(filteredProducts);
  }

  function applySort() {
      const sortBy = priceSort.value
      const sortedProducts = [...products];
      if (sortBy === 'price-low-to-high') {
          sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high-to-low') {
          sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating-low-to-high') {
          sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (sortBy === 'rating-high-to-low') {
          sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      }
      displayProducts(sortedProducts);
  }

  function displayProducts(products) {
      productsContainer.innerHTML = '';
      products.forEach(product => {
          const card = createProductCard(product);
          productsContainer.appendChild(card);
      });
  }

  function createProductCard(product) {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const image = document.createElement('img');
      image.classList.add('product-image');
      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement('h3');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.textContent = `Price: $${product.price.toFixed(2)}`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(rating);

      return card;
  }




  
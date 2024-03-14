const products = [
  {
    name: "Pastel",
    flavors: [
      "Frango",
      "Carne de Sol",
      "Carne Moída",
      "Presunto",
      "Calabresa",
      "Catupiry",
      "Cheddar",
      "Cream Cheese",
      "Queijo Muçarela",
      "Queijo Coalho",
      "Bacon"
    ],
    img: "./img/Principal.jpeg",
    price: {
      0: 4,
      1: 7,
      2: 7,
      3: 7,
      4: 9,
      5: 9,
      6: 12,
      7: 12
    },
    type: "Pastel",
    accompaniments: ["Cebola", "Tomate", "Milho Verde", "Passas", "Batata Palha", "Orégano"],
    sauces: ["Ketchup", "Mostarda", "Barbecue", "Maionese", "Pimenta"]
  },
  {
    name: "Sopa (escolha um produto de cada vez)",
    flavors: [
      { name: "Sopa de frango P", price: 6 },
      { name: "Sopa de frango G", price: 12 },
      { name: "Sopa de carne P", price: 6 },
      { name: "Sopa de carne G", price: 12 }
    ],
    img: "./img/sopa_de_frango.jpeg",
    type: "Sopas"
  },
  {
    name: "Coxinha",
    img: "/img/Coxinha.jpeg",
    flavors: ["Frango"], // Adicionando um array vazio de sabores
    type: "Salgados",
    price: 6 // Definindo o preço fixo
  },
  {
    name: "Cachorro Quente",
    img: "/img/Cachorro_Quente.jpeg",
    flavors: [
      "Salsicha",      
      "Carne Moída",
      "Ketchup",
      "Maionese",
      "Mostarda",
      "Cebola",
      "Tomate",
      "Batata Palha",
      "Queijo Ralado",
      "Milho",
      "Ervilha"
    ], // Adicionando um array vazio de sabores
    type: "Salgados",
    price: 6 // Definindo o preço fixo
  },
  {
    name: "Empada de Frango",
    img: "/img/Empada_de_frango.jpeg",
    flavors: ["Frango"], // Adicionando um array vazio de sabores
    type: "Salgados",
    price: 5 // Definindo o preço fixo
  },
  {
    name: "Tapioca",
    flavors: [
      "Frango",
      "Carne de Sol",
      "Carne Moída",
      "Presunto",
      "Calabresa",
      "Catupiry",
      "Cheddar",
      "Cream Cheese",
      "Queijo Muçarela",
      "Queijo Coalho",
      "Bacon"
    ],
    img: "/img/Tapioca.jpeg",
    price: {
      2: 6,
      3: 7
    },
    type: "Tapioca"
  },
  {
    name: "Batata Frita (escolha um produto de cada vez)",
    flavors: [
      { name: "Batata Frita P <b>R$ 6,00</b> - com Queijo Ralado, Sal, Ketchup, Maionese, Mostarda e Cheddar", price: 6 },
      { name: "Batata Frita G <b>R$ 12,00</b> - com Queijo Ralado, Sal, Ketchup, Maionese, Mostarda e Cheddar", price: 12 }
    ],
    img: "/img/batata_frita.jpeg",
    type: "Salgados",
    price: 6 // Definindo o preço fixo
  },
  {
    name: "Escondidinho de Charque (escolha um produto de cada vez) ",
    flavors: [
      { name: "Escondidinho de Charque P <b>R$ 6,00</b> ", price: 6 },
      { name: "Escondidinho de Charque G <b>R$ 12,00</b> ", price: 12 }
    ],
    img: "/img/escondidinho.jpeg",
    type: "Salgados",
    price: 6 // Definindo o preço fixo
  },
  {
    name: "Açaí (escolha um produto de cada vez)",        
    flavors: [
      { name: "Açaí Pequeno <b>R$ 6,00</b> - com Banana, Leite em Pó, Leite Condensado, M&M, Chocobol, Farinha de Amendoim, Granola e Paçoca ",  price: 6 },
      { name: "Açaí Médio <b>R$ 8,00</b>  - com Banana, Leite em Pó, Leite Condensado, M&M, Chocobol, Farinha de Amendoim, Granola e Paçoca", price: 8 },
      { name: "Açaí Grande <b>R$ 12,00</b> - com Banana, Leite em Pó, Leite Condensado, M&M, Chocobol, Farinha de Amendoim, Granola e Paçoca", price: 12 }
    ],
    img: "/img/acai.jpeg",
    type: "Sobremesas"
  },
  {
    name: "Bolo de Noiva",
    img: "/img/bolo_de_noiva.jpeg",
    flavors: ["Bolo de Noiva"], 
    type: "Salgados",
    price: 8 
  },
  {
    name: "Copo da Felicidade",
    img: "/img/copo_da_felicidade.jpeg",
    flavors: ["Vários Sabores"], 
    type: "Salgados",
    price: 8 
  },
  {
    name: "Bolo de Maracuja",
    img: "/img/bolo_de_Maracuja.jpeg",
    flavors: ["Maracujá"], 
    type: "Salgados",
    price: 6 
  },
  {
    name: "Docinho Gourmet",
    img: "/img/docinhos_gourmet.jpeg",
    flavors: ["Vários Sabores"], 
    type: "Salgados",
    price: 1 
  },
  {
    name: "Bebidas (escolha um produto de cada vez)",        
    flavors: [
      { name: "Guaraná Antartica 250ml <b>R$ 3,00</b>",  price: 3 },      
      { name: "Guaraná Antartica Lata 350ml <b>R$ 5,00</b>", price: 5 },
      { name: "Guaraná Antartica 1 litro <b>R$ 8,00</b>", price: 8 },
      { name: "Coca Cola Lata 350ml <b>R$ 5,00</b>", price: 5 },
      { name: "Coca Cola 1 litro <b>R$ 8,00</b>", price: 8 },
      { name: "Coca Cola 2 litros <b>R$ 15,00</b>", price: 15 },
      { name: "Água 500ml<b>R$ 2,00 </b>", price: 2 },
      { name: "Água com Gás 500ml <b>R$ 3,00</b>", price: 3 },
      { name: "Copo de Suco<b>R$ 3,00 </b>", price: 3 }
    ],
    img: "/img/refrigerantes.jpeg",
    type: "Sobremesas"
  },
  ];

const productCards = document.getElementById('productCards');
const cart = document.querySelector('.cart');
const cartItemsContainer = document.querySelector('.cart-items');
const totalElement = document.getElementById('total');
const toggleCartButton = document.getElementById('toggleCart');
const clearCartButton = document.getElementById('clearCart');
const sendOrderButton = document.getElementById('sendOrder');

let total = 0;
let itemCount = 0;

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img class="card-img-top" src="${product.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      ${product.name === 'Pastel' ? '<p>Pastel de vento é só clicar em adicionar <b>R$ 4,00</b></p>' : ''}
      ${product.name === 'Pastel' ? '<p>Escolha 3 Sabores e só pague <b>R$ 7,00</b></p>' : ''}
      ${product.name === 'Pastel' ? '<p>Escolha 5 Sabores e só pague <b>R$ 9,00</b></p>' : ''}
      ${product.name === 'Pastel' ? '<p>Escolha 7 Sabores e só pague <b>R$ 12,00</b></p>' : ''}
      ${product.name === 'Sopa' ? '<p>Tamanho P <b>R$ 6,00</b></p><p>Tamanho G <b>R$ 12,00</b></p>' : ''}
      ${product.name === 'Coxinha' ? '<p>Frango <b>R$ 6,00</b></p>' : ''}
      ${product.name === 'Tapioca' ? '<p>Escolha 2 Sabores <b>R$ 6,00</b></p>' : ''}
      ${product.name === 'Tapioca' ? '<p>Escolha 3 Sabores <b>R$ 7,00</b></p>' : ''}      
      ${product.name === 'Empada de Frango' ? '<p>Empada de Frango <b>R$ 5,00</b></p>' : ''}
      ${product.name === 'Cachorro Quente' ? '<p>Cachorro Quente <b>R$ 6,00</b></p>' : ''}
      ${product.name === 'Bolo de Noiva' ? '<p>Bolo de Noiva R$ <b>R$ 8,00</b></p>' : ''}
      ${product.name === 'Copo da Felicidade' ? '<p>Copo da Felicidade <b>R$ 8,00</b></p>' : ''}
      ${product.name === 'Bolo de Maracuja' ? '<p>Bolo de Maracujá <b>R$ 6,00</b></p>' : ''}
      ${product.name === 'Docinho Gourmet' ? '<p>Docinho Goumert   <b>R$ 1,00</b></p>' : ''}
      <p class="card-text">Escolha os sabores do(a) ${product.name}</p>
      <ul class="flavor-list text-start">
        ${product.flavors ? product.flavors.map(flavor => {
          if (typeof flavor === 'string') {
            return `<li><input type="checkbox" name="flavor" value="${flavor}">${flavor}</li>`;
          } else {
            return `<li><input type="checkbox" name="flavor" value="${flavor.name}">${flavor.name}</li>`;
          }
        }).join('') : ''}
      </ul>
      ${product.name === 'Pastel' ? '<p>Escolha 03 opções Acompanhamentos:</p><div class="accompaniments"></div>' : ''}
      ${product.name === 'Pastel' ? '<p>Escolha 03 opções Molhos:</p><div class="sauces"></div>' : ''}
      <button class="btn btn-primary add-to-cart" data-product="${product.name}">Adicionar</button>
    </div>
  `;
  productCards.appendChild(card);

  // Adiciona um listener de evento para o botão de adicionar em todos os produtos
  const addToCartButton = card.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    // Verificar se o produto clicado é Batata Frita
    if (product.name === 'Batata Frita') {
      const checkboxes = card.querySelectorAll('input[type="checkbox"]:checked');
      // Se não houver nenhum checkbox marcado, sair sem adicionar ao carrinho
      if (checkboxes.length === 0) return;
    }
    addToCart(event);
  });

  // Adiciona checkboxes para acompanhamentos
  if (product.name === 'Pastel') {
    const accompanimentsContainer = card.querySelector('.accompaniments');
    product.accompaniments.forEach(accompaniment => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'accompaniment';
      checkbox.value = accompaniment;
      accompanimentsContainer.appendChild(checkbox);
      accompanimentsContainer.appendChild(document.createTextNode(accompaniment));
      accompanimentsContainer.appendChild(document.createElement('br'));
    });
  }

  // Adiciona checkboxes para molhos
  if (product.name === 'Pastel') {
    const saucesContainer = card.querySelector('.sauces');
    product.sauces.forEach(sauce => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'sauce';
      checkbox.value = sauce;
      saucesContainer.appendChild(checkbox);
      saucesContainer.appendChild(document.createTextNode(sauce));
      saucesContainer.appendChild(document.createElement('br'));
    });
  }
});

function calculatePrice(productName, selectedFlavors) {
  const product = products.find(p => p.name === productName);

  if (product.type === "Pastel") {
    const numFlavors = selectedFlavors.length;
    let price = 4;

    if (numFlavors >= 1 && numFlavors <= 3) {
      price = 7;
    } else if (numFlavors >= 4 && numFlavors <= 5) {
      price = 9;
    } else if (numFlavors >= 6 && numFlavors <= 7) {
      price = 12;
    }

    return price;  
  } 
  else if (product.type === "Tapioca") {
    if (selectedFlavors.length === 1) {
      // Se o cliente escolher apenas 1 sabor, considera como tapioca de 2 sabores
      return 6;
    } else if (selectedFlavors.length === 2) {
      return 6;
    } else if (selectedFlavors.length === 3) {
      return 7;
    }
  } else if (product.type === "Salgados" || productName === "Batata Frita P" || productName === "Batata Frita G") {
    // Retorna o preço fixo para produtos de tipo Salgados e para Batata Frita
    const selectedFlavor = product.flavors.find(flavor => selectedFlavors.includes(flavor.name));
    return selectedFlavor ? selectedFlavor.price : product.price;
  } else if (product.type === "Sopas" || product.type === "Sobremesas") {
    const selectedFlavor = product.flavors.find(flavor => selectedFlavors.includes(flavor.name));
    return selectedFlavor.price;
  }
  
}

function addToCart(event) {
  const button = event.target;
  const selectedFlavors = [];
  const flavorCheckboxes = button.parentElement.querySelectorAll('input[type="checkbox"][name="flavor"]:checked');
  flavorCheckboxes.forEach(checkbox => {
    selectedFlavors.push(checkbox.value);
    // Limpar os checkboxes selecionados
    checkbox.checked = false;
  });
  const selectedAccompaniments = [];
  const accompanimentCheckboxes = button.parentElement.querySelectorAll('input[type="checkbox"][name="accompaniment"]:checked');
  accompanimentCheckboxes.forEach(checkbox => {
    selectedAccompaniments.push(checkbox.value);
    // Limpar os checkboxes selecionados
    checkbox.checked = false;
  });
  const selectedSauces = [];
  const sauceCheckboxes = button.parentElement.querySelectorAll('input[type="checkbox"][name="sauce"]:checked');
  sauceCheckboxes.forEach(checkbox => {
    selectedSauces.push(checkbox.value);
    // Limpar os checkboxes selecionados
    checkbox.checked = false;
  });
  const productName = button.getAttribute('data-product');

  // Verifica se o item já está no carrinho
  const existingItem = Array.from(cartItemsContainer.children).find(item => {
    const itemName = item.getAttribute('data-product');
    if (itemName === productName) {
      // Verifica se os sabores selecionados são os mesmos
      const itemFlavors = Array.from(item.querySelectorAll('.col > span.flavors')).map(span => span.textContent);
      return JSON.stringify(itemFlavors.sort()) === JSON.stringify(selectedFlavors.sort());
    }
    return false;
  });

  if (existingItem) {
    // Se o item já está no carrinho com os mesmos sabores, apenas retorna
    return;
  }

  // Se o item não está no carrinho ou está com sabores diferentes, adiciona ao carrinho
  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.setAttribute('data-product', productName); // Adiciona um atributo para identificar o produto
  const price = calculatePrice(productName, selectedFlavors, selectedAccompaniments, selectedSauces);
  total += price;
  updateTotal();
  itemCount++;
  let productNameDisplay = productName;
  if (productName === "Pastel") {
    const numFlavors = selectedFlavors.length;
    if (numFlavors === 0) {
      productNameDisplay = "Pastel de Vento";
    } else if (numFlavors >= 1 && numFlavors <= 3) {
      productNameDisplay = "Pastel 3 Sabores";
    } else if (numFlavors >= 4 && numFlavors <= 5) {
      productNameDisplay = "Pastel 5 Sabores";
    } else if (numFlavors >= 6 && numFlavors <= 7) {
      productNameDisplay = "Pastel 7 Sabores";
    }
  }
  item.innerHTML = `
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <span class="item-number">Pedido ${itemCount}</span>
          <span>${productNameDisplay} (${selectedFlavors.join(', ')}, ${selectedAccompaniments.join(', ')}, ${selectedSauces.join(', ')})</span>
        </div>
        <div class="col">
          <span class="item-value">R$ ${price.toFixed(2)}</span>
        </div>
        <div class="col">
          <button class="btn btn-danger remove-item">Remover</button>
        </div>
      </div>
    </div>
  `;
  cartItemsContainer.appendChild(item);
  // Adiciona o evento de remoção ao botão de remover
  const removeButton = item.querySelector('.remove-item');
  removeButton.addEventListener('click', removeItem);
}

function removeItem(event) {
  const itemToRemove = event.target.closest('.cart-item');
  const itemPrice = parseFloat(itemToRemove.querySelector('.item-value').textContent.replace('R$ ', ''));
  total -= itemPrice;
  updateTotal();
  itemToRemove.remove();
  updateItemNumber(); // Atualiza os números dos pedidos restantes
}

function updateItemNumber() {
  const cartItems = document.querySelectorAll('.cart-item');
  cartItems.forEach((item, index) => {
    item.querySelector('.item-number').textContent = `Pedido ${index + 1}`;
  });
}

toggleCartButton.addEventListener('click', () => {
  cart.classList.toggle('expanded');
});

clearCartButton.addEventListener('click', () => {
  clearCart();
});

sendOrderButton.addEventListener('click', () => {
  sendOrderToWhatsApp();
});

function clearCart() {
  total = 0;
  itemCount = 0;
  cartItemsContainer.innerHTML = '';
  updateTotal();
  updateItemNumber();
}

function updateTotal() {
  totalElement.textContent = total.toFixed(2);
}

function sendOrderToWhatsApp() {
  const items = document.querySelectorAll('.cart-item');
  let message = "Pedido:\n";
  let totalPrice = 0;
  items.forEach((item, index) => {
    const itemName = item.querySelector('.col > span:last-child').textContent;
    const itemPrice = parseFloat(item.querySelector('.item-value').textContent.replace('R$ ', ''));
    message += `${itemName} - R$ ${itemPrice.toFixed(2)}\n`;
    totalPrice += itemPrice;
  });
   
  // Get customer information
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;

  message += `\nInformações do Cliente:\nNome: ${name}\nEndereço: ${address}\n`;

  message += `\nTotal: R$ ${totalPrice.toFixed(2)}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
  window.open(whatsappLink);

  // Limpar o carrinho após o pedido ser enviado
  clearCart();
}
<<<<<<< HEAD
// esta perfeito 14/03 10:00
=======
// esta perfeito 14/03 10:00
>>>>>>> e8bf8d10e53eaf98b6e22de99f393026fc834cb4

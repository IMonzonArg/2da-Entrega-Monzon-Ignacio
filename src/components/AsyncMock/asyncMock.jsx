const products = [
  {
    "id": 1,
    "nombre": "Whisky Johnny Walker",
    "tipo": "Licor",
    "precio": "$30",
    "stock": 50,
    "imagen": "../../assets/Captura de pantalla 2023-10-31 175742.png",
    "graduacion": "40%",
    "origen": "Escocia"
  },
  {
    "id": 2,
    "nombre": "Vodka Absolut 750ml.",
    "tipo": "Destilado",
    "precio": "$20",
    "stock": 60,
    "imagen": "../../assets/absolut-rasp1-1dc72fe23114b0e1e416189287138305-640-0.png",
    "graduacionAlcoholica": "40%",
    "origen": "Suecia"
  },
  {
    "id": 3,
    "nombre": "Vino Rutini Cabernet Malbec 750ml",
    "tipo": "Vino",
    "precio": "$12",
    "stock": 40,
    "imagen": "../../assets/Captura de pantalla 2023-10-31 175810.png",
    "graduacionAlcoholica": "12%",
    "origen": "Chile"
  },
  {
    "id": 4,
    "nombre": "Gin Bombay Sapphire",
    "tipo": "Destilado",
    "precio": "$25",
    "stock": 30,
    "imagen": "../../assets/bombay-750-ok1-44604b4cc3272c112d16178914620015-640-0.png",
    "graduacionAlcoholica": "47%",
    "origen": "Inglaterra"
  },
  {
    "id": 5,
    "nombre": "Licor Amarula 750ml",
    "tipo": "Espirituosa",
    "precio": "$18",
    "stock": 55,
    "imagen": "../../assets/amarula1-7bea8251b5293e397816159833371025-640-0.jpeg",
    "graduacionAlcoholica": "40%",
    "origen": "Cuba"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 2000 )
  })
}

export const getProductByCategory = (productTipo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.tipo === productTipo))
    }, 2000 )
  })
}


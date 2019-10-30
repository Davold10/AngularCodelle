import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products (){
    [{
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
  },
  {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
  },
  {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
  },
  {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
  },
  {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
  },
  {
      "productId": 11,
      "productName": "Nintendo nes",
      "productCode": "GMG-0043",
      "releaseDate": "October 15, 2018",
      "description": "Console video games",
      "price": 21.95,
      "starRating": 4.3,
      "imageUrl": "assets/images/nes.jpg"
  },
  {
      "productId": 12,
      "productName": "Nintendo Switch Console",
      "productCode": "GMG-0047",
      "releaseDate": "October 15, 2018",
      "description": "Video Games Console",
      "price": 400.95,
      "starRating": 4.1,
      "imageUrl": "assets/images/NS.jpg"
  }, {
      "productId": 13,
      "productName": "Laptop lenovo",
      "productCode": "GMG-0048",
      "releaseDate": "October 15, 2018",
      "description": "Laptop Lenovo, 8Gb Ram, Core I5, mamalona",
      "price": 700.95,
      "starRating": 3.6,
      "imageUrl": "assets/images/LaptopLenovo.jpg"
  }, {
      "productId": 14,
      "productName": "Lenovo Laptop Yoga 530",
      "productCode": "GMG-004632",
      "releaseDate": "October 15, 2018",
      "description": "pantalla de 14 HD Táctil, Intel Core i5, 8GB RAM, 256GB SSD, Windows 10",
      "price": 800.95,
      "starRating": 2.6,
      "imageUrl": "assets/images/LaptopLenovo2.jpg"
  }, {
      "productId": 15,
      "productName": "Laptop HP",
      "productCode": "GMG-004123",
      "releaseDate": "October 15, 2018",
      "description": "Pantalla de 13 FHD, Procesador Core i7-8550U, 8GB RAM, 256GB SSD, Sistema operativo Windows 10, Color Ceramic White (13-af002la)",
      "price": 8655.95,
      "starRating": 5.0,
      "imageUrl": "assets/images/LaptopHP.PNG"
  }, {
      "productId": 16,
      "productName": "Asus VivoBook Pro 17 Thin and Portable Laptop",
      "productCode": "GMG-004125",
      "releaseDate": "October 15, 2018",
      "description": "17.3 FHD, 8th Gen Intel Core i7-8565U Processor, NVIDIA GeForce MX150, 8GB DDR4 RAM, 512GB SSD, Backlit Keyboard, Windows 10 - N705FN-ES76",
      "price": 346.95,
      "starRating": 3.1,
      "imageUrl": "assets/images/hyundai.PNG"
  }, {
      "productId": 17,
      "productName": "Smartphone Samsung Galaxy",
      "productCode": "GMG-004154",
      "releaseDate": "October 15, 2018",
      "description": "A50 64 GB Blanco Desbloqueado más Power Bank 2,200 mAh más memoria micro Sd 64 Gb",
      "price": 754.95,
      "starRating": 3.8,
      "imageUrl": "assets/images/CelularGalaxy.PNG"
  }, {
      "productId": 18,
      "productName": "Galaxy Note 10",
      "productCode": "GMG-004452",
      "releaseDate": "October 15, 2018",
      "description": "10 256gb Ram 8gb Nuevo Garantia Samsung Mexico",
      "price": 600.95,
      "starRating": 4.1,
      "imageUrl": "assets/images/GalaxyNote10.PNG"
  }, {
      "productId": 19,
      "productName": "Monitor Curvo",
      "productCode": "GMG-00412234",
      "releaseDate": "October 15, 2018",
      "description": "Monitor Samsung para PC de 27 Curved; el nuevo monitor curvo CH711 Quantum Dot de Samsung está diseñado teniendo en cuenta a los jugadores. El CH711 ofrece una calidad de imagen vívida y visualmente deslumbrante, independientemente del contenido que se disfrute. Con una curvatura de 1.800R y un ángulo de visión de 178 grados ultra amplio, el CH711 hace que el contenido sea claramente visible donde sea que se encuentre en una habitación.",
      "price": 545.95,
      "starRating": 4.2,
      "imageUrl": "assets/images/Monitor.PNG"
  }, {
      "productId": 20,
      "productName": "Samsung Galaxy M30 64gb",
      "productCode": "GMG-004122",
      "releaseDate": "October 15, 2018",
      "description": "64 GB Blanco Desbloqueado más Power Bank 2,200 mAh más memoria micro Sd 64 Gb",
      "price": 450.95,
      "starRating": 4.4,
      "imageUrl": "assets/images/GalaxtM30.PNG"
  }
]
  }

  constructor() { }
}

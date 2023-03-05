export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string

}

export const products = [
  {
    "id": 1,
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "category" : "Clothing",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":  3.9,
    "link" : "https://kaspi.kz/shop/p/rjukzak-swissgear-8810-sinii-108165615/?c=750000000"
  },
  {
    "id": 2,
    "name": "Mens Casual Premium Slim Fit T-Shirts ",
    "category" : "Clothing",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": 4.1,
    "link" : "https://kaspi.kz/shop/p/nike-dri-fit-sport-t-shirt-dh8920-010-106841918/?c=750000000"
  },
  {
    "id": 14,
    "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "category" : "Electronics",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": 2.2,
    "link" : "https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000"
  },
  {
    "id": 16,
    "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "category" : "Clothing",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": 2.9,
    "link" : "https://kaspi.kz/shop/p/deri-mont-km225-104315840/?c=750000000"
    },
  {
    "id": 18,
    "name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "category" : "Clothing",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": 4.7,
    "link" : "https://kaspi.kz/shop/p/futbolka-alamata-t-shirt-chernyi-107594808/?c=750000000"
  },
  {
    "id": 19,
    "name": "Opna Women's Short Sleeve Moisture",
    "category" : "Clothing",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": 4.5,
    "link" : "https://kaspi.kz/shop/p/nike-sportswear-premium-essentials-men-t-shirt-do7392-010-chernyi-106381440/?c=750000000"
  },
  {
    "id": 20,
    "name": "DANVOUY Womens T Shirt Casual Cotton Short",
    "category" : "Clothing",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": 3.6,
    "link" : "https://kaspi.kz/shop/p/nike-nba-brooklyn-nets-durant-t-shirt-cv8504-019-106841958/?c=750000000"
  },
  {
    "id": 12,
    "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "category" : 'Electronics',
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": 4.8,
    "link" : "https://kaspi.kz/shop/p/ssd-teamgroup-t-force-cardea-z44l-gaming-107405707/?c=750000000"
  },
  {
    "id": 13,
    "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "category" : "Electronics",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": 2.9,
    "link" : "https://kaspi.kz/shop/p/acer-nitro-kg272-um-hx2ee-018-chernyi-101102566/?c=750000000"
  },
  {
    "id": 15,
    "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "category" : "Clothing",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": 2.6,
    "link" : "https://kaspi.kz/shop/p/koton-3wkb20018tw200-children-108636082/?c=750000000"
  }
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

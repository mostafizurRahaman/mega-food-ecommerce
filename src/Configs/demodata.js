const foodCategories = [
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/fruits-vegetables",
      title: "fruits & vegetables",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/meat-fish",
      title: "meat fish",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/cooking",
      title: "cooking",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/sauces-pickles",
      title: "sauces & pickles",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/fruits-vegetables",
      title: "fruits & vegetables",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/dairy",
      title: "dairy & eggs",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/breakfast",
      title: "breakfast",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/beverages",
      title: "beverages",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/baking-needs",
      title: "baking-needs",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/frozen-foods",
      title: "frozen & foods",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
   {
      _id: Date.now() + Math.ceil(Math.random() * 1000),
      path: "/diabetic-food",
      title: "diabetic food",
      image: "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
   },
];

export const products = [
   {
      productName: "Deluxe Chocolate Cake",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 50,
      description:
         "A mouthwatering chocolate cake with a rich, creamy frosting.",
      price: 29.99,
      regularPrice: 34.99,
   },
   {
      productName: "Gourmet Pizza",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 30,
      description: "A delicious pizza loaded with your favorite toppings.",
      price: 12.99,
      regularPrice: 15.99,
   },
   {
      productName: "Fresh Organic Apples",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 100,
      description: "Organically grown apples bursting with flavor.",
      price: 1.99,
      regularPrice: 2.49,
   },
   {
      productName: "Premium Coffee Beans",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 75,
      description: "High-quality coffee beans for your morning brew.",
      price: 9.99,
      regularPrice: 12.99,
   },
   {
      productName: "Sparkling Mineral Water",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 200,
      description: "Refreshing sparkling mineral water from natural springs.",
      price: 2.49,
      regularPrice: 2.99,
   },
   {
      productName: "Organic Avocado Oil",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 40,
      description: "Cold-pressed organic avocado oil for cooking and salads.",
      price: 8.99,
      regularPrice: 10.99,
   },
   {
      productName: "Handcrafted Chocolate Truffles",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 60,
      description: "Exquisite handcrafted chocolate truffles for indulgence.",
      price: 19.99,
      regularPrice: 24.99,
   },
   {
      productName: "Freshly Baked Croissants",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 80,
      description: "Warm, buttery croissants perfect for breakfast.",
      price: 3.49,
      regularPrice: 4.99,
   },
   {
      productName: "Organic Blueberries",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 120,
      description: "Plump, juicy organic blueberries packed with antioxidants.",
      price: 5.99,
      regularPrice: 6.99,
   },
   {
      productName: "Artisanal Cheese Selection",
      productCategory: "Food",
      productImage:
         "https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
      status: "in-stock",
      quantity: 25,
      description:
         "A curated selection of artisanal cheeses from around the world.",
      price: 29.99,
      regularPrice: 34.99,
   },
];

export default foodCategories;

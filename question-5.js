// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
let totalPrice = 0;
const calculateTotalPrice = (products, promotionCode) => {
  for (let i = 0; i < products.length; i = i + 1) {
    totalPrice = totalPrice + products[i].price * products[i].quantity;
  }
  if (promotionCode === 50) {
    return totalPrice - totalPrice * 0.5;
  } else if (promotionCode === 20) {
    return totalPrice - totalPrice * 0.2;
  } else {
    return totalPrice;
  }
};

console.log(calculateTotalPrice(products, 20));

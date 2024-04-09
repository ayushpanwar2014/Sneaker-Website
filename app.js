const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "Air Jordan 1 Low",
    price: 119,
    colors: [
      {
        code: "brown",
        img: "Icon/NewAir.jpeg",
      },
      {
        code: "lightblue",
        img: "Icon/NewAirb.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan XXXVIII 'Aqua' PF",
    price: 299,
    colors: [
      {
        code: "black",
        img: "Icon/NewAir1.jpeg",
      },
      {
        code: "red",
        img: "Icon/NewAir2.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Luka 2 'The Pitch' PF",
    price: 199,
    colors: [
      {
        code: "orange",
        img: "Icon/NewAir3.jpeg",
      },
      {
        code: "black",
        img: "Icon/NewAir4.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Air Jordan XXXVIII Low PF",
    price: 259,
    colors: [
      {
        code: "lightpink",
        img: "Icon/NewAir5.jpeg",
      },
      {
        code: "lightgray",
        img: "Icon/NewAir6.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "Zion 3 PF",
    price: 169,
    colors: [
      {
        code: "gray",
        img: "Icon/NewAir7.jpeg",
      },
      {
        code: "lightgreen",
        img: "Icon/NewAir8.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");





menuItems.forEach((item, index) => {

  item.addEventListener("click", () => {

    //change the current slide
    wrapper.style.transform = `translatex(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;

    });


  });

});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {

    currentProductImg.src = choosenProduct.colors[index].img;

  });

});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    })

    size.style.backgroundColor = "black";
    size.style.color = "white";

  });
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener(("click"), () => {
  payment.style.display = "flex";
});

close.addEventListener(("click"), () => {

  payment.style.display = "none";

});
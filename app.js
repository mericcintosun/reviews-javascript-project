const data = [
  {
    id: 1,
    name: "Susan Smith",
    title: "WEB DEVELOPER",
    desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    img: "person-1.jpeg",
  },
  {
    id: 2,
    name: "Anna Johnson",
    title: "WEB DESIGNER",
    desc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    img: "person-2.jpeg",
  },
  {
    id: 3,
    name: "Peter Jones",
    title: "INTERN",
    desc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    img: "person-4.jpeg",
  },
  {
    id: 4,
    name: "Bill Anderson",
    title: "THE BOSS",
    desc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    img: "person-3.jpeg",
  },
];

const nameElement = document.querySelector(".name");
const titleElement = document.querySelector(".title");
const paragraphElement = document.querySelector(".paragraph");
const imageElement = document.querySelector(".image");

const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const randomButton = document.querySelector(".surprise-button");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = data[currentItem];
  imageElement.src = item.img;
  nameElement.textContent = item.name;
  titleElement.textContent = item.title;
  paragraphElement.textContent = item.desc;
});

function showPerson(person) {
  const item = data[person];
  imageElement.src = item.img;
  nameElement.textContent = item.name;
  titleElement.textContent = item.title;
  paragraphElement.textContent = item.desc;
}

rightButton.addEventListener('click', function () {
  currentItem++;
  if (currentItem > data.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
leftButton.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson(currentItem);
});
randomButton.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * data.length);
  showPerson(currentItem);
});
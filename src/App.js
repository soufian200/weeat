import AppContext from './app/contexts/AppContext';
import Landing from './app/pages/Landing';
import GlobalStyle from './app/styles/GlobalStyle';
import pic1 from "./app/assets/1.jpg";
import pic2 from "./app/assets/2.jpg";
import pic3 from "./app/assets/3.jpg";
import pic4 from "./app/assets/4.jpg";
import pic5 from "./app/assets/5.jpg";
import pic6 from "./app/assets/6.jpg";
import pic7 from "./app/assets/7.jpg";
import pic8 from "./app/assets/8.jpg";

import deliveryman from "./app/assets/delivery-man.png";
import restaurant from "./app/assets/restaurant.png"
import spaguetti from "./app/assets/spaguetti.png"

import c1 from "./app/assets/customers/1.jpg";
import c2 from "./app/assets/customers/2.jpg";
import c3 from "./app/assets/customers/3.jpg";
import c4 from "./app/assets/customers/4.jpg";
import c5 from "./app/assets/customers/5.jpg";
import c6 from "./app/assets/customers/6.jpg";


/**
 * Popular Component
 * */
const cards = [
  {
    id: 1,
    title: "breakfast food",
    img: pic1,
    price: 120,
    rate: 4.8
  },
  {
    id: 2,
    title: "breakfast food 2",
    img: pic2,
    price: 10.99,
    rate: 4.9
  },
  {
    id: 3,
    title: "breakfast food",
    img: pic3,
    price: 120,
    rate: 4.9
  },
  {
    id: 4,
    title: "breakfast food 2",
    img: pic5,
    price: 10.99,
    rate: 5.0
  }
];



/**
 * Menu Component
 * */

const meals = [
  {
    id: 1,
    title: "Delicious Pan Cake",
    description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
    price: 44.79,
    img: pic7
  },
  {
    id: 2,
    title: "KID FRIENDLY RECIPES",
    description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
    price: 47.89,
    img: pic8
  },
  {
    id: 3,
    title: "EASY BAGEL RECIPE",
    description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
    price: 12.41,
    img: pic3
  },
  {
    id: 4,
    title: "CUSTOMIZE YOUR PLAN",
    description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
    price: 38.99,
    img: pic4
  },
  {
    id: 5,
    title: "KID FRIENDLY RECIPES",
    description: ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `,
    price: 24.39,
    img: pic5
  },
  {
    id: 6,
    title: "DETAILED SHOPPING LIST",
    description: `
      Every menu plan includes a detailed shopping list so you know exactly what to
       buy! You can order your groceries online using grocery pick up or
       delivery from your favorite store and you’ll have everything you need to make dinner!
      `,
    price: 144.31,
    img: pic6
  }
];


/**
 * Why us Component
 * */
const whyUsData = [
  {
    id: 1,
    img: deliveryman,
    title: "fast delivery",
    description: `If you are going to use a passage of Lorem Ipsum, 
      you need to be sure there isn't anything embarrassing hidden in 
      the middle of text. If you are going to use a passage of Lorem Ipsum, 
      you need to be sure there`
  },
  {
    id: 2,
    img: restaurant,
    title: "super tasty",
    description: `If you are going to use a passage of Lorem Ipsum, 
      you need to be sure there isn't anything embarrassing hidden in 
      the middle of text. If you are going to use a passage of Lorem Ipsum, 
      you need to be sure there`
  },
  {
    id: 3,
    img: spaguetti,
    title: "quality food",
    description: `If you are going to use a passage of Lorem Ipsum, 
      you need to be sure there isn't anything embarrassing hidden in 
      the middle of text. If you are going to use a passage of Lorem Ipsum, 
      you need to be sure there`
  },
]

/**
 * Testimonials Component
 * */

const feedbacks = [
  {
    id: 1,
    customer: "Jerome Gwin",
    customerPic: c1,
    feedback: `I mostly don't like the idea of being restricted…for example some people such as myself both buy and sell under the same account. If someone is a 'bad egg' that should reflect on their feedback no matter which side of the fence they are on.`
  },
  {
    id: 2,
    customer: "Sharlene Moultry",
    customerPic: c2,
    feedback: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: 3,
    customer: "Noma Scheuerman",
    customerPic: c3,
    feedback: ` Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`
  },
  {
    id: 4,
    customer: "Majorie Gerrard",
    customerPic: c4,
    feedback: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
  },
  {
    id: 5,
    customer: "Brande Goldenberg",
    customerPic: c5,
    feedback: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `
  },
  {
    id: 6,
    customer: "Wayne Mccawley",
    customerPic: c6,
    feedback: `It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
  },
]

function App() {
  document.title = "welcome to weeat";

  return <AppContext.Provider value={{ cards, meals, whyUsData, feedbacks }}>
    <GlobalStyle />
    <Landing />
  </AppContext.Provider>
}

export default App;

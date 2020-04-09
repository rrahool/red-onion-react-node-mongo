const foods = [
  {
    "title":"Healthy Meal Plan",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/9WfyN9M/lunch1.png",
    "catagories":"lunch",
    "price":9.99,
    key:2001
  },
  {
    "title":"Fried Chicken Bento",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/BCRLJ1x/lunch2.png",
    "catagories":"lunch",
    "price":12.99,
    key:2002,
  },
  {
    "title":"Trragon-Rubbed-Salmon",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/pWQgPk5/lunch3.png",
    "catagories":"lunch",
    "price":23.99,
    key:2003,
  },
  {
    "title":"Indian Lunch",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/gm9DCr3/lunch4.png",
    "catagories":"lunch",
    "price":15.99,
    key:2004,
  },
  {
    "title":"Beaf Steak",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/NjGNZzC/lunch5.png",
    "catagories":"lunch",
    "price":7.99,
    key:2005
  },
  {
    "title":"Honey Soy Salmon",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/CtVbgF6/lunch6.png",
    "catagories":"lunch",
    "price":19.99,
    key:2006
  },
  {
    "title":"Salmon with Grapefruits",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/0jzthDn/dinner1.png",
    "catagories":"dinner",
    "price":9.99,
    key:3001
  },
  {
    "title":"Lemony Salmon",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/M7cwD4j/dinner2.png",
    "catagories":"dinner",
    "price":12.99,
    key:3002
  },
  {
    "title":"Pork Tenderiain",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/khLrvxb/dinner3.png",
    "catagories":"dinner",
    "price":23.99,
    key:3003
  },
  {
    "title":"Baked Chicken",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/sWJvtZ2/dinner4.png",
    "catagories":"dinner",
    "price":15.99,
    key:3004
  },
  {
    "title":"Curlic Butter baked salmon",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/gjVxPtV/dinner5.png",
    "catagories":"dinner",
    "price":7.99,
    key:3005
  },
  {
    "title":"French fries with cheese",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/RQK0g1F/dinner6.png",
    "catagories":"dinner",
    "price":19.99,
    key:3006
  },
  {
    "title":"Bagel and cream cheese",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/JjvS3Fg/breakfast1.png",
    "catagories":"breakfast",
    "price":9.99,
    key:1001
  },
  {
    "title":"Breakfast sandwich",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/C2VZ12Q/breakfast2.png",
    "catagories":"breakfast",
    "price":12.99,
    key:1002
  },
  {
    "title":"Baked Chicken",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/N6S5XPv/breakfast3.png",
    "catagories":"breakfast",
    "price":23.99,
    key:1003
  },
  {
    "title":"Eggs Benedict",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/KD3j1mg/breakfast4.png",
    "catagories":"breakfast",
    "price":15.99,
    key:1004
  },
  {
    "title":"Toast fried Egg Butter",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/kDfH0BJ/breakfast5.png",
    "catagories":"breakfast",
    "price":7.99,
    key:1005
  },
  {
    "title":"Full breakfast egg toast",
    "subtitle":"How we dream about our future",
    "description":"Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
    "img":"https://i.ibb.co/sKf71tt/breakfast6.png",
    "catagories":"breakfast",
    "price":19.99,
    key:1006
  },
]

const chooseData = [
  {
    "title":"Fast Delivery",
    "description":"Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    "img":"https://i.ibb.co/NVfsWFk/adult-blur-blurred-background-687824.png",
    "icon":"https://i.ibb.co/1mkF5jq/Group-245.png",
    key:5001
  },
  {
    "title":"A Good Auto Responder",
    "description":"Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    "img":"https://i.ibb.co/G5tsx29/chef-cook-food-33614.png",
    "icon":"https://i.ibb.co/LY92c67/Group-204.png",
    key:5002
  },
  {
    "title":"Home Delivery",
    "description":"Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    "img":"https://i.ibb.co/kSbZ6Qv/architecture-building-city-2047397.png",
    "icon":"https://i.ibb.co/n8WTPRS/Group-1133.png",
    key:5003
  }
]
export {chooseData};
export default foods;

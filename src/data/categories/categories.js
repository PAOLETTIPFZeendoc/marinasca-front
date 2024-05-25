import { faWineBottle, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoBagel from "../../assets/images/bagel.png";
import logoSalade from "../../assets/images/salade.png";
import logoVin from "../../assets/images/vin.png";
import logoBoissons from "../../assets/images/boissons.png";
const logoSmall = "20px";
export const categories = [
  {
    name: "Suggestions",
    title: "Nos suggestions du jour",
    link: "/",
    slug: "suggestions",
    origin: "restaurant",
  },
  {
    name: "Entrées",
    title: "Nos entrées",
    link: "/products/entrees",
    slug: "entrees",
    origin: "restaurant",
  },
  {
    name: "Burgers",
    title: "Nos burgers",
    link: "/products/burgers",
    slug: "burgers",
    origin: "restaurant",
  },
  {
    name: "Nos Plats",
    title: "Nos Plats",
    link: "/products/plats",
    slug: "plats",
    origin: "restaurant",
  },
  {
    name: "Gnocchi et Pâtes",
    title: "Gnocchi et Pâtes",
    link: "/products/gnocchi-et-pates",
    slug: "gnocchi-et-pates",
    origin: "restaurant",
  },
  {
    name: "Nos Pizza",
    title: "Pizza",
    link: "/products/pizza",
    slug: "pizza",
    origin: "restaurant|bar",
    subCategory: [
      {
        name: "Base Tomate",
        slug: "tomate",
      },
      {
        name: "Base Crème Fraîche",
        slug: "cr-fraiche",
      },
    ],
  },
  {
    name: "Menu-Enfant",
    title: "Menu-Enfant",
    link: "/products/menu-enfant",
    slug: "menu-enfant",
    origin: "restaurant",
  },
  {
    name: "Nos Desserts",
    title: "Desserts",
    link: "/products/desserts",
    slug: "desserts",
    origin: "restaurant",
  },
  {
    name: "Nos Glaces",
    title: "Nos Glaces",
    link: "/products/glaces",
    slug: "glaces",
    origin: "restaurant|bar",
    subCategory: [
      {
        name: "Coupes",
        slug: "glaces-coupes",
      },
      {
        name: "Traditionelles",
        slug: "glaces-traditionelles",
      },
      {
        name: "Alcoolisées",
        slug: "glaces-alcoolisees",
      },
      {
        name: "Créations",
        slug: "glaces-creations",
      },
      {
        name: "Milk-Shakes",
        slug: "glaces-milk-shakes",
      },
    ],
  },
  {
    name: "Nos Snacks",
    title: "Snacks",
    link: "/products/snacks",
    slug: "snacks",
    origin: "bar",
  },
  {
    name: "Nos Vins",
    title: "Nos Vins",
    link: "/products/cave",
    slug: "cave",
    origin: "restaurant|bar",
  },
  {
    name: "Nos Champagnes",
    title: "Nos Champagnes",
    link: "/products/champagne",
    slug: "champagne",
    origin: "restaurant|bar",
  },
  {
    name: "Softs et boissons chaudes",
    title: "Softs et boissons chaudes",
    link: "/products/softs",
    slug: "softs",
    origin: "bar",
    subCategory: [
      {
        name: "Boissons Chaudes",
        slug: "boissons-chaudes",
      },
      {
        name: "Sodas et eaux",
        slug: "sodas-et-eaux",
      },
    ],
  },
  {
    name: "Alcools",
    title: "Alcools",
    link: "/products/alcools",
    slug: "alcools",
    origin: "bar",
    subCategory: [
      {
        name: "Apéritifs",
        slug: "aperitifs",
      },
      {
        name: "Biéres",
        slug: "bieres",
      },
      {
        name: "Whiskies",
        slug: "whiskies",
      },
      {
        name: "Liqueurs et Digestifs",
        slug: "digestifs",
      },
    ],
  },
  {
    name: "Cocktails",
    title: "Cocktails",
    link: "/products/cocktails",
    slug: "cocktails",
    origin: "bar",
    subCategory: [
      {
        name: "Avec Alcool",
        slug: "cocktails-avec-alcool",
      },
      {
        name: "Sans Alcool",
        slug: "cocktails-sans-alcool",
      },
    ],
  },

  // {
  //   name: "Vitrine Salée",
  //   // icon: <FontAwesomeIcon icon={faSandwich} size="2x" />,
  //   link: "/products/la-vitrine-salee",
  //   slug: "la-vitrine-salee",
  //   subCategory: [
  //     { name: "Panini", slug: "panini" },
  //     { name: "Croques", slug: "croques" },
  //     { name: "Hot-dog", slug: "hotdog" },
  //     { name: "Bagels", slug: "bagels" },
  //   ],
  // },
  // {
  //   name: "Vitrine Sucrée",
  //   // icon: <FontAwesomeIcon icon={faCookie} size="2x" />,
  //   link: "/products/la-vitrine-sucree",
  //   slug: "la-vitrine-sucree",
  // },
];

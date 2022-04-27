import renderToDom from "./renderToDom.js";
import pets from "./data.js";
import petModal from "./modal.js";
import filterButtons from "./filter.js";
import petsOnDom from "./petCards.js";
import eventListeners from "./eventListener.js"

// rendering to the dom

// My HTML Component Functions (Nothing is Global)

//Initializing Application
const startUp = () => {
  petModal();
  filterButtons();
  petsOnDom(pets);
  eventListeners();
};

startUp();

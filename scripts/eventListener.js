import renderToDom from './renderToDom.js';
import pets from './data.js';
import petsOnDom from './petCards.js';

const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector("#addPet"));

  document.querySelector("#btnGroup").addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      petsOnDom(pets);
    } else if (e.target.id === "btnGroup".toLowerCase()) {
      petsOnDom(pets);
    } else if (e.target.id === "favorite") {
      const favs = pets.filter((taco) => taco.favorite === true);
      petsOnDom(favs);
    } else if (e.target.id) {
      const topic = pets.filter(
        (taco) => taco.type.toLowerCase() === e.target.id
      );
      console.log(e.target.id);
      petsOnDom(topic);
    }
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    // ALWAYS PREVENT DEFAULT!!
    e.preventDefault(); // this goes in EVERY form submit to prevent page reload
    // grab the values from the form inputs and create an object

    const newPetObj = {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#about").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imgUrl").value,
      favorite: document.querySelector("#favorite").checked,
    };
    // push that object to the data array
    pets.unshift(newPetObj);
    // rerender cards using the cardsOnDom function and pass it the updated data array
    petsOnDom(pets);
    // Close modal and reset form
    formModal.hide();
    form.reset();
  });

  //Adding Buttons to the cards
  document.querySelector("#adoptContainer").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, name] = e.target.id.split("--");
      const index = pets.findIndex((taco) => taco.name === name);

      if (e.target.id.includes("adopt")) {
        let result = confirm("Are you ready to take on this responsibility?");
        if (confirm !== true) {
          pets.splice(index, 1);
          petsOnDom(pets);
        }
      }
      if (e.target.id.includes("more")) {
        console.log(`you clicked on a ${index.color}`);
      }
      if (e.target.id.includes("remove")) {
        console.log(`You're trying to delete ${index}`);
        pets.splice(index, 1);
        petsOnDom(pets);
      }
    }
  });
};

export default eventListeners;

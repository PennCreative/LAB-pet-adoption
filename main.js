const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "Cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    favorite: false,
  },
  {
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "Dino",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7gFTwWnpsh5Higt49cnrPzVV2XaealA-GVBZswahODo679UBc_AIi0qAfvSuKOBLCU0&usqp=CAU",
    favorite: false,
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "Dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
    favorite: false,
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "Dog",
    imageUrl: "https://placedog.net/200",
    favorite: false,
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "Cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
    favorite: false,
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "Dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
    favorite: false,
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "Cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
    favorite: false,
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "Dino",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM87klS3OtmBi8tubHb1FeqIf_b9HjBI5Xw&usqp=CAU",
    favorite: false,
  },
  {
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "Cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
    favorite: false,
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "Cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
    favorite: false,
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "Dino",
    imageUrl:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NyZXRhY2VvdXMtYW5pbWFscy00YS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ==",
    favorite: false,
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "Dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
    favorite: false,
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "Dog",
    imageUrl:
      "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
    favorite: false,
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "Cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
    favorite: false,
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "Cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
    favorite: false,
  },
  {
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "Dino",
    imageUrl:
      "https://www.screen-idle.com/wp-content/uploads/2020/07/camp-dino-pixa-1-678x381.jpg",
    favorite: false,
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "Cat",
    imageUrl: "http://placekitten.com/500",
    favorite: false,
  },
  {
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "Dino",
    imageUrl:
      "https://www.si.edu/sites/default/files/styles/social_media/public/newsdesk/press_releases/thumbnail_detail.jpg?itok=C36IoUOR",
    favorite: false,
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "Dog",
    imageUrl: "https://placedog.net/200",
    favorite: false,
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "Cat",
    imageUrl: "http://placekitten.com/500",
    favorite: false,
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "Dino",
    imageUrl: "http://placekitten.com/500",
    favorite: false,
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "Cat",
    imageUrl: "http://placekitten.com/200",
    favorite: false,
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "Dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
    favorite: false,
  },
  {
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "Dog",
    imageUrl: "https://placedog.net/200",
    favorite: false,
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "Cat",
    imageUrl: "http://placekitten.com/200",
    favorite: false,
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "Dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
    favorite: false,
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "Dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
    favorite: false,
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "Cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
    favorite: false,
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "Cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
    favorite: false,
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "Dino",
    imageUrl: "http://placekitten.com/250",
    favorite: false,
  },
];

// rendering to the dom
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// My HTML Component Functions (Nothing is Global)
const petModal = () => {
  const domString = `
    <!-- Button trigger modal -->
    <nav>
    <h1 id="mainH1" class="mainHead">Adopt-R-Us</h1>
    <button type="button" class="adoptBtn btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#addPet">
    List Your Pet
    </button>
    </nav>

    <!-- Modal -->

    <div class="modal fade" id="addPet" tabindex="-1" aria-labelledby="addPet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">List Today</h5>
            
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">

          <form>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="img" id="imgUrl" aria-label="img" required>
            <label for="img">Image Link</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
            <label for="name">Pet Name</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
            <label for="color">Color</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="About" id="about" aria-label="about" required>
            <label for="about">about</label>
          </div>
      
          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="type" aria-label="type" required>
              <option value="">Select a Breed</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="dino">Dino</option>
              <option value="other">Other</option>
            </select>
            <label for="type">type</label>
          </div>
          
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="favorite">
            <label class="form-check-label" for="favorite">
              Favorite
            </label>
          </div>

          <button 
            type="submit" 
            class="btn btn-success"> 
          
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  `;
  renderToDom("#createContainer", domString);
};

const filterButtons = () => {
  let domString = `
  <div class="buttons">
  <button class="btn btn-outline-dark btn-lg buttonRow" id="cat">Cat</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="dog">Dogs</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="dino">Dinos</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="other">Others</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="favorite">Favorites</button>
  <button class="btn btn-outline-dark btn-lg buttonRow" id="clear">Clear</button>
</div>
  `;
  renderToDom("#btnGroup", domString);
};

const petsOnDom = (array) => {
  let domString = "";

  for (const box of array) {
    domString += `
    <div class="${box.type}Card card mb-3" style="">
  <div class="${box.type}Header card-header"><h5>${box.name} the ${box.color} ${box.type}</h5></div>
  <div class="text-center">
  <img src="${box.imageUrl}" class="petImg rounded" alt="...">
</div>

  <div class="card-body text-success">
    <h5 class="card-title">About Me</h5>
    <p class="card-text">${box.specialSkill}</p>
  </div>

  <div class="card-footer">
  <button type="button" id="adopt--${box.name}" class="btn btn-outline-primary">Adopt</button>
  <button type="button" id="more--${box.name}" class="btn btn-outline-primary">More</button>
  <button type="button" id="remove--${box.name}" class="btn btn-outline-danger">X</button>
  </div>
</div>`;
  }
  renderToDom("#adoptContainer", domString);
};

// Adding Event Listeners
const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector("#addPet"));

  document.querySelector("#btnGroup").addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      petsOnDom(pets);
    } else if (e.target.id === "btnGroup") {
      petsOnDom(pets);
    } else if (e.target.id === "favorite") {
      const favs = pets.filter((taco) => taco.favorite === true);
      petsOnDom(favs);
    } else if (e.target.id) {
      const topic = pets.filter((taco) => taco.type === e.target.id);
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
    console.log(pets);
  });
};
console.log(pets);
//Adding Buttons to the cards
document.querySelector("#adoptContainer").addEventListener("click", (e) => {
  if (e.target.id) {
    const [method, name] = e.target.id.split("--");
    console.log(name);
    const index = pets.findIndex((taco) => taco.name === name);

    if (e.target.id.includes("adopt")) {
      console.log(`You're trying to adopt ${index}`);
      let result = console.log("Are you ready to take on this responsibility?");
      if (confirm === true) {
        pets.pop(index);
        petsOnDom(pets);
      }
    }
    if (e.target.id.includes("more")) {
      console.log(`you clicked on a ${index}.color`);
    }
    if (e.target.id.includes("remove")) {
      console.log(`You're trying to delete ${index}`);
      // confirm("Are You Sure");
      pets.splice(index.length - 1, 1);
      petsOnDom(pets);
    }
  }
});

//Initializing Application
const startUp = () => {
  petModal();
  filterButtons();
  petsOnDom(pets);
  eventListeners();
};

startUp();

const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7gFTwWnpsh5Higt49cnrPzVV2XaealA-GVBZswahODo679UBc_AIi0qAfvSuKOBLCU0&usqp=CAU",
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "https://placedog.net/200",
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM87klS3OtmBi8tubHb1FeqIf_b9HjBI5Xw&usqp=CAU",
  },
  {
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NyZXRhY2VvdXMtYW5pbWFscy00YS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ==",
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://www.screen-idle.com/wp-content/uploads/2020/07/camp-dino-pixa-1-678x381.jpg",
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://placekitten.com/500",
  },
  {
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://www.si.edu/sites/default/files/styles/social_media/public/newsdesk/press_releases/thumbnail_detail.jpg?itok=C36IoUOR",
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "https://placedog.net/200",
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "http://placekitten.com/500",
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "http://placekitten.com/500",
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "http://placekitten.com/200",
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://placedog.net/200",
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "http://placekitten.com/200",
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "http://placekitten.com/250",
  },
];

// rendering to the dom
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// My HTML Component Functions (Nothing is Global)
const filterButtons = () => {
  let domString = `
  <div class="d-flex flex-wrap justify-content-between my-3">
  <button class="btn btn-secondary btn-lg buttonRow" id="cat">Cat</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dog">Dogs</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dino">Dinos</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="other">Others</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="favorite">Favorites</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="clear">Clear</button>
</div>
  `;
  renderToDom("#btnGroup", domString);
};

const petsOnDom = (array) => {
  let domString = "";

  for (const box of array) {
    domString += `
    <div class="card" style="width: 18rem;">
    <ul>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-heart"></i>
    </ul>
  <h5 class="card-title">${box.name}</h5>
  <img src="${box.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${box.specialSkill}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${box.color} ${box.type}</li>
  </ul>
  <div class="buttonBody card-body">
  <button type="button" id="adopt--${box.name}" class="btn btn-primary">ADOPT!</button>
  <button type="button" id="more--${box.name}" class="btn btn-info">More</button>
  <button type="button" id="remove--${box.name}" class="btn btn-danger">X</button>
  </div>
</div>`;
  }
  renderToDom("#adoptContainer", domString);
};

// Adding Event Listeners
const eventListeners = () => {
  document.querySelector("#btnGroup").addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      petsOnDom(pets);
    } else if (e.target.id === 'btnGroup') {
      petsOnDom(pets);
    }else if (e.target.id === "favorite") {
      const favs = pets.filter((taco) => taco.favorite === true);
      petsOnDom(favs);
    } else if (e.target.id) {
      const topic = pets.filter((taco) => taco.type === e.target.id);
      console.log(e.target.id);
      petsOnDom(topic);
    } 
  });

  //Adding Buttons to the cards
  document.querySelector("#adoptContainer").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, name] = e.target.id.split("--");

      const index = pets.findIndex((taco) => taco.name === name);

      if (e.target.id.includes("adopt")) {
        console.log(`You're trying to adopt ${index}`);
        let result = confirm("Are you ready to take on this responsibility?");
        if (confirm === true) {
          pets.pop(index)
          petsOnDom(pets)
        }
      }
      if (e.target.id.includes("more")) {
        console.log("more of this type");
      }
      if (e.target.id.includes("remove")) {
        console.log("delete this animal");
        confirm("Are You Sure");
        pets.splice(index, 1);
        petsOnDom(pets);
      }
    }
  });
};
//Initializing Application
const startUp = () => {
  filterButtons();
  petsOnDom(pets);
  eventListeners();
};

startUp();

const adoptContainer = document.querySelector("#adoptContainer");
const selectDogs = document.querySelector("#dogBtn");
const selectDinos = document.querySelector("#dinoBtn");
const selectCats = document.querySelector("#catBtn");
const selectAll = document.querySelector("#allBtn");

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

let domString = "";

// for (const box of pets) {
//   domString += `<div class="card" style="width: 18rem;">
//     <h5 class="card-title">${box.name}</h5>
//     <img src="${box.imageUrl}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <p class="card-text">${box.specialSkill}</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">${box.color} ${box.type}</li>
//     </ul>
//     <div class="buttonBody card-body">
//     <button type="button" id="adopt" class="btn btn-primary">ADOPT!</button>
//     <button type="button" id="more" class="btn btn-info">More</button>
//     <button type="button" id="remove" class="btn btn-danger">X</button>
//     </div>
//   </div>`;
// }

// adoptContainer.innerHTML = domString;

// for (const animalType of pets) {
// const dinoArray = []
//   if (animalType.type === 'dino') {
//     dinoArray.push(animalType)
//   } else {
//     console.log(`Nope. This one is just a dumb ole ${animalType.type}`)
//   }

// }

const filterAnimal = (e) => {
  const filterText = e.target.id
  console.log(filterText)

  const result = filterText === "allBtn" ? pets : pets.filter(pet => pet.type.toLowerCase() === filterText)
  console.log(result)

  let domString = ''
  result.forEach((pet) => {
    domString += `<div class="card" style="width: 18rem;">
    <h5 class="card-title">${pet.name}</h5>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${pet.specialSkill}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${pet.color} ${pet.type}</li>
    </ul>
    <div class="buttonBody card-body">
    <button type="button" id="adopt" class="btn btn-primary">ADOPT!</button>
    <button type="button" id="more" class="btn btn-info">More</button>
    <button type="button" id="remove" class="btn btn-danger">X</button>
    </div>
  </div>`;
  })
  adoptContainer.innerHTML = domString
}

// const adoptIt = document.querySelector("#adopt");
// const more = document.querySelector("#more");
// const removeIt = document.querySelector("#remove");

//ternary statement

// selectDogs.addEventListener("click", (e) => {
//   console.log(`You click 'Dogs'`);
//   if (selectDogs.innerHTML === "Dogs") {
//     selectDogs.innerHTML = "Back";
//   } else {
//     selectDogs.innerHTML = "Dogs";
//   }
// });
// selectCats.addEventListener("click", (e) => {
//   console.log(`You click 'Cats'`);
//   if (selectCats.innerHTML === "Cats") {
//     selectCats.innerHTML = "Back";
//   } else {
//     selectCats.innerHTML = "Cats";
//   }
// });
// selectDinos.addEventListener("click", (e) => {
//   console.log(`You click 'Dinos'`);
//   if (selectDinos.innerHTML === "Dinos") {
//     selectDinos.innerHTML = "Back";
//   } else {
//     selectDinos.innerHTML = "Dinos";
//   }
// });
// adoptIt.addEventListener("click", (e) => {
//   console.log(`You click 'Adopt'`);
//   if (adoptIt.innerHTML === "ADOPT!") {
//     adoptIt.innerHTML = "YAY!";
//   } else {
//     adoptIt.innerHTML = "ADOPT!";
//   }
// });
// more.addEventListener("click", (e) => {
//   console.log(`You wanna see more`);
// });
// removeIt.addEventListener("click", (e) => {
//   console.log(`You're about to delete this post`);
// });


selectCats.addEventListener('click', filterAnimal)
selectDogs.addEventListener('click', filterAnimal)
selectDinos.addEventListener('click', filterAnimal)
selectAll.addEventListener('click', filterAnimal)

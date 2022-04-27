import renderToDom from './renderToDom.js';

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

export default petsOnDom;

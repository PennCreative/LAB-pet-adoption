import renderToDom from './renderToDom.js'
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

export default filterButtons;

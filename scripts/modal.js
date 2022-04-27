import renderToDom from './renderToDom.js'
const petModal = () => {
  let domString = `
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
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Dino">Dino</option>
              <option value="Other">Other</option>
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

export default petModal;

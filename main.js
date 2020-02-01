
// creat an array to put the schools in

const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const studentName = [];

// create a printTodom function for the form and cards

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};


const createForm = () => {
  event.preventDefault();
  const formString = `
  <form class="form-inline">
  <div class="form-group mb-2">
   
    <div class="col-12">
        <label for="staticEmail" class="sr-only">Enter Name</label>
        <input type="text" readonly class="form-control-plaintext text-center" id="staticEmail" value="Enter First Year's Name">
    </div>

  
      
      <div class="col-12 d-flex justify-content-center"">
          <label for="inputPassword2" class="sr-only text center">Your Name</label>
         <input id= "studentName" type="studentName" class="form-control" placeholder="Your Name Here">
      </div>
      <br>
      
      <div class="col-12 d-flex justify-content-center"">
        <button type="button" id="sortButton" class="btn btn-primary">Sort!</button>
      </div>
    </div>
  </div>
</form>
    
       
    `;
  printToDom('form', formString);
  randomize();
  document.getElementById('jumbotronBtn').style.display = "none";

};


const formButton = (e) => {
  document.getElementById('jumbotronBtn').addEventListener('click', createForm)
};



formButton();


const makeCard = (arr) => {
  const name = document.getElementById('studentName').value
  let randomHouse = houseNames[Math.floor(Math.random() * houseNames.length)];
  let cardPrint = `
        <div class="card-body text-center col-m-4 d-inline-flex" style="width: 30%;">  
        <div class="card-body">
        <img class="card-img-top" src="img/logo2.png" alt=>          
            <h2 class="card-title">${name}</h2>
            <p class="card-text text-center">${randomHouse}</p>
            <button type= "submit" class= "expel">Expel</button>
        </div>
        </div>
        `
  printToDom('houses', cardPrint)
  removeCard();
};


//event listener for form sort button

const randomize = (e) => {
  document.getElementById('sortButton').addEventListener('click', makeCard)
}



const removeCard = () => {
  const cardsToRemove = document.getElementsByClassName('expel');
  for (let i = 0; i < cardsToRemove.length; i++) {
    const deleteCard = cardsToRemove[i];
    deleteCard.addEventListener('click', (e) => {
      const btnClicked = e.target;
      const cardsToRemove = btnClicked.parentNode.parentNode;
      cardsToRemove.remove();
    })
  }
};

//expel Student Event Listener
const expelStudent = () => {
  $(".expel").on('click', removeCard);
}
expelStudent();
const myForm = document.querySelector(".add-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

const button = document.querySelector("#add-button");

const tbody = document.querySelector("#tbd");

button.onclick = function(){
  let newTitle = document.createElement("td");
  newTitle.innerHTML = titleInput.value;
  //console.log(titleInput.value);
  
  let newAuthor = document.createElement("td");
  newAuthor.innerHTML = authorInput.value;

  let newISBN = document.createElement("td");
  newISBN.innerHTML = isbnInput.value;

  let newRow = document.createElement("tr");
  tbody.appendChild(newRow);

  newRow.appendChild(newTitle);
  newRow.appendChild(newAuthor);
  newRow.appendChild(newISBN);

  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
}



// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e){
//   const li = document.creatElement("li");
//   li.appendChild(document.creatTextNode("${titleInput.value}"));

//   userList.appendChild(li);
// }
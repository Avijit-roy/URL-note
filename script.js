let sites = [];
let inputField = document.getElementById("inpField");
let inputNameField = document.getElementById("inpNameField");
let inputButton = document.getElementById("buttonEli");
let counter = 0;

function inputNameClear() {
  inputNameField.value = "";
}

function inputLinkClear() {
  inputField.value = "";
}

inputButton.addEventListener("click", function () {
  console.log("button clicked");

  let url = inputField.value;
  let urlName = inputNameField.value || "unnamed";

  if (url != "") {
    sites.push({ url: url, name: urlName });
    addListItem(url, urlName);
  } else {
    showAlert();
  }

  inputField.value = "";
  inputNameField.value = "";
  console.log(sites);
});

function addListItem(url, urlName) {
  const listItems = document.getElementById("unorderList");
  const listHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <a href="${url}" target="_blank" title="${url}">${urlName}</a>
      <span class="input-group-text" id="clearField${counter}" onclick="deleteItem(${counter})">
        <i class="fa-sharp-duotone fa-solid fa-circle-xmark" style="cursor: pointer;"></i>
      </span>
    </li>`;
  listItems.innerHTML += listHTML;
  counter += 1;
}

function showAlert() {
  const alertPlaceholder = document.getElementById("alertPlaceholder");
  const alertHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>NO INPUT!</strong> Please enter a URL in this field.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  alertPlaceholder.innerHTML = alertHTML;
}

function deleteItem(id) {
  sites.splice(id, 1);
  document.getElementById(`clearField${id}`).parentElement.remove();
  console.log("Deleted item with id:", id);
  console.log(sites);
}

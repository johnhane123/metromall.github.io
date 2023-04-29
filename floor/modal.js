var modal = "";

function openModal(target) {
  modal = document.getElementById(target);
  modal.style.display = "block";
}

function closeModal(target) {
  modal = document.getElementById(target);
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
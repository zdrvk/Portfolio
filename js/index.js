// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// data fetch

fetch(`data/data.json`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    inputData(data);
  });

function inputData(projectData) {
  //   const projectInfoTarget = document.querySelector(`.projectInfoTarget`);

  //   projectData.projects.forEach((item) => {
  //     projectInfoTarget.textContent += item.name;
  //   });
  // }
  const projectInfoTarget = document.querySelector(`.onlyProjects`);

  projectData.projects.forEach((item) => {
    projectInfoTarget.innerHTML +=
      `<div class="project">
    <img
      src="` +
      item.img +
      `" class="projectImage"/>`;
  });
}

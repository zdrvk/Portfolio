// data fetch
fetch(`data/data.json`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    inputData(data);
  });
function inputData(data) {
  const biscuitTarget = document.querySelector(`.projects`);

  data.projects.forEach((item, index) => {
    biscuitTarget.innerHTML += `<div class="project"> <br />
    <img src="${item.img}" alt="a screenshot of the project" class="projectImage"/> <br /> 
      <div class="info"> <br /> 
      <h1 class="projectTitle">${item.name}</h1> <br /> 
      <p class="info">${item.desc}</p> <br /> 
      <button id="myBtn${index}">See more...</button> <br /> 
      </div> <br /> 
      <div id="myModal${index}" class="modal"> <br /> 
      <span class="close">&times;</span> <br /> 
      <div class="modal-content${index}"> <br /> 
      <img
    src="${item.img2}"
    alt="another image of the project"
    class="modalImage"
    /> <br /> <p class="moreInfoTarget">${item.desc2}</p> <br /> 
    </div> <br /> 
    </div> <br /> 
    </div> <br />`;

    // Get the modal
    var modal = document.getElementById(`myModal${index}`);

    // Get the button that opens the modal
    var btn = document.getElementById(`myBtn${index}`);

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
  });
}

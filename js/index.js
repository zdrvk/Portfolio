// data fetch
fetch(`data/data.json`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    inputData(data);
  });
function inputData(data) {
  const dataTarget = document.querySelector(`.projects`);

  data.projects.forEach((item, index) => {
    dataTarget.insertAdjacentHTML(
      "afterend",
      `<div class="project"> <br />
    <img src="${item.img}" alt="a screenshot of the project" class="projectImage"/> <br /> 
      <div class="info"> <br /> 
      <h1 class="projectTitle">${item.name}</h1> <br /> 
      <p class="info">${item.desc}</p> <br /> 
      <button class="modalButton" id="myBtn${index}">See more...</button> <br /> 
      </div> <br /> 
      <div id="myModal${index}" class="modal"> <br /> 
      <div class="modalContent" id="modal-content${index}"> <br /> 
      <span class="close"></span> <br /> 
      <img
    src="${item.img2}"
    alt="another image of the project"
    class="modalImage"
    /> <br /> <p class="moreInfoTarget">${item.desc2}</p> <br /> 
    </div> <br /> 
    </div> <br /> 
    </div> <br />`
    );

    // Get the modal
    let modal = document.querySelector(`#myModal${index}`);
    // Get the button that opens the modal
    let btn = document.getElementById(`myBtn${index}`);
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
    span.addEventListener("click", () => {
      modal.style.display = "none";
    });
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
}

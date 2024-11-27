document
  .getElementById("changetextbutton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myparagraph");
    paragraph.textContent = "the paragraph is changed";
  });

document
  .getElementById("highlightfirstcity")
  .addEventListener("click", function () {
    let citieslist = document.getElementById("citieslist");
    citieslist.firstElementChild.classList.add("highlight");
  });

document.getElementById("changeorder").addEventListener("click", function () {
  let coffeetype = document.getElementById("coffeetype");
  coffeetype.textContent = "espresso";
  coffeetype.style.backgroundColor = "brown";
  coffeetype.style.padding = "5px";
});

document.getElementById("addnewitem").addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "eggs";
  document.getElementById("shoppinglist").appendChild(newitem);
});

document
  .getElementById("removelasttask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("tasklist");
    tasklist.lastElementChild.remove();
  });

document
  .getElementById("clickmebutton")
  .addEventListener("dblclick", function () {
    alert("chaicode");
  });

document.getElementById("tealist").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaitem")) {
    alert("you selected" + event.target.textContent);
  }
});

document
  .getElementById("feedbackform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackinput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackdisplay"
    ).textContent = `feedback is: ${feedback}`;
  });

document.addEventListener("domcontentloaded", function () {
  document.getElementById("domstatus").textContent = "dom fully loaded";
});

document
  .getElementById("togglehighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptiontext");
    descriptionText.classList.toggle("highlight");
  });

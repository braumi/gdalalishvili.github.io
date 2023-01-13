// loop animation

gsap.fromTo(
  ".element",
  { x: 0 },
  { x: -1655, duration: 10, ease: Linear.easeNone, repeat: -1 }
);

// mouse tracking
const liItems = [...document.querySelectorAll(".selected-list li")];

liItems.forEach((li) => {
  li.addEventListener("mouseleave", () => {
    li.classList.remove("hovering");
  });
  li.addEventListener("mouseenter", () => {
    li.classList.add("hovering");
  });

  const myDiv = li.querySelector(".img");
  const move = (e) => {
    const hoveredli = e.target.closest("li.hovering");
    try {
      var rect = hoveredli.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top; 
    } catch (e) {}

    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
  };

  li.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 850) {
      move(e);
    }
  });
  //For touch
  li.addEventListener("touchmove", (e) => {
    if (window.innerWidth > 850) {
      move(e);
    }
  });
});

const menu = document.querySelector(".menu");
const close_menu = document.querySelector(".close-menu");
const top_menu_ul = document.querySelector(".top-menu ul");

menu.addEventListener('click',() => {
  close_menu.classList.add("active")
  top_menu_ul.classList.add("active")
}) 

close_menu.addEventListener('click',() => {
  close_menu.classList.remove("active")
  top_menu_ul.classList.remove("active")
}) 

const menu_selector = [...document.querySelectorAll(".top-menu ul")];

menu_selector.forEach((li) => {
  li.addEventListener('click',() =>{
    close_menu.classList.remove("active")
    top_menu_ul.classList.remove("active")
  })
  
}) 

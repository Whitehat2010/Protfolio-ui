let Default_Colour = true;
function color() {
   //white in Default
  document
    .querySelector("#color_changer")
    .addEventListener("click", function Color() {
      //white to black
      if (Default_Colour) {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("#whole").style.color = "white";
        document.querySelectorAll(".navbar ul li a").forEach(function (el) {
          el.style.color = "white";
        });
        document.querySelector("#color_changer i").style.color = "white";
         document.querySelector("#color_changer i").className =
           "fa-solid fa-sun";
        document.querySelectorAll("main *").forEach(function (fl) {
          fl.style.color = "white"; // or "white" for dark mode
        });
        document.querySelector(".bars").style.color = "white";
        
        document.querySelector("i").style.color = "white";
        document.querySelector("button").style.border = " 2px solid white";
        document.querySelector("#butt_about button").style.backgroundImage =
          "linear-gradient(45deg,#00000070,#ffffffff)";
        document.querySelector("#butt_contact button").style.backgroundImage =
          "linear-gradient(45deg,#00000070,#ffffffff)";
        document.querySelector("header").style.backgroundColor = "black";
        document.querySelector(".words #Sachin").style.color =
          "rgb(35, 227, 144)";
        document.querySelector(".words #FD").style.color = "rgb(35, 227, 144)";
        document.querySelector(
          ".container-skill-1 #html-butt"
        ).style.backgroundColor = "red";
        document.querySelector(
          ".container-skill-1 #css-butt"
        ).style.backgroundColor = "blue";
        document.querySelector(
          ".container-skill-1 #js-butt"
        ).style.backgroundColor = "yellow";
        
        
        

        Default_Colour = false;
      }
      //black to white
      else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#whole").style.color = "black";
        document.querySelectorAll(".navbar ul li a").forEach(function (el) {
          el.style.color = "black";
        });
        document.querySelector("#color_changer i").className =
          "fa-solid fa-moon";
        document.querySelector("#color_changer i").style.color = "black";
        document.querySelector("button").style.border = " 2px solid black";
        document.querySelectorAll("main *").forEach(function (fl) {
          fl.style.color = "black"; // or "white" for dark mode
        });
        document.querySelector("#butt_about button").style.backgroundImage =
          "linear-gradient(45deg,#ffffff00,#00000070)";
        document.querySelector("#butt_contact button").style.backgroundImage =
          "linear-gradient(45deg,#ffffff00,#00000070)";
        document.querySelector("header").style.backgroundColor = "white";
        document.querySelector(".words #Sachin").style.color =
          "rgb(35, 227, 144)";
        document.querySelector(".words #FD").style.color = "rgb(35, 227, 144)";
        document.querySelector(
          ".container-skill-1 #html-butt"
        ).style.backgroundColor = "red";
        document.querySelector(
          ".container-skill-1 #css-butt"
        ).style.backgroundColor = "blue";
        document.querySelector(
          ".container-skill-1 #js-butt"
        ).style.backgroundColor = "yellow";
        document.querySelector(".bars").style.color = "black";
        Default_Colour = true;
      }
    });
}
color(); //Calling Color function


function whole_bar() {
  document
    .querySelector(".bars")
    .addEventListener("click", function bar() {
      document.querySelector("#aside-nav").style.display = "block";
      console.log("clickd");
    });
}
whole_bar();

function whole_cross() {
  document
    .querySelector(".cross")
    .addEventListener("click", function cross() {
      document.querySelector("#aside-nav").style.display = "none";
      console.log("clickd cross");
    });
}
whole_cross();
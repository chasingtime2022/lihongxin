const hard = [
  {
    title: "",
    img_url: "./assets/hard/biw.jpg",
    content: "",
    caption: "Body in White",
  },
  {
    title: "",
    img_url: "./assets/hard/robot.jpg",
    content: "",
    caption: "Robot Technology",
  },
  {
    title: "",
    img_url: "./assets/hard/automation.jpg",
    content: "",
    caption: "Automation Technology",
  },
];

document.querySelector("#biw .figurex").src = hard[0].img_url;
document.querySelector("#biw .description").innerHTML = hard[0].caption;

document.querySelector("#robot .figurex").src = hard[1].img_url;
document.querySelector("#robot .description").innerHTML = hard[1].caption;

document.querySelector("#automation .figurex").src = hard[2].img_url;
document.querySelector("#automation .description").innerHTML = hard[2].caption;

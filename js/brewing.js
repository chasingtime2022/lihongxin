const brewing = [
  {
    title: "",
    img_url: "./assets/brewing/mash.jpg",
    content: "",
    caption: "Mash Sugar",
  },
  {
    title: "",
    img_url: "./assets/brewing/ferment.jpg",
    content: "",
    caption: "Fermentation",
  },
  {
    title: "",
    img_url: "./assets/brewing/bottle.jpg",
    content: "",
    caption: "Bottling",
  },
];

document.querySelector("#mash .figurexx").src = brewing[0].img_url;
document.querySelector("#mash .caption").innerHTML = brewing[0].caption;

document.querySelector("#ferment .figurexx").src = brewing[1].img_url;
document.querySelector("#ferment .caption").innerHTML = brewing[1].caption;

document.querySelector("#bottle .figurexx").src = brewing[2].img_url;
document.querySelector("#bottle .caption").innerHTML = brewing[2].caption;

const sports = [
  {
    title: "",
    img_url: "./assets/ultra/gaoligong.jpg",
    content: "",
    caption: "Gaoligong Ultra Trail Running 50Km",
  },
  {
    title: "",
    img_url: "./assets/ultra/tnf100.jpg",
    content: "",
    caption: "TNF100 50Km",
  },
  {
    title: "",
    img_url: "./assets/ultra/kailas.jpg",
    content: "",
    caption: "Mogan Ultra Trail Running 50Km",
  },
];

document.querySelector("#crossfit .figurexx").src = sports[0].img_url;
document.querySelector("#crossfit .caption").innerHTML = sports[0].caption;

document.querySelector("#tnf100 .figurexx").src = sports[1].img_url;
document.querySelector("#tnf100 .caption").innerHTML = sports[1].caption;

document.querySelector("#kailas .figurexx").src = sports[2].img_url;
document.querySelector("#kailas .caption").innerHTML = sports[2].caption;

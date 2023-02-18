const soft = [
  {
    title: "",
    img_url: "./assets/soft/ml.jpg",
    content: "",
    caption: "Machine Learning",
  },
  {
    title: "",
    img_url: "./assets/soft/dl.jpg",
    content: "",
    caption: "Deep Learning",
  },
  {
    title: "",
    img_url: "./assets/soft/web.jpg",
    content: "",
    caption: "Web Technology",
  },
];

document.querySelector("#ml .figurexx").src = soft[0].img_url;
document.querySelector("#ml .caption").innerHTML = soft[0].caption;

document.querySelector("#dl .figurexx").src = soft[1].img_url;
document.querySelector("#dl .caption").innerHTML = soft[1].caption;

document.querySelector("#web .figurexx").src = soft[2].img_url;
document.querySelector("#web .caption").innerHTML = soft[2].caption;

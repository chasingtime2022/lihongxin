const education = [
  {
    title: "",
    img_url: "./assets/education/jilin.jpg",
    content: "",
    caption: "Jilin University <br> Material Forming and Control <br>2002-2006",
  },
  {
    title: "",
    img_url: "./assets/education/tsinghua.png",
    content: "",
    caption:
      "Tsinghua University  <br> Automation Engineering Management<br> 2021-now",
  },
];

document.querySelector("#bachelor .figure").src = education[0].img_url;
document.querySelector("#bachelor .caption").innerHTML = education[0].caption;

document.querySelector("#master .figure").src = education[1].img_url;
document.querySelector("#master .caption").innerHTML = education[1].caption;

const DOM = {
  runFun() {
    let input, value, ul, li, p, test;

    input = document.querySelector("#myInput");
    value = input.value.toUpperCase();
    ul = document.querySelector("#myUl");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      p = li[i].getElementsByTagName("p")[0];
      test = p.textContent || p.innerText;

      if (test.toUpperCase().indexOf(value) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  },

  loadDate() {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    document.querySelector(".date").innerHTML = nowYear;
  },

  toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};

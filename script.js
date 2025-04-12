function watch() {
  const watchElem = document.querySelector(".watch");
  function updateDOM(time) {
    watchElem.textContent = time;
  }

  setInterval(function () {
    updateDOM(new Date().toLocaleTimeString());
  }, 1000);
}
watch();

function toggleModes() {
  const Theme = Object.freeze({
    DARK: "dark",
    LIGHT: "light",
    SYSTEM: "system",
  });

  const dark = document.querySelector("#dark");
  const light = document.querySelector("#light");
  const system = document.querySelector("#system");

  const buttons = [dark, light, system];

  function setActive(button) {
    buttons.forEach((btn) => btn.classList.remove("active-elem"));
    button.classList.add("active-elem");
  }

  function applyTheme(theme) {
    switch (theme) {
      case Theme.DARK:
        document.body.classList.add("dark-mode");
        setActive(dark);
        break;
      case Theme.LIGHT:
        document.body.classList.remove("dark-mode");
        setActive(light);
        break;
      case Theme.SYSTEM:
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.body.classList.toggle("dark-mode", prefersDark);
        setActive(system);
        break;
    }
    localStorage.setItem("theme", theme);
  }

  dark.addEventListener("click", () => applyTheme(Theme.DARK));
  light.addEventListener("click", () => applyTheme(Theme.LIGHT));
  system.addEventListener("click", () => applyTheme(Theme.SYSTEM));

  // Apply saved theme on load
  const saved = localStorage.getItem("theme") || Theme.SYSTEM;
  applyTheme(saved);
}
toggleModes();

const imgArr = [
  "https://plus.unsplash.com/premium_photo-1681408249337-61b5752bdb76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1516342397304-b5da0e4c2dd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675063429164-5e93ace3e295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1545361367-3202270671e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1639386087070-927bbaed8fb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1668475368605-a965547e55e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1516342397304-b5da0e4c2dd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1608878746376-b65933cb0079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681408249337-61b5752bdb76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVlfGVufDB8fDB8fHww",
];

const imgs =
  "about.png  contact.png  css.webp     hamburger.webp  html.webp        laptop.png  moon_6631773.png  search.webp  vscode.png arrow.png  cross.webp   cursor.webp  home.png        javascript.webp  moon.png    right_arrow.webp  sun.png".split(
    " "
  );
console.log(imgs);

const container = document.querySelector(".images");

function renderImages() {
  imgArr.forEach((img) => {
    if (!img) return;
    const imgElem = document.createElement("img");
    imgElem.src = img;
    container.appendChild(imgElem);
  });
  imgs.forEach((img) => {
    if (!img) return;
    const imgElem = document.createElement("img");
    imgElem.src = "images/icons/" + img;
    container.appendChild(imgElem);
  });
}
renderImages();

async function fetchImg(){
  const responce = await fetch("./images")
  const data = await responce.text()
  console.log(data)
}

fetchImg()
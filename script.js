const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");
const body = document.body;

const theme = localStorage.getItem("preferredTheme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

darkButton.onclick = () => {
  console.log("go dark");
  body.classList.replace("light", "dark");
  localStorage.setItem("preferredTheme", "dark");
};

lightButton.onclick = () => {
  console.log("go light");
  body.classList.replace("dark", "light");
  localStorage.setItem("preferredTheme", "light");
};

solarButton.onclick = () => {
  console.log("go solar");
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarButton.style.cssText = `--bg-solar: var(--yellow)`;
    solarButton.innerText = "solarize";
    localStorage.removeItem("isSolar");
  } else {
    solarButton.style.cssText = `
      --bg-solar: white;
    `;
    body.classList.add("solar");
  }
};

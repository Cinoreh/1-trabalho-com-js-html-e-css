function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto_de_perfil_dark-removebg-preview.png")
    img.setAttribute("alt", "desenho de um gato preto de oculos escuros")
  } else {
    img.setAttribute(
      "src",
      "./assets/foto_de_perfil_light-removebg-preview.png",
    )
    img.setAttribute("alt", "desenho de um gato branco de oculos escuros")
  }
}

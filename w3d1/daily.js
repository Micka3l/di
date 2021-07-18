let solarSystem = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
let listPlanets = document.getElementsByClassName("listPlanets")[0];

for (let index = 0; index < solarSystem.length; index++) {
    const element = solarSystem[index];
    let planet = document.createElement("div");
    planet.setAttribute("class", `planet ${solarSystem[index]}`)
    planet.style.background = "#" + ((1<<24)*Math.random() | 0).toString(16)
    listPlanets.appendChild(planet)
}
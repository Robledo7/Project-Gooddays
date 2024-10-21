let greetings = ["Buen día", "Eres increíble", "Cafecitooo", "Cambia la cara", "Dale, hoy va a ser un gran día", "Que no te gane la pachorra", "Hermosa mñana, ¿verdad?", "Matecitooo", "Dale, no te distraigas", "Hoy vamos a ganar mucho dinero", "¿Qué tal?", "Buen comienzo del día", "Hoy se aprende", "Ponete música y a comenzar con todo"];
greetings.push("Nunca un mejor día");
greetings.push("Buenos días, buenas tardes, buenas noches");

const showAlert = (name) => {
    alert(greetings[Math.floor(Math.random() * (greetings.length))]+" "+name);

}
showAlert("Robledo");

class Auto {
    constructor(nombre, id, precio, color, stock, ) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}


const fiat = [];
const chevrolet = [];
const ford = [];



fiat.push(new Auto("147 1.3", 1, 300000, "Blanco", 2));
fiat.push(new Auto("Duna 1.3", 2, 480000, "Rojo", 1));
fiat.push(new Auto("Palio 1.6", 3, 800000, "Gris", 5));
fiat.push(new Auto("MOBI", 4, 3000000, "Blanco", 5));

chevrolet.push(new Auto("Corsa 1.4", 5, 650000, "Gris", 7));
chevrolet.push(new Auto("Astra 2.0", 6, 1100000, "Negro", 4));
chevrolet.push(new Auto("Camaro 3.0", 7, 17000000, "Amarillo", 1));

ford.push(new Auto("Fiesta 1.6", 8, 2300000, "Blanco", 10));
ford.push(new Auto("Sierra 2.2", 9, 400000, "Negro", 1));



let sectionAuto = document.getElementById("section-auto");


function crearCard (auto) {

    let card = document.createElement("div");
    card.setAttribute("class", "card card-auto");
    card.style.width = "18rem";

    sectionAuto.appendChild(card);

    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./media/${auto.id}.jpg" class="card-img-top" alt="${auto.nombre}"></img>`;
    card.appendChild(cardImg);

    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${auto.nombre}</h5>
                            <p class="card-text"> Precio: $${auto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}


for (const fiat of fiats) {
    crearCard(fiat);
}

for (const chevrolet of chevrolets) {
    crearCard(chevrolet);
}

for (const ford of fords) {
    crearCard(ford);
}
let isIgnite = true

function changeCard(event){
    
    const card = event.currentTarget
    const backgroundImage = isIgnite ? "url(./assets/bg-card2.svg)" : "url(./assets/bg-card.svg)"
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage
}
let isMengo = true

function changeCard2(event){
    
    const card = event.currentTarget
    const backgroundImage = isMengo ? "url(./assets/bg-card-branco.svg)" : "url(./assets/bg-card-preto.svg)"
    isMengo = !isMengo
    card.style.backgroundImage = backgroundImage
}
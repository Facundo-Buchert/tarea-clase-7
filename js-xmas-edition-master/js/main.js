// :)
// Producido por Sir Sink (Pica)


const $form = document.querySelector("#letter-to-santa")

const $name = $form.name.value
const town = $form.town.value
const giftDescription = $form["gift-description"].value



console.log($name)
console.log(town)
console.log(giftDescription)

function validateName(name) {
    if (name.length === 0){
        return "Este campo debe tener al menos un caracter"
    }

    if (name.length > 50) {
        return "Este campo no puede tener mas de 50 caracteres"
    }

    return ""
}

function validateGiftDescription (giftDescription) {
    if (giftDescription.length === 0) {
        return "Este campo debe tener al menos un caracter"
    }

    if (giftDescription.length > 200) {
        return "Este campo no puede tener mas de 200 caracteres"
    }
}


function validateTown (town) {
    if (town.length === 0) {
        return "Seleccione su locación"
    }
    
}


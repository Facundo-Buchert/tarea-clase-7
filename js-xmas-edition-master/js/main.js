
const $form = document.querySelector("#letter-to-santa")

function validateName(name) {
    if (name.length === 0){
        return "Este campo debe tener al menos un caracter"
    }
    if(!/^[a-z]+$/i.test(name)){
        return "Este campo solo puede tener letras"
    }
    if (name.length > 50) {
        return "Este campo no puede tener más de 50 caracteres"
    }
    return ""
}

function validateGiftDescription (giftDescription) {
    if (giftDescription.length === 0) {
        return "Este campo debe tener al menos un caracter"
    }
    if(!/^[a-z0-9 ]+$/i.test(giftDescription)){
        return "Este campo solo puede contener letras y numeros"
    }
    if (giftDescription.length > 100) {
        return "Este campo no puede tener mas de 100 caracteres"
    }
    return ""
}


function validateTown (town) {
    if (town.length === 0) {
        return "Seleccione su locación"
    }
    
    return ""
}

function handleMistakes (mistakes){
    const keys = Object.keys(mistakes)
    console.log(keys)

    keys.forEach(function(key){
        const mistake = mistakes[key]
        const $mistakes = document.querySelector("#mistakes")

        if(mistake){
            $form[key].className = "mistake"

            const $mistake = document.createElement("li")
            $mistake.innerText = mistake
            $mistakes.appendChild($mistake)
        }else{
            $form[key].className = ""
        }
    
    })
}

$form.onsubmit = function validateForm(event){
    const $name = $form.name.value
    const city = $form.city.value
    const giftDescription = $form["gift-description"].value

    const mistakeName = validateName($name)
    const mistakeCity = validateCity(city)
    const mistakeGiftDescription = validateGiftDescription(giftDescription)

    const mistakes = {
        city: mistakeCity,
        name: mistakeName,
        "gift-description": mistakeGiftDescription
    }


    handleMistakes(mistakes)
    event.preventDefault()
}




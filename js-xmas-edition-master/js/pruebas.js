
function tryValidateName() {
  console.assert(
    validateName('') === 'Este campo debe tener al menos un caracter',
    'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validateName(
          'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll') ===
          "Este campo no puede tener más de 50 caracteres",
      'validateName no validó que el nombre sea menor a 50 caracteres',
  )
  console.assert(
    validateName("123") === "Este campo solo puede tener letras",
    "validateName no valido que el nombre solo contenga letras"
  )
}

tryValidateName()

function  tryValidateTown() {
  console.assert(
    validateTown("") === "Seleccione su locación",
    "Validar ciudad no validó que se seleccione una locación"
  )
} 

tryValidateTown()


function tryValidateGiftDescription() {
  console.assert(
    validateGiftDescription("") === "Este campo debe tener al menos un caracter",
    "Validar descripción regalo no validó que la descripción no sea vacía"
  )

console.assert(
  validateGiftDescription(
    "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII") ===

    "Este campo no puede tener mas de 100 caracteres",
    'Validar nombre no validó que el nombre sea menor a 100 caracteres',
  )      
  console.assert(
    validateGiftDescription(",.-") === "Este campo solo puede contener letras y numeros",
    "validateGifDescription no valido que la descripcion solo tenga letras y numeros"
  )                      
}

tryValidateGiftDescription()
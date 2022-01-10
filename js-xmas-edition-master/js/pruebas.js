function tryValidateName() {
    console.assert(
        validateName('') === 'Este campo debe tener al menos un caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validateName(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
             
        'Este campo no puede tener mas de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
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

          "Este campo no puede tener mas de 200 caracteres",
          'Validar nombre no validó que el nombre sea menor a 200 caracteres',
  )                            
  }
  
  tryValidateGiftDescription()
  
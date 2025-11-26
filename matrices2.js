let personas = [
    {
        nombre: "Pedro", 
        edad: 25, 
        estado: true, 
        propiedades: ["propiedad 1", "propiedad 2"]
    },
    {
        nombre: "Marta", 
        edad: 45, 
        estado: true, 
        propiedades: ["propiedad 1"]
    },
    {
        nombre: "Juan", 
        edad: 15, 
        estado: true, 
        propiedades: []
    },  
]

personas.forEach((persona) => {
    console.log("Listado de propiedades de: ", persona.nombre);


    if(persona.propiedades.length > 0){
        persona.propiedades.forEach((propiedad, index)=> {
        console.log(`Propiedad N° ${index+1}: ${propiedad}`)
        });
    }else {
        console.log("**CLIENTE SIN PROPIEDADES REGISTRADAS**");
    }

    console.log("*".repeat(20));

});
let oportunidadesMaximo = 5
let oportunidadesActuales = 0

const acertijos = {
    Fácil: [
        { pregunta: "¿Cómo se llama la bebida de maíz morado típica de Perú?", respuesta: "Chicha morada" },
        { pregunta: "¿En qué ciudad se encuentra Machu Picchu?", respuesta: "Cusco" },
        { pregunta: "¿Cuál es el plato nacional del Perú hecho a base de pescado crudo?", respuesta: "Ceviche" },
        { pregunta: "¿Cómo se llama la moneda oficial de Perú?", respuesta: "Sol" },
        { pregunta: "¿Cuál es el idioma indígena más hablado en Perú?", respuesta: "Quechua" },
        { pregunta: "¿Qué animal aparece en el escudo de Perú?", respuesta: "Vicuña" },
        { pregunta: "¿Qué cordillera atraviesa Perú?", respuesta: "Andes" },
        { pregunta: "¿Cómo se llama el río más largo de Perú?", respuesta: "Amazonas" },
        { pregunta: "¿En qué mes se celebra el Día de la Independencia de Perú?", respuesta: "Julio" },
        { pregunta: "¿Cuál es el lago navegable más alto del mundo compartido por Perú?", respuesta: "Titicaca" }
    ],
    Normal: [
        { pregunta: "¿Qué ciudad peruana es conocida como la Ciudad Blanca?", respuesta: "Arequipa" },
        { pregunta: "¿Cómo se llama la antigua civilización que construyó Machu Picchu?", respuesta: "Inca" },
        { pregunta: "¿Qué bebida alcohólica peruana se elabora con uvas?", respuesta: "Pisco" },
        { pregunta: "¿Qué país comparte frontera al norte con Perú?", respuesta: "Ecuador" },
        { pregunta: "¿Cuál es la danza típica del altiplano peruano?", respuesta: "Marinera" },
        { pregunta: "¿Qué región peruana es conocida por sus líneas misteriosas en el desierto?", respuesta: "Nazca" },
        { pregunta: "¿Qué ciudad peruana es famosa por su carnaval colorido?", respuesta: "Puno" },
        { pregunta: "¿Qué ave es símbolo de los Andes?", respuesta: "Cóndor" },
        { pregunta: "¿Qué fruta es conocida como la 'reina de la Amazonía' en Perú?", respuesta: "Camu camu" },
        { pregunta: "¿Qué poeta peruano ganó el Premio Nobel de Literatura?", respuesta: "Mario Vargas Llosa" }
    ],
    Difícil: [
        { pregunta: "¿Qué es la pachamanca?", respuesta: "Un plato cocinado bajo tierra" },
        { pregunta: "¿Qué héroe peruano es conocido por su sacrificio en la Guerra del Pacífico?", respuesta: "Miguel Grau" },
        { pregunta: "¿Cómo se llama el cañón más profundo de Perú?", respuesta: "Cañón del Colca" },
        { pregunta: "¿Qué ciudad peruana es famosa por su carnaval de negritos?", respuesta: "Huánuco" },
        { pregunta: "¿Qué festividad se celebra en Cusco cada junio?", respuesta: "Inti Raymi" },
        { pregunta: "¿Cómo se llama el arbusto originario de Perú utilizado para hacer chocolate?", respuesta: "Cacao" },
        { pregunta: "¿Qué animal doméstico es un plato típico en algunas regiones de Perú?", respuesta: "Cuy" },
        { pregunta: "¿Cómo se llama la flor nacional de Perú?", respuesta: "Cantuta" },
        { pregunta: "¿Qué parque nacional peruano protege la biodiversidad amazónica?", respuesta: "Manu" },
        { pregunta: "¿Qué sitio arqueológico es conocido como la 'Ciudad del fuego'?", respuesta: "Kuelap" }
    ],
    Extremo: [
        { pregunta: "¿Qué cordillera peruana tiene el nevado más alto del país?", respuesta: "Cordillera Blanca" },
        { pregunta: "¿Cómo se llama la salina natural ubicada en Cusco?", respuesta: "Salineras de Maras" },
        { pregunta: "¿Qué río forma el Gran Cañón del Cotahuasi?", respuesta: "Río Cotahuasi" },
        { pregunta: "¿Qué festival cusqueño honra a los muertos con altares?", respuesta: "Todos los Santos" },
        { pregunta: "¿Cómo se llama el sitio arqueológico que parece una fortaleza en forma de zigzag?", respuesta: "Sacsayhuamán" },
        { pregunta: "¿Qué islas peruanas son famosas por su guano?", respuesta: "Islas Ballestas" },
        { pregunta: "¿Cómo se llama el dios supremo de la mitología andina?", respuesta: "Viracocha" },
        { pregunta: "¿Qué ciudad peruana es conocida por su catedral de barro?", respuesta: "Trujillo" },
        { pregunta: "¿Qué lugar en Perú es conocido como la Montaña de los 7 Colores?", respuesta: "Vinicunca" },
        { pregunta: "¿Cómo se llama el primer presidente del Perú?", respuesta: "José de la Riva-Agüero" }
    ]
}

alert("¡Bienvenido al juego de ACERTIJOS sobre Perú!")

const seleccionarNivel = (nivel) => {
    do {
        nivel = prompt("Selecciona un nivel de dificultad: Fácil, Normal, Difícil o Extremo").trim()
        if (!acertijos[nivel]) {
            alert("Por favor, seleccionalo uno que es valido.")
        }
    } while (!acertijos[nivel])
    return nivel
}

const jugarNivel = (nivel) => {
    for (let i = 0; i < acertijos[nivel].length; i++) {
        const acertijo = acertijos[nivel][i]
        const respuestaUsuario = prompt(`Acertijo ${i + 1}: ${acertijo.pregunta}`).trim()

        if (respuestaUsuario.toLowerCase() === acertijo.respuesta.toLowerCase()) {
            alert("¡Respuesta correcta!")
        } else {
            oportunidadesActuales++
            alert(`Respuesta incorrecta. La respuesta correcta era: ${acertijo.respuesta}. Oportunidades usadas: ${oportunidadesActuales}`)

            if (oportunidadesActuales === oportunidadesMaximo) {
                alert("¡Game Over! Gran esfuerzo, sigue intentandolo.")
                return 
            }
        }
    }
    alert("¡Felicidades! Terminaste el nivel.")
}

const nivelSeleccionado = seleccionarNivel()
jugarNivel(nivelSeleccionado)


//link de mi video de youtube: https://youtu.be/83Fn6fVe8RI
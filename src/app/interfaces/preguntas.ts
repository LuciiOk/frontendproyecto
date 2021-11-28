export interface Preguntas {
    pregunta:string,
    respuestacorrecta:string,
    respuestas:string[]
}

export let ListaPreguntas:Preguntas[] = [
    {pregunta: '¿Cuál alimento es rico en potasio?',
    respuestacorrecta: 'Banana',
    respuestas: ['Sandia','Pescado', 'Banana']},
    {pregunta: '¿Cuál es el animal más grande del mundo?',
    respuestacorrecta: 'Ballena',
    respuestas: ['Jirafa','Leon', 'Ballena']},
    {pregunta: '¿Cuántas patas tiene una araña?',
    respuestacorrecta: '8 patas',
    respuestas: ['3 patas','20 patas', '8 patas']},
    {pregunta: '¿Que nombre tiene el sonido que hace una oveja?',
    respuestacorrecta: 'Balido',
    respuestas: ['Chillar','ladrar', 'Balido']},
    {pregunta: '¿Cómo se llama un polígono de 3 lados?',
    respuestacorrecta: 'Triangulo',
    respuestas: ['Cuadrado','Circulo', 'Triangulo']},
    {pregunta: '¿Cómo se llaman los animales que solo se alimentan de vegetales y plantas?',
    respuestacorrecta: 'Hervivoro',
    respuestas: ['Sandia','Carnivoro', 'Hervivoro']},
    {pregunta: '¿Cuántos minutos tiene una hora?',
    respuestacorrecta: '60 minutos',
    respuestas: ['20 minutos','50 minutos', '60 minutos']},
]

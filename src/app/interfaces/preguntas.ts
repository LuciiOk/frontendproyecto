export interface Preguntas {
    pregunta:string,
    respuestacorrecta:string,
    incorrectas:string[]
}

export let ListaPreguntas:Preguntas[] = [
    {pregunta: '¿Cuál alimento es rico en potasio?',
    respuestacorrecta: 'Banana',
    incorrectas: ['Sandia','Pescado']},
    {pregunta: '¿Cuál es el animal más grande del mundo?',
    respuestacorrecta: 'Ballena',
    incorrectas: ['Jirafa','Leon']},
    {pregunta: '¿Cuántas patas tiene una araña?',
    respuestacorrecta: '8 patas',
    incorrectas: ['3 patas','20 patas']},
    {pregunta: '¿Que nombre tiene el sonido que hace una oveja?',
    respuestacorrecta: 'Balido',
    incorrectas: ['Chillar','ladrar']},
    {pregunta: '¿Cómo se llama un polígono de 3 lados?',
    respuestacorrecta: 'Triangulo',
    incorrectas: ['Cuadrado','Circulo']},
    {pregunta: '¿Cómo se llaman los animales que solo se alimentan de vegetales y plantas?',
    respuestacorrecta: 'Hervivoro',
    incorrectas: ['Sandia','Carnivoro']},
    {pregunta: '¿Cuántos minutos tiene una hora?',
    respuestacorrecta: '60 minutos',
    incorrectas: ['20 minutos','50 minutos']},
]

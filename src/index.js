const messages = [
  'Las cosas no tienen por qué cambiar el mundo para ser importantes (Steve Jobs)',
  'Una vez aceptamos nuestros límites, vamos más allá de estos (Albert Einstein)',
  'Si miras en dirección al sol no verás las sombras (Hellen Keller)',
  'El optimismo perpetuo es un multiplicador de fuerzas (Colin Powell)',
  'Escribe en tu corazón que cada día es el mejor día del año (Ralph Waldo Emerson)',
  'No es lo que te llamen, es aquello que respondes (W. C. Fields)',
  'La verdadera oportunidad hacia el éxito reside en la persona, no en el puesto de trabajo (Zig Ziglar)',
  'Para realizar una acción positiva hay que mantener una visión positiva (Dalai Lama)',
  'Cada misión noble parece imposible en un principio (Thomas Carlye)',
  'No llores porque se terminó, sonríe porque sucedió (Dr. Seuss)',
  'Lo que nunca va a volver es lo que hace de la vida algo dulce (Emily Dickinson)',
  'No me avergüenza decirte que creo en los milagros (Corazón Aquino)',
  'Puedes hacerlo, deberías hacerlo, y si eres lo suficientemente valiente como para empezar, lo harás (Stephen King)',
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

//Export as a module
module.exports = { randomMsg };

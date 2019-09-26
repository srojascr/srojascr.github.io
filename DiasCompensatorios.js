var intro = introJs();

function startIntro(){
  intro.setOptions({
    steps: [
      {
        element: '#tourIndexDiasCompens',
        intro: 'Acá usted puede visualizar los días disponibles y solicitar el uso de los días, o moverlos a la bolsa de tiempo.<br>' +
          'La fecha de caducidad indica hasta cuando puedes usar o mover sus días compensatorios y es calculada con base en la fecha de inicio trabajada (vigencia de 2 meses).<br>' +
          'Nota aclaratoria: ojo en la fecha de caducidad; los días una vez vencidos no estarán disponibles en el sistema.',
        position: 'center'
      }
    ]
  });
  intro.start();
}
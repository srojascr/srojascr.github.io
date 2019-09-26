var intro = introJs();

function startIntro(){
  intro.setOptions({
    steps: [
      {
        element: '#tourIndexDiasFlexibles',
        intro: 'Acá usted puede visualizar los días flexibles (adquiridos en el programa Roche A La Carte), solicitar su uso o moverlos a la bolsa de tiempo.<br>' +
          'La fecha de caducidad para el uso de estos días es el 31 de diciembre del año vigente.<br>',
        position: 'center'
      }
    ]
  });
  intro.start();
}
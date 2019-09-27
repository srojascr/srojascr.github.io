var intro = introJs();

function startIntroHome(){
  intro.setOptions({
    steps: [
      {
        element: "#tourReportFinSemana",
        intro: '<div style="width: 400px">' +
          'Acá puedes reportar los fines de semana que has trabajado, para que tengas días compensatorios.' +
          'Las reglas para llenar esta solicitud son las siguientes:' +
          '<ul>' +
          '<li>Ingresar la “Fecha de inicio” y la “Fecha final” que has trabajado. No se podrán reportar días en futuro.</li>' +
          '<li>Ingresar la “Cantidad de días” trabajados. Acá puedes informar hasta 3 días en un único registro.</li>' +
          '<li>Confirma tu “Jefe directo”. Si tu jefe directo ha cambiado puedes actualizar la información para que la solicitud llegue a la persona correcta.</li>' +
          '<li>Ingresar la “Razón de la Solicitud”  - un texto corto para que su jefe conozca porque has trabajado en final de semana.</li>' +
          '</ul>' +
          'Después de llenar todos los campos, haz click en el botón “Enviar para Aprobación” para que su jefe directo pueda aprobar su solicitud.<br>' +
          'El botón “Cancelar” elimina la creación de tu solicitud en el sistema.<br>' +
          'Una vez aprobada la solicitud el número de días trabajados será añadido al total de días compensatorios.' +
          '</div>',
        position: 'right'
      },
      {
        element: '#tourDiasCompensat',
        intro: "Acá usted puede visualizar los días disponibles y solicitar el uso de los días, o moverlos a la bolsa de tiempo.<br>" +
          "La fecha de caducidad indica hasta cuando puedes usar o mover sus días compensatorios y es calculada con base en la fecha de inicio trabajada (vigencia de 2 meses).<br>" +
          "Nota aclaratoria: ojo en la fecha de caducidad; los días una vez vencidos no estarán disponibles en el sistema.<br>",
        position: 'center'
      },
      {
        element: '#tourDiasFlexibles',
        intro: 'Acá usted puede visualizar los días flexibles (adquiridos en el programa Roche A La Carte), solicitar su uso o moverlos a la bolsa de tiempo.<br>' +
          'La fecha de caducidad para el uso de estos días es el 31 de diciembre del año vigente.',
        position: 'left'
      }
    ]
  });
  intro.start();
}
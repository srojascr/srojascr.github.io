var intro = introJs();

function startIntroReportaFinSemana(){
  intro.setOptions({
    steps: [
      {
        element: '#tourIndexReportFinSem',
        intro:  '<div style="width: 400px">' +
          'Acá puedes reportar los fines de semana que has trabajado, para que tengas días compensatorios.<br>' +
          'Las reglas para llenar esta solicitud son las siguientes:<br>' +
          '<ul>' +
          '<li>Ingresar la “Fecha de inicio” y la “Fecha final” que has trabajado. No se podrán reportar días en futuro. <br>' +
          '<li>Ingresar la “Cantidad de días” trabajados. Acá puedes informar hasta 3 días en un único registro.</li>' +
          '<li>Confirma tu “Jefe directo”. Si tu jefe directo ha cambiado puedes actualizar la información para que la solicitud llegue a la persona correcta.</li>' +
          '<li>Ingresar la “Razón de la Solicitud”  - un texto corto para que su jefe conozca porque has trabajado en final de semana.</li>' +
          '</ul>' +
          'Después de llenar todos los campos, haz click en el botón “Enviar para Aprobación” para que su jefe directo pueda aprobar su solicitud.<br>' +
          'El botón “Cancelar” elimina la creación de tu solicitud en el sistema.<br>' +
          'Una vez aprobada la solicitud el número de días trabajados será añadido al total de días compensatorios.<br>' +
          '</div>',
        position: 'center'
      }
    ]
  });
  intro.start();
}
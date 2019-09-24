var intro = introJs();

function startIntro(){
  intro.setOptions({
    steps: [
      {
        intro: "Título!"
      },
      {
        element: '#item1',
        intro: "Explicación del item1."
      },
      {
        element: '#item2',
        intro: "Explicación del item2.",
        position: 'right'
      },
      {
        element: '#item3',
        intro: 'Explicación del item3.',
        position: 'left'
      }
    ]
  });
  intro.start();
}
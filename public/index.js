/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor row">
          <span class="medium-3 columns bill_string">${actor.who}</span>
          <span class="medium-3 columns bill_string">${actor.type}</span>
          <span class="medium-3 columns bill">${actor.amount}</span>
        </div>

      `;
    }).join('');
    const header = '<div class="row text-center large" id="bill_header_bill">Bill</div>'
    const industry = '<div class="medium-6 columns row large text-left">Camtar Industry</div>'
    const date = '<div class="medium-6 columns row large text-left">The 22/02/2018 at 1:00 am</div>'
    div.innerHTML = "<hr>"+header+"<hr>"+industry+date+"<hr>"+template+"<hr>";
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();

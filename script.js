$(document).ready(function(){
  $('#miFormularioDeRegistro').submit(function(event) {
    event.preventDefault();

    var formEl = $('#miFormularioDeRegistro');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
        alert('Antes de enviar');
      }
    }).done(function(data) {
      alert('Datos Enviados');
      submitButton.prop('disabled', false);
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: 'http://formkeep.com/api/v1/forms/ec7a3979bc01/submissions.json?api_token=d442c83b6bb0896c5adf1b8e25bd1b50',
        dataType: "json"
      }).done(function(data) {
        console.log(data);
      });

    });
  });


});
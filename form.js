// feather.replace();

const scriptURL = 'https://script.google.com/macros/s/AKfycbyTawRoR6ULAc9NAFpl31pFyPlIm3wdb3fYP94CQ3Rk2TLaNbxw5BIoFeKiunVx94pX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); 

   })

  .catch(error => console.error('Error!', error.message))
})
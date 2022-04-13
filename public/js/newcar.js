// take value from each element and post to api/cars/new

async function newFormHandler(event) {
    event.preventDefault();
  
    const make_name = document.querySelector('#make_name').value;
    const car_model = document.querySelector('#car_model').value;
    const year = document.querySelector('#year').value;
    const mileage = document.querySelector('#mileage').value;
    const color = document.querySelector('#color').value;
    const transmission = document.querySelector('#transmission').value;
    const salvage_title = document.querySelector('.salvage_title:checked') ? true : false;
  
    const response = await fetch(`/api/cars/`, {
      method: 'POST',
      body: JSON.stringify({
        make_name,
        car_model,
        year,
        mileage,
        color,
        transmission,
        salvage_title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add car.');
    }
  }
  

  //submit button needs work
  document
    .querySelector('.new-car-form')
    .addEventListener('submit', newFormHandler);


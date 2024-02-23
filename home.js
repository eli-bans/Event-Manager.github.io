


const navbarToggle = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    opacity: 0,
    duration: 2,
    delay: 0.5,
    y: -50,
    stagger: 0.3
});

gsap.from('.animate-services', {
    scrollTrigger: '.services__container',
    opacity: 0,
    duration: 2,
    delay: 0.5,
    y: -50,
    stagger: 0.3
});

gsap.from('.animate-membership', {
    scrollTrigger: '.membership__wrapper',
    opacity: 0,
    duration: 2,
    delay: 0.5,
    y: -50,
    stagger: 0.3
});

function showAddEventForm() {
    console.log("Button clicked!")
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';


    var formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    formContainer.style.position = 'fixed';
    formContainer.style.top = '50%';
    formContainer.style.left = '50%';
    formContainer.style.transform = 'translate(-50%, -50%)';
    formContainer.style.backgroundColor = 'white';
    formContainer.style.padding = '20px';
    formContainer.style.border = '1px solid #ccc';
    formContainer.style.borderRadius = '8px';
    formContainer.style.boxShadow = '0 0 10px';
    formContainer.style.width = '350px';
    formContainer.style.textAlign = 'center';

    var form = document.createElement('form');
    form.id = 'add-event-form';


    var eventtitleInput = document.createElement('input');
    eventtitleInput.type = 'text';
    eventtitleInput.name = 'eventtitle';
    eventtitleInput.placeholder = 'Enter event title';
    eventtitleInput.style.display = 'block';
    eventtitleInput.style.marginBottom = '10px';
    eventtitleInput.style.width = '100%'; 
    eventtitleInput.style.height = '50px';
    eventtitleInput.style.padding = '10px';
    eventtitleInput.style.boxSizing = 'border-box';
    eventtitleInput.style.border = '1px solid #ccc';
    eventtitleInput.style.borderRadius = '8px';
    form.appendChild(eventtitleInput);


    var eventdateInput = document.createElement('input');
    eventdateInput.type = 'Date';
    eventdateInput.name = 'eventdate';
    eventdateInput.style.display = 'block';
    eventdateInput.style.marginBottom = '10px';
    eventdateInput.style.width = '100%';
    eventdateInput.style.height = '50px';
    eventdateInput.style.padding = '10px'; 
    eventdateInput.style.boxSizing = 'border-box'; 
    eventdateInput.style.border = '1px solid #ccc'; 
    eventdateInput.style.borderRadius = '8px';
    form.appendChild(eventdateInput);

    var eventtimeInput = document.createElement('input');
    eventtimeInput.type = 'time';
    eventtimeInput.name = 'eventtime';
    eventtimeInput.style.display = 'block';
    eventtimeInput.style.marginBottom = '10px';
    eventtimeInput.style.width = '100%'; 
    eventtimeInput.style.height = '50px';
    eventtimeInput.style.padding = '10px';
    eventtimeInput.style.boxSizing = 'border-box';
    eventtimeInput.style.border = '1px solid #ccc';
    eventtimeInput.style.borderRadius = '8px';
    form.appendChild(eventtimeInput);


    var locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.name = 'location';
    locationInput.placeholder = 'Location:';
    locationInput.style.display = 'block';
    locationInput.style.marginBottom = '10px';
    locationInput.style.width = '100%';
    locationInput.style.height = '50px';
    locationInput.style.padding = '10px';
    locationInput.style.boxSizing = 'border-box';
    locationInput.style.border = '1px solid #ccc';
    locationInput.style.borderRadius = '8px';
    form.appendChild(locationInput);
    
    var descriptionInput = document.createElement('textarea');
    descriptionInput.type = 'textarea';
    descriptionInput.name = 'description';
    descriptionInput.placeholder = 'Describe:';
    descriptionInput.style.display = 'block';
    descriptionInput.style.marginBottom = '10px';
    descriptionInput.style.width = '100%';
    descriptionInput.style.height = '50px';
    descriptionInput.style.padding = '10px';
    descriptionInput.style.boxSizing = 'border-box';
    descriptionInput.style.border = '1px solid #ccc';
    descriptionInput.style.borderRadius = '8px';
    form.appendChild(descriptionInput);


    var submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit';
    submitButton.style.width = '100%';
    submitButton.style.color = 'white';
    submitButton.style.padding = '10px';
    submitButton.style.border = '1px solid #ccc';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.textAlign = 'center'; 
    submitButton.style.boxSizing = 'border-box';
    submitButton.style.backgroundColor = 'grey';
    submitButton.addEventListener('click', function() {
        eventtitleInput.value = '';
        eventdateInput.value = '';
        eventtimeInput.value = '';
        locationInput.value = '';
        descriptionInput.value= '';
        overlay.remove();
    });
    form.appendChild(submitButton);

    formContainer.appendChild(form);


    overlay.appendChild(formContainer);

    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
}

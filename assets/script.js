// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Function to expand the project card
function expandCard(button) {
    const card = button.closest('.project-card');
    const details = card.querySelector('.project-details');
    const viewDetailsButton = button; // Get the reference to the "View Details" button
    const backdrop = document.createElement('div');

    backdrop.classList.add('backdrop');
    document.body.appendChild(backdrop);
    backdrop.style.display = 'block';

    if (card.classList.contains('expanded')) {
        collapseCard(card, backdrop);
        return;
    }

    details.style.display = 'block';
    card.style.transform = 'scale(1.1)'; // Zoom effect
    card.classList.add('expanded', 'show'); // Adding 'show' for fade-in

    // Hide the "View Details" button on expansion
    viewDetailsButton.style.display = 'none';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close-button');
    card.appendChild(closeButton);

    closeButton.addEventListener('click', function () {
        collapseCard(card, backdrop);
    });

    backdrop.addEventListener('click', function () {
        collapseCard(card, backdrop);
    });
}

// Function to collapse the project card
function collapseCard(card, backdrop) {
    const details = card.querySelector('.project-details');
    const viewDetailsButton = card.querySelector('.btn-details'); // Reference to the button

    card.style.transform = 'scale(1)'; // Reverse zoom effect
    card.classList.remove('show', 'expanded'); // Removing 'show' for fade-out
    details.style.display = 'none';
    backdrop.style.display = 'none';

    // Restore the "View Details" button when the card is collapsed
    viewDetailsButton.style.display = 'block';

    const closeButton = card.querySelector('.close-button');
    if (closeButton) {
        card.removeChild(closeButton);
    }
}

// Event listeners for "View Details" buttons
document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        expandCard(this);
    });
});



// Function to toggle the visibility of the abstract
function toggleAbstract(button) {
    const abstract = button.nextElementSibling;
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
        button.textContent = "Read Less";
    } else {
        abstract.style.display = "none";
        button.textContent = "Read More";
    }
}
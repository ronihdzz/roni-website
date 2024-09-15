function showFullDescription(event, title) {
    event.preventDefault();
    const experienceItem = event.target.closest('.experience-item');
    const shortDescription = experienceItem.querySelector('.short-description');
    const fullDescription = experienceItem.querySelector('.full-description');
    const readMoreLink = event.target;

    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        shortDescription.style.display = 'none';
        fullDescription.style.display = 'block';
        readMoreLink.textContent = 'Ver menos';
    } else {
        shortDescription.style.display = 'block';
        fullDescription.style.display = 'none';
        readMoreLink.textContent = 'Ver más';
    }
}

function toggleAboutMe(event) {
    event.preventDefault();
    const aboutMeSection = document.querySelector('.about-me-section');
    const shortDescription = aboutMeSection.querySelector('.short-description');
    const fullDescription = aboutMeSection.querySelector('.full-description');
    const readMoreLink = event.target;

    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        shortDescription.style.display = 'none';
        fullDescription.style.display = 'block';
        readMoreLink.textContent = 'Ver menos';
    } else {
        shortDescription.style.display = 'block';
        fullDescription.style.display = 'none';
        readMoreLink.textContent = 'Ver más';
    }
}

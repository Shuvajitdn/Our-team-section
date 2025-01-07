// Modal Handling
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');
const messageButtons = document.querySelectorAll('.message-btn');
const contactName = document.getElementById('contact-name');
const modalProfileImg = document.getElementById('modal-profile-img');

// Open Modal
messageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const imgSrc = button.getAttribute('data-img');
        
        // Update modal content
        contactName.textContent = name;
        modalProfileImg.src = imgSrc;
        modal.style.display = 'flex';
    });
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

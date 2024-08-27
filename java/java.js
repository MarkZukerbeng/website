function saveFormData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Guardar en localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Información guardada en localStorage');
}

function loadFormData() {
    // Cargar datos si existen en localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
}

// Cargar datos al iniciar la página
window.onload = loadFormData;
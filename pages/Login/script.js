document.addEventListener('DOMContentLoaded', () => {
    window.login = function() {
        const matNumber = document.getElementById('matNumber').value;
        const password = document.getElementById('password').value;
        const error = document.getElementById('error');

        const correctMatNumber = 'Uj-2018-ev-0512'; // Replace with your predefined matriculation number
        const correctPassword = '2018ev0512'; // Replace with your predefined password

        if (matNumber === correctMatNumber && password === correctPassword) {
            window.location.href = '/pages/Dashboard/dashboard.html'; // Replace with your next page URL
        } else {
            error.textContent = 'Incorrect matriculation number or password. Please try again.';
        }
    };
});

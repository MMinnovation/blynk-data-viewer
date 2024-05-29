document.addEventListener('DOMContentLoaded', function () {
    // API URL
    const apiUrl = 'https://sgp1.blynk.cloud/external/api/get?token=JLaY1GRdqAMGnvKlXzohezDSGg5x1YtT&v26';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const displayDiv = document.getElementById('data-display');
            displayDiv.innerHTML = `Data: ${data}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});

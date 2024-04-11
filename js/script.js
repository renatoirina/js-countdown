// Aspetto che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM caricato');

    // Ottengo i riferimenti ai pulsanti
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');
    let countdownInterval;

    // Aggiungo un event listener al pulsante di avvio countdown
    startButton.addEventListener('click', function () {
        console.log('Avvio countdown cliccato');
        // Disabilito il pulsante di avvio e abilito i pulsanti di pausa e reset
        startButton.disabled = true;
        pauseButton.disabled = false;
        resetButton.disabled = false;

        // Avvio il countdown con un intervallo di 10 secondi
        countdownInterval = startCountdown(10, updateDisplay, () => {
            console.log('Countdown completato. Buon anno!');
            // Visualizzo l'alert e il messaggio "Buon Anno!!!" dopo il countdown
            alert('Buon Anno!!!');
            document.getElementById('countdownDisplay').textContent = 'Buon Anno!!!';
            // Disabilito nuovamente i pulsanti di pausa e reset
            pauseButton.disabled = true;
            resetButton.disabled = true;
        });
    });

    // Aggiungo un event listener al pulsante di pausa countdown
    pauseButton.addEventListener('click', function () {
        console.log('Pausa countdown cliccata');
        // Cambio il testo del pulsante in "Riprendi countdown" e cambio l'event listener
        pauseButton.textContent = 'Riprendi countdown';
        pauseButton.removeEventListener('click', pauseHandler);
        pauseButton.addEventListener('click', resumeHandler);

        // Metto in pausa il countdown
        pauseCountdown(countdownInterval);
    });

    // Gestisco la pausa del countdown
    function pauseHandler() {
        console.log('Pausa countdown cliccata');
        pauseButton.textContent = 'Riprendi countdown';
        pauseButton.removeEventListener('click', pauseHandler);
        pauseButton.addEventListener('click', resumeHandler);

        pauseCountdown(countdownInterval);
    }

    // Gestisco la ripresa del countdown
    function resumeHandler() {
        console.log('Riprendi countdown cliccata');
        pauseButton.textContent = 'Pausa countdown';
        pauseButton.removeEventListener('click', resumeHandler);
        pauseButton.addEventListener('click', pauseHandler);

        // Riprendo il countdown con il tempo rimanente
        countdownInterval = startCountdown(parseInt(document.getElementById('countdownDisplay').textContent), updateDisplay, () => {
            console.log('Countdown completato. Buon anno!');
            alert('Buon Anno!!!');
            document.getElementById('countdownDisplay').textContent = 'Buon Anno!!!';
            pauseButton.disabled = true;
            resetButton.disabled = true;
        });
    }

    // Aggiungo un event listener al pulsante di reset countdown
    resetButton.addEventListener('click', function () {
        console.log('Reset countdown cliccato');
        // Ripristino il display a 10 e abilito il pulsante di avvio countdown
        document.getElementById('countdownDisplay').textContent = '10';
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = true;

        // Interrompo il countdown
        clearInterval(countdownInterval);
    });
});

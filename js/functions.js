/**
 * Avvia il countdown.
 * @param {number} duration - La durata del countdown in secondi.
 * @param {function} onUpdate - La funzione da chiamare ad ogni aggiornamento del countdown.
 * @param {function} onComplete - La funzione da chiamare al termine del countdown.
 * @returns {object} - L'intervallo del countdown.
 */
function startCountdown(duration, onUpdate, onComplete) {
    console.log('Avvio del countdown');
    let timeLeft = duration;

    const countdownInterval = setInterval(() => {
        timeLeft--;
        onUpdate(timeLeft);

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            onComplete();
        }
    }, 1000);

    return countdownInterval;
}

/**
 * Aggiorna il display del countdown.
 * @param {number} timeLeft - Il tempo rimanente nel countdown.
 */
function updateDisplay(timeLeft) {
    console.log(`Aggiornamento display: ${timeLeft}`);
    const countdownDisplay = document.getElementById('countdownDisplay');
    countdownDisplay.textContent = timeLeft;
}

/**
 * Mette in pausa il countdown.
 * @param {object} countdownInterval - L'intervallo del countdown da mettere in pausa.
 */
function pauseCountdown(countdownInterval) {
    console.log('Countdown in pausa');
    clearInterval(countdownInterval);
}

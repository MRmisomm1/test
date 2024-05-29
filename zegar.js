function zegar() {
    const teraz = new Date();
    let godzina = teraz.getHours();
    let minuta = teraz.getMinutes();
    let sekunda = teraz.getSeconds();
    godzina = godzina < 10 ? '0' + godzina : godzina;
    minuta = minuta < 10 ? '0' + minuta : minuta;
    sekunda = sekunda < 10 ? '0' + sekunda : sekunda;

    let czas = godzina + ':' + minuta + ':' + sekunda;
    document.getElementById("zegarTXT").textContent = czas;

    setTimeout(zegar, 1000); 
}

document.addEventListener('DOMContentLoaded', function () {
    zegar(); 
    updateDate();
    updateVisitCount();
    trackTimeSpent();
});

function updateDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString("pl-PL", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('currentDate').textContent = dateString;
}

function updateVisitCount() {
    let visits = Number(localStorage.getItem('iloscOdwiedzin')) || 0;
    if (!sessionStorage.getItem('visited')) {
        visits++;
        localStorage.setItem('iloscOdwiedzin', visits);
        sessionStorage.setItem('visited', 'true');
    }
    document.getElementById('iloscOdwiedzin').textContent = `Odwiedzin na: ${visits}`;
}

function trackTimeSpent() {
    let timeSpent = Number(sessionStorage.getItem('czasNaStronie')) || 0;
    setInterval(() => {
        timeSpent++;
        sessionStorage.setItem('czasNaStronie', timeSpent);
        document.getElementById('czasNaStronie').textContent = `Czas na stronie: ${timeSpent} sek.`;
    }, 1000);
    document.getElementById('czasNaStronie').textContent = `Czas na stronie: ${timeSpent} sek.`;
}

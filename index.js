const cards = document.querySelectorAll('.cards__item');

function resize() {
    cards.forEach(card=> {
        const widthCard = card.offsetWidth;
        const pxMinus = widthCard * (25.48 / 100)
        card.style.cssText = `--widthCard: ${widthCard}px; --procentPx: ${pxMinus.toFixed(2)}px`;
    });
}

resize();

window.addEventListener('resize', ()=> resize());
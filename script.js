
function setLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('title').innerText = "EcoVillage NFT Georgia: Eden Reborn";
        document.getElementById('subtitle').innerText = "Create the Future in Eden Reborn";
        document.getElementById('ico-button').innerText = "Join ICO";
        document.getElementById('about-title').innerText = "About Project";
        document.getElementById('about-text').innerText = "EcoVillage NFT Georgia tokenizes land to create Eden Reborn eco-village and metaverse.";
        document.getElementById('advantages-title').innerText = "Advantages";
        document.getElementById('advantages-list').innerHTML = "<li>5–10% Annual Staking</li><li>Quests and Metaverse</li><li>Accommodation Discounts</li>";
        document.getElementById('timer-title').innerText = "Time Left Until ICO Ends:";
        document.getElementById('timer-subtitle').innerText = "Don't miss your chance to be part of Eden Reborn.";
    } else {
        document.getElementById('title').innerText = "EcoVillage NFT Georgia: Eden Reborn";
        document.getElementById('subtitle').innerText = "Создай будущее в Eden Reborn";
        document.getElementById('ico-button').innerText = "Участвовать в ICO";
        document.getElementById('about-title').innerText = "О проекте";
        document.getElementById('about-text').innerText = "EcoVillage NFT Georgia токенизирует землю, создавая экодеревню и метавселенную Eden Reborn.";
        document.getElementById('advantages-title').innerText = "Преимущества";
        document.getElementById('advantages-list').innerHTML = "<li>Стейкинг 5–10% годовых</li><li>Квесты и метавселенная</li><li>Скидки на проживание</li>";
        document.getElementById('timer-title').innerText = "До конца ICO осталось:";
        document.getElementById('timer-subtitle').innerText = "Не упусти шанс стать частью Eden Reborn.";
    }
}

// Таймер
const countdownDate = new Date("June 30, 2025 23:59:59").getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с";

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "ICO завершено!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

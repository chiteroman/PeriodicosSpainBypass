// ==UserScript==
// @name         AntiAntiAd
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Elimina los anti anti anuncios de los periódicos de España
// @author       chiteroman <https://twitter.com/chiteroman>
// @match        https://www.elmundo.es/*
// @grant        none
// ==/UserScript==

window.addEventListener('scroll', function() {

    document.querySelectorAll('html, body')[0].style.top = 'auto';

    Array.from(document.querySelectorAll('html, body')).forEach(e => {
        e.style.overflow = 'auto';
        e.style.position = 'unset';
    });

    Array.from(document.querySelectorAll('iframe')).forEach(e => e.remove());

    Array.from(document.querySelectorAll('.ue-cintillo-premium-scroll, .ue-cintillo-premium')).forEach(e => e.remove());
});

// Por el momento solo está disponible en El Mundo

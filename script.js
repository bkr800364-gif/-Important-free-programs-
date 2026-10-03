document.addEventListener('DOMContentLoaded', () => {
    const previewToggle = document.getElementById('previewToggle');
    const demoBrowser = document.getElementById('demoBrowser');
    previewToggle.addEventListener('click', () => {
        demoBrowser.classList.toggle('dark-mockup');
        if (demoBrowser.classList.contains('dark-mockup')) {
            previewToggle.innerHTML = 'إعادة الوضع العادي ☀️';
            previewToggle.style.backgroundColor = '#ffffff';
            previewToggle.style.color = '#0f172a';
        } else {
            previewToggle.innerHTML = 'تفعيل الوضع الداكن 🌙';
            previewToggle.style.backgroundColor = '#0f172a';
            previewToggle.style.color = '#ffffff';
        }
    });
    const actualUserScript = `// ==UserScript==
// @name         درع العين الفائق - الوضع الداكن
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  تحويل ذكي لكافة المواقع الإلكترونية للوضع المظلم لحماية العين
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    const style = document.createElement('style');
    style.innerHTML = 'html { filter: invert(1) hue-rotate(180deg) !important; } img, video, iframe, canvas { filter: invert(1) hue-rotate(180deg) !important; }';
    document.head.appendChild(style);
})();`;
    const codeElement = document.querySelector('pre code');
    if(codeElement) {
        codeElement.textContent = actualUserScript;
    }
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    copyCodeBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(actualUserScript).then(() => {
            copyCodeBtn.textContent = 'تم النسخ بنجاح! ✓';
            copyCodeBtn.style.backgroundColor = '#22c55e';
            setTimeout(() => {
                copyCodeBtn.textContent = 'نسخ الكود 📋';
                copyCodeBtn.style.backgroundColor = '#2563eb';
            }, 3000);
        }).catch(err => {
            console.error('فشل في نسخ الكود: ', err);
        });
    });
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.glass-header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        }
    });
});
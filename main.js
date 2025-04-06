const languageSelect = document.getElementById('language-selector');
const translatableElements = document.querySelectorAll('[data-en]');

function translate(lang) {
    translatableElements.forEach(element => {
        const translation = element.dataset[lang];
        if (translation) {
            element.textContent = translation;
            if (element.placeholder) {
                element.placeholder = translation;
            }
        }
    });
}

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translate(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
});

const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
    languageSelect.value = savedLanguage;
    translate(savedLanguage);
} else {
    translate('en');
};
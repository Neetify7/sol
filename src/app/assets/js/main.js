document.addEventListener('keydown', function(event) {
    if (event.key === '`') {
        window.location.href = 'https://google.com';
    }
});

window.addEventListener('beforeunload', function (save) {
    save.preventDefault();
});
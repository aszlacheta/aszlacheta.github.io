(function() {
    // append end year in footer
    var copyrightsElement = document.querySelector('#copyrights');
    if (copyrightsElement) {
        copyrightsElement.append((` ${new Date().getFullYear()}`));
    }
})();

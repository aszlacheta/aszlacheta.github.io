(function toggleMenuTextColorOnDarkAreas() {
    var OFFSET = 40;
    var DARK_AREA_ELEMENTS = '.blackbg';
    var MAKE_LIGHTER_CLASSNAME = 'make-lighter';
    var menuElement = document.querySelector('header nav');

    function toggleMenuTextColorOnDarkAreas() {
        var darkAreaElements = document.querySelectorAll(DARK_AREA_ELEMENTS);
        var darkAreas = [];

        for (var i = 0; i < darkAreaElements.length; i++) {
            var element = darkAreaElements[i];

            var viewportOffset = element.getBoundingClientRect();
            var top = viewportOffset.top + window.scrollY;
            var height = viewportOffset.height;

            darkAreas.push([top, height]);
        }

        var scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || window.scrollY;
        var isNearbyDarkArea = darkAreas.some(([top, height]) => scrollTop + OFFSET > top && scrollTop + OFFSET < top + height)

        if (menuElement) {
            if (isNearbyDarkArea) {
                menuElement.classList.add(MAKE_LIGHTER_CLASSNAME);
            } else {
                menuElement.classList.remove(MAKE_LIGHTER_CLASSNAME);
            }
        }
    }

    toggleMenuTextColorOnDarkAreas();
    addEventListener("scroll", toggleMenuTextColorOnDarkAreas);
})();

(function toggleMenuTextColorOnDarkAreas() {
    var OFFSET = 40;
    var DARK_AREA_ELEMENTS = '.blackbg';
    var MAKE_LIGHTER_CLASSNAME = 'make-lighter';
    var menuElement = document.querySelector('header nav');

    function toggleMenuTextColorOnDarkAreas() {
        var darkAreaElements = document.querySelectorAll(DARK_AREA_ELEMENTS);
        var darkAreas = [];

        if (!document.body.classList.contains('show-menu')) {
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
    }

    toggleMenuTextColorOnDarkAreas();
    addEventListener("scroll", toggleMenuTextColorOnDarkAreas);
})();

(function addMenuToggleForSmallerScreens() {
    var BODY_SHOW_MENU_CLASS = 'show-menu';
    var NAV_SHOW_MENU_CLASS = 'show';

    var menuButton = document.querySelector('#toggle-menu');

    menuButton.addEventListener('click', function () {
        var nav = document.querySelector('header nav');

        if (nav.classList.contains(NAV_SHOW_MENU_CLASS)) {
            nav.classList.remove(NAV_SHOW_MENU_CLASS);
            document.body.classList.remove(BODY_SHOW_MENU_CLASS);
            document.body.style['marginTop'] = '0';
        } else {
            nav.classList.add(NAV_SHOW_MENU_CLASS);
            document.body.classList.add(BODY_SHOW_MENU_CLASS);

            setTimeout(function () {
                var viewportOffset = nav.getBoundingClientRect();

                var topMargin = viewportOffset.height;
                document.body.style['marginTop'] = topMargin + "px"
            }, 250);
        }
    });
})();

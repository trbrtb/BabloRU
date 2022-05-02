var cbpAnimatedHeader = (function () {
    var b = document.documentElement,
        g = document.querySelector(".header"),
        e = false,
        a = 1;

    function f() {
        window.addEventListener("scroll", function (h) {
            if (!e) {
                e = true;
                setTimeout(d, 250)
            }
        }, false)
    }

    function d() {
        var h = c();
        if (h >= a) {
            classie.add(g, "header-scroll")
        } else {
            classie.remove(g, "header-scroll")
        }
        e = false
    }

    function c() {
        return window.pageYOffset || b.scrollTop
    }
    f()
})();

// --------- classie ---------
(function (window) {
    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if (typeof define === 'function' && define.amd) {
        define(classie);
    } else {
        window.classie = classie;
    }
})(window);
// --------- classie ---------

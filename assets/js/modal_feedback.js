document.addEventListener('DOMContentLoaded', function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    document.querySelector('[data-target="modal"]').addEventListener('click', function (e) {
        e.preventDefault();
//        document.body.style.overflow = 'hidden';
        document.querySelector('#modal').style.marginLeft = scrollbar;
        document.querySelector('#modal').classList.add('modal-open');
    });
    document.querySelector('[data-target="close"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.body.style.overflow = 'visible';
//        document.querySelector('#modal').style.marginLeft = '0px';
        document.querySelector('#modal').classList.remove('modal-open');
    });
});
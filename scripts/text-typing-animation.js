(function mimicTyping() {
    var TxtType = function (element, toRotate, period) {
        this.toRotate = toRotate;
        this.element = element;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.children.item(0).innerText = this.txt;

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    function runTypingAnimation() {
        var typingElements = document.getElementsByClassName('typewrite');

        for (var i = 0; i < typingElements.length; i++) {
            var toRotate = typingElements[i].getAttribute('data-type');
            var period = typingElements[i].getAttribute('data-period');

            var element = typingElements[i];
            element.children.item(0).style['border-right'] = '0.08em solid orange';

            if (toRotate) {
                new TxtType(typingElements[i], JSON.parse(toRotate), period);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", runTypingAnimation);
})();

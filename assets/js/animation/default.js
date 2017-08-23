;var CVVP = CVVP || {}; CVVP.animation = CVVP.animation || {}; CVVP.animation.default = {
    /* Module variables */

    elSquares: null,
    elText: null,
    limit: 100,
    interval: 100,
    lastInterval: null,

    /**
     * Initialize of animation
     *
     * @param $el - DOM element where beginning animation
     */
    init: function($elSquares, $elText) {
        this.elSquares = $elSquares;
        this.elText = $elText;

        if (this.elSquares !== null && this.elText !== null) {
            for (i = 0; i < this.limit ; i++) {
                this.create(i);
                this.animateSquares(i);
                this.animateMyGitName();
            }
        }
    },
    /**
     * Create squares
     */
    create: function(index) {
        var newSquare = document.createElement('div');

        newSquare.setAttribute('class', 'square spin');
        newSquare.setAttribute('data-id', index);

        TweenMax.to(newSquare, 1, {rotation: 360, ease: Linear.easeNone, repeat: -1});

        this.elSquares.appendChild(newSquare);
    },
    /**
     * Animate squares
     */
    animateSquares: function(index) {
        var x = this.getRandomX();
        var y = this.getRandomY();
        var el = document.querySelector('[data-id="' + index +'"]');

        setInterval(function() {
            TweenLite.to(el, 0.5, {x: x, y: y});
        }, index * this.interval);
    },
    /**
     * Animate text
     */
    animateMyGitName: function() {
        var $this = this;
        setInterval(function() {
            TweenLite.to($this.elText, 1, {scale: 1.5, autoAlpha: 1});
        }, (this.limit - 1) * this.interval);
    },
    /**
     * Generate random number between min & max values. Negative || positive numbers.
     * @param max
     * @param min
     * @returns {number}
     */
    getNegativeOrPositiveNumber: function(max, min) {
        var num = Math.floor(Math.random() * (max - min) + min) + 1;
        num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        return num;
    },
    /**
     * Get random number for X Axe
     * @returns {*|number}
     */
    getRandomX: function() {
        return this.getNegativeOrPositiveNumber(window.outerWidth * 2, window.outerWidth);
    },
    /**
     * Get random number for Y Axe
     * @returns {*|number}
     */
    getRandomY: function() {
        return this.getNegativeOrPositiveNumber(window.outerHeight * 2, window.outerHeight);
    }
}

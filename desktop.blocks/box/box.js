/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('box', {

    onSetMod : {

        'closed': {
            'yes': function() {
                this.domElem.animate({
                    'margin-left' : '54em'
                }, 1000);
            },
            '': function() {
                this.domElem.css({
                    'margin-left' : 'auto'
                });
            }
        }

    }

});

})();

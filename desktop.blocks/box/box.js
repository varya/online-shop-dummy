/** @requires BEM */
/** @requires BEM.DOM */

(function($) {

BEM.DOM.decl('box', {}, {

    live : function() {
        this.liveBindTo('switcher', 'click', function(){
            this.toggleMod('closed', 'yes');
        });
    }

});

})(jQuery);

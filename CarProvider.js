var CarProvider = AbstractProvider.extend({
    init: function(options) {
        if (typeof options === 'undefined') {
            var options = {
                provider: 'Default Car Provider',
                type: 'Car'
            };
        }
        this._super(options);
    }

})
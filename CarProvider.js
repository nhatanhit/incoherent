var CarProvider = AbstractProvider.extend({
    init: function(options) {
        if (empty(options)) {
            var options = {
                provider: 'Default Car Provider',
                type: 'Car'
            };
        }
        this._super(options);
    }

})
var AbstractProvider = Class.extend({
    init: function(options) {
        this.providerName = options.provider;
        this.providerType = options.type;
        this.providerLogger = this.getProviderType() + '-prvdr-log';
    },
    getProviderName: function() {
        return this.providerName;
    },
    getProviderType: function() {
        return this.providerType;
    }
}); 
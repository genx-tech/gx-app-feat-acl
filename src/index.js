const {
    Feature,
    Helpers: { requireConfig },
} = require('@genx/app');
const { InvalidConfiguration } = require('@genx/error');

/**
 * General cloud storage feature
 * @module Feature_CloudStorage
 */

module.exports = {
    /**
     * This feature is loaded at service stage
     * @member {string}
     */
    type: Feature.SERVICE,

    /**
     * This feature can be grouped by serviceGroup
     * @member {boolean}
     */
    groupable: true,

    /**
     * Load the feature
     * @param {App} app - The app module object
     * @param {object} options - Options for the feature
     * @property {string} options.vendor - Cloud storage vendor.
     * @property {object} options.options - Storage driver options.
     * @returns {Promise.<*>}
     *
     * @example
     *
     * vendor: 'digitalocean',
     * options: {
     *
     * }
     */
    load_: async function (app, options, name) {
        //requireConfig(app, options, ['vendor', 'options'], name);
        //app.registerService(name, service);
    },
};

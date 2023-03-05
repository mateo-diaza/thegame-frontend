module.exports = function (api) {
    api.cache.forever();

    const presets = [];
    const plugins = ['macros'];

    return {
        presets,
        plugins
    };
}

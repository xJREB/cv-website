module.exports = (api) => {
    const isTest = api.env("test");

    return {
        presets: [
            [
                "@babel/env",
                {
                    // use ES modules for rollup and commonjs for jest
                    modules: isTest ? `commonjs` : false,
                    shippedProposals: true,
                },
            ],
            [
                "@babel/preset-react",
                {
                    runtime: "automatic",
                },
            ],
        ],
        plugins: ["@babel/plugin-transform-runtime"],
    };
};

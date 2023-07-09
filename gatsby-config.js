const path = require("path");

module.exports = {
    siteMetadata: {
        title: "Justus Bogner",
        description: "Researcher, Educator, Software Engineer",
        author: "Justus Bogner",
        social: {
            twitter: "https://twitter.com/JREB1990",
            mastodon: "https://mastodon.acm.org/@JREB1990",
            github: "https://github.com/xJREB",
            email: "justus.bogner@iste.uni-stuttgart.de",
            researchgate: "https://www.researchgate.net/profile/Justus-Bogner",
            googleScholar:
                "https://scholar.google.com/citations?user=m_ecDXgAAAAJ&hl=en",
            linkedIn: "https://www.linkedin.com/in/justus-bogner",
        },
        icon: "src/images/gatsby-icon.png",
        siteUrl: "https://xjreb.github.io",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: path.join(__dirname, "src", "images"),
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: path.join(__dirname, "src", "blogposts"),
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Justus Bogner",
                short_name: "JREB",
                start_url: "/",
                background_color: "#f7f0eb",
                theme_color: "#a2466c",
                display: "standalone",
                icon: "src/images/favicon-32x32.png",
            },
        },
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: ["G-6WHQTH3F0K"],
                gtagConfig: {
                    anonymize_ip: true,
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
    ],
};

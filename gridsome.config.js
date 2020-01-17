// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Kelvin M Ngunyi",
    siteDescription: "Full-time Software Engineer and aspiring tech rockstar!",
    transformers: {
        remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"],
            anchorClassName: "icon icon-link",
            plugins: [
                // ...global plugins
            ]
        }
    },
    plugins: [
        // Markdown
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Platform",
                baseDir: "./content/platforms",
                path: "*.md"
            }
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Portfolio",
                baseDir: "./content/portfolio",
                path: "./**/*.md",
                refs: {
                    status: {
                        typeName: "Status",
                        create: true
                    },
                    tools: {
                        typeName: "Tool",
                        create: true
                    }
                }
            }
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Experience",
                baseDir: "./content/experience",
                path: "./**/*.md"
            }
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Education",
                baseDir: "./content/education",
                path: "./**/*.md"
            }
        },

        // Netflify CMS
        {
            use: `gridsome-plugin-netlify-cms`,
            options: {
                publicPath: `/admin`
            }
        }
    ],
    templates: {
        Platform: "/platform/:title"
    }
};
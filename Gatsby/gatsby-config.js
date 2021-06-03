module.exports = {
  siteMetadata: {
    title: "Cano",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "tkm742ml",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
  ],
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Parth's Blog",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss"
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  templates: {
    BlogPost: "/blog/:slug",
    Tag: "/tags/:id"
  }
  
};

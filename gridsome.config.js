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

  templates: {
    BlogPost: "/blog/:slug",
    Tag: "/tags/:id"
  }
};

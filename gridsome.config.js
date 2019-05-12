// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Namo',
  transformers: {
    yamljson:{},
  },
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
          // pug: { /* Options for `pug-plain-loader` */ },
          // pugLoader: { /* Options for `pug-loader` */ }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: 
        {
          path: 'yamls/**/*.yaml',
          typeName: 'Yaml',
          yamljson: {
            plugins: [
              // ...local plugins
            ]
          }
        }
    }
  ],
}
// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
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
          path: 'markdowns/**/*.md',
          typeName: 'Markdown',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
    }
  ],
}
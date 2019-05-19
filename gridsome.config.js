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
    },
    {
      use: '@gridsome/source-filesystem',
      options: 
        {
          path: 'yamls/luts/**/*.yaml',
          typeName: 'Lut',
          yamljson: {},
        }
    }
  ],
}
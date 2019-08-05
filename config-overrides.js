const { override, fixBabelImports } = require('customize-cra');
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir);
}
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config.output={
        publicPath:'./'
    };
    
    config.resolve.alias={
        "@":resolve("src")
    }
    // console.log(config)
    return config;
  };
//   module.exports = override({

//     assetsPublicPath: '/',
//         alias:{
         
//             "@":resolve("src")
//         }

//   })
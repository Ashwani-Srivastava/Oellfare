var pp = require('preprocess');

/**
 * TODO:
 * Copy assets/${ngoName}.json to assets/ngo.json
 * Copy assets/${ngoName}-fund.json to assets/fund.json
 */
 
//npm run config theme=alor
//npm run config theme=charity
//npm run config theme=huruma
//npm run config theme=proffer
console.log(process.argv);

let theme;
if (process.argv.length === 3) {
    theme       =   process.argv[2].split('=')[1];
    console.log('theme name: ' + theme);
    pp.preprocessFileSync(`src/index.${theme}.html`, 'src/index.html');
}


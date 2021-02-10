var pp = require('preprocess');
 
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


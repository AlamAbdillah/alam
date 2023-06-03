import { create } from 'node:domain';
import fs from 'node:fs';

const createWebNative = (dir) => {
    fs.mkdirSync(`${dir}/css`,{recursive: true});
    fs.mkdirSync(`${dir}/js`,{recursive: true});


    const data_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alam themplate</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <h3>hello word</h3>
    <p>by alam</p>
    <script src="js/main.js"></script>
</body>
</html>`;
    const data_css = `* {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Roboto', sans-serif;
}`;
    const data_js = `function main () {
    // your logic
}
// ----or Moder Javascript
// const main () {
//     // your logic
// }`;

    fs.writeFileSync(`${dir}/index.html`, data_html, {encoding: 'utf-8'});
    fs.writeFileSync(`${dir}/css/style.css`, data_css, {encoding: 'utf-8'});
    fs.writeFileSync(`${dir}/js/main.js`, data_js, {encoding: 'utf-8'});

    return 'Succes create'
    // return process.cwd();
}

export default createWebNative;
/**
 * Created by nlev on 8/4/16.
 */
let path = require('path')
let open = require('open')

let localPath = path.dirname(require.main.filename)

open(path.join(localPath,'/client/html/index.html'), function (err) {
    if (err) throw err;
    console.log('The user closed the browser');
});
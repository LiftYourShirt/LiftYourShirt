require.config({
    baseUrl: 'js',
    paths: {
        lib: '../../../bower_components',
        jQuery: '../../../bower_components/jquery/dist/jquery',
        angular: './../../../bower_components/angular/angular'
    }
})
require(['angular', 'mainModule'])
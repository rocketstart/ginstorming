var elixir = require('laravel-elixir');

// Disable notify
process.env.DISABLE_NOTIFIER = true;

require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var nodeDir = 'node_modules/';

elixir(function(mix) {
    // APP STYLES
    mix.sass('app.scss');

    // VENDOR SCRIPTS
    mix.scripts([
        'jquery/dist/jquery.js',
    ], 'public/js/vendor.js', nodeDir);

    // COPY TASKS
    mix.copy(nodeDir + 'font-awesome/fonts', 'public/fonts');

    mix.browserify('app.js');

    mix.version(['css/app.css', 'js/app.js']);

    mix.browserSync({proxy: 'nabc.dev'});
});

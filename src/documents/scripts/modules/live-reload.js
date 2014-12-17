define('modules/live-reload', ['primus'], function (Primus) {
  (function() {     

        /* Did we just livereload? */
        var log = !!(localStorage && console && console.log && true);
        if ( log && localStorage.getItem('/docpad-livereload/reloaded') === 'yes' ) {
            localStorage.removeItem('/docpad-livereload/reloaded');
            console.log('LiveReload completed at', new Date());
        }

        /* Listen for the regenerated event and perform a reload of the page when the event occurs */
        var listen = function(){
            var primusConnection = new Primus('/docpad-livereload');
            primusConnection.on('data', function(data){
                if ( data && data.message ) {
                    if ( data.message === 'generateBefore' ) {
                        if ( log ) {
                            console.log('LiveReload started at', new Date());
                        }
                        if ( typeof document.getElementsByTagName !== 'undefined' ) {
                            document.getElementsByTagName('html')[0].className += ' wait';
                        }
                    }
                    else if ( data.message === 'generateAfter' ) {
                        if ( log ) {
                            localStorage.setItem('/docpad-livereload/reloaded', 'yes');
                        }
                        document.location.reload();
                    }
                }
            });
        };

        listen();

  })(); 
});

define([ 'live-reload-socket-io' ], function ( io ) {
    (function() {
        /* Did we just livereload? */
        var log = true && localStorage && console && console.log && true;
        if ( log && localStorage.getItem('/docpad-livereload/reloaded') === 'yes' ) {
            localStorage.removeItem('/docpad-livereload/reloaded');
            console.log('LiveReloaded at', new Date());
        }
        /* Listen for the regenerated event and perform a reload of the page when the event occurs */
        var listen = function(){
            var socket = io.connect('/docpad-livereload');
            socket.on('regenerated',function(){
                if ( log ) {
                    localStorage.setItem('/docpad-livereload/reloaded', 'yes');
                }
                document.location.reload();
            });
        };
        if ( typeof io !== 'undefined' ) {
            listen();
        } else {
            console.log( 'io is undefined' );
        }
    })();
});

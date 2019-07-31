(function() {
  "use strict";
  // Create a new window and get it
  nw.Window.open('https://github.com', {}, function(new_win) {
    // And listen to new window's focus event
    new_win.on('focus', function() {
      console.log('New window is focused');
    });
  });
})();
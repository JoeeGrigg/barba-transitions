// Define barba properties
Barba.transitionLength = 500;

// Define transition
var Transition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.runTransition.bind(this));
  },

  runTransition: function() {

    $('body').css('overflow', 'hidden');

    ////////////////////////////
    // Setup
    ////////////////////////////
    var transitionLength = parseInt(Barba.transitionLength),
        transitionTimeout = 100,
        transitionLengthSeconds = (transitionLength / 1000) + 's',
        transitionSelector = 'data-transition'; 
    ////////////////////////////
    
    // Set the animation time on all elements
    var allAnimationElements = $('[' + transitionSelector + ']');
    $.each(allAnimationElements, function() {
      $(this).css('animation-duration', transitionLengthSeconds).css('animation-delay', transitionLengthSeconds).css('animation-name', $(this).data('transition')).css('animation-fill-mode', 'forwards');
    })

    // Get all old elements with transitions
    var oldElements = $(this.oldContainer).find('[' + transitionSelector + ']');
    $.each(oldElements, function() {
      $(this).removeAttr('style');
    });

    // Trigger out transitions
    setTimeout(function(){
      $.each(oldElements, function() {
        $(this).css('animation-duration', transitionLengthSeconds).css('animation-delay', transitionLengthSeconds).css('animation-name', $(this).data('transition')).css('animation-direction', 'alternate-reverse').css('animation-delay', '0s').css('animation-fill-mode', 'forwards');
      });
    }, transitionTimeout);

    var x = this;
    function done(x) {

      // Remove old container and add new one
      x.oldContainer.style.visibility = 'hidden';
      x.newContainer.style.visibility = 'visible';
      setTimeout(function(){
        $('body').css('overflow', 'visible');
        $.each(allAnimationElements, function() {
          $(this).removeAttr('style');
        });
      }, transitionLength);

      // Scroll to top
      document.body.scrollTop = 0;

      // Done
      x.done();

    }

    setTimeout(function(){
      done(x);
    }, transitionLength + transitionTimeout);

  }
});

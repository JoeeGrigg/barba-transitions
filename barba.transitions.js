var Transition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.runTransition.bind(this));
  },

  runTransition: function() {

    ////////////////////////////
    // Setup
    ////////////////////////////
    if (Barba.transitionLength == undefined) { transitionLength = 500; }
    else { transitionLength = parseInt(Barba.transitionLength)}
    var transitionTimeout = 50,
        transitionLengthSeconds = (transitionLength / 1000) + 's',
        transitionSelector = 'data-transition'; 
    ////////////////////////////
    
    // Set the animation time on all elements
    allAnimationElements = $('[' + transitionSelector + ']');
    $.each(allAnimationElements, function() {
      $(this).css('animation-duration', transitionLengthSeconds).css('animation-delay', transitionLengthSeconds);
    })

    // Get all elements with transitions
    var cashEl = $(this.oldContainer),
        allTransitions = cashEl.find('[' + transitionSelector + ']'),
        transitions = [];

    $.each(allTransitions, function() {
      x = {};
      x['transition'] = $(this).attr(transitionSelector);
      $(this).removeAttr(transitionSelector).css('animation-direction', 'alternate-reverse').css('animation-delay', '0s');
      x['element'] = $(this);
      transitions.push(x);
    });

    // Trigger transitions
    setTimeout(function(){
      for (i = 0; i < transitions.length; i++) {
        var el = transitions[i];
        el['element'].attr('data-transition', el['transition']);
      }
    }, transitionTimeout);

    var x = this;
    function done(x) {

      // Remove old container and add new one
      x.oldContainer.style.visibility = 'hidden';
      x.newContainer.style.visibility = 'visible';

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

Barba.Pjax.getTransition = function() {
  return Transition;
};

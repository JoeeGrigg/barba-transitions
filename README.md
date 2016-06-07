Barba Transitions
=================

This is an extension to [Barba](http://barbajs.org/).

It adds a custom transition which makes it really easy to make elements transition
on and off the page.

# Getting started

To get started all you need to do is include Barba, a selector library such as
[Jquery](https://github.com/jquery/jquery) or [Cash](https://github.com/kenwheeler/cash),
I would suggest Cash as it is really light weight, and this library on your page.

From there, you initialise Barba as you normally would and the transitions will
automatically kick in.

Lastly, define your css transitions in your stylesheet and pass that name as the value of
the ```data-transition``` attribute on each element that you wish to animate.

## Example

### HTML

```
<!DOCTYPE HTML>
<html lang="en">
<head>
    <title>Index</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Home</h1>
  </header>
  <div id="barba-wrapper">
    <div class="barba-container">
      <section class="all-posts" data-transition="fadein">
        This is the main page content
      </section>
    </div>
  </div>

  <script src="cash.min.js" type="text/javascript"></script>
  <script src="barba.min.js" type="text/javascript"></script>
  <script src="barba.transitions.min.js" type="text/javascript"></script>
  <script src="main.js" type="text/javascript"></script>
</body>
</html>
```

### CSS

```
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

[data-transition=fadein] {
  animation-name: fadeIn;
}
```

### JS

```
$(function(){
  Barba.Pjax.start();
});
```

# Setting a custom transition time

To change the transition length it couldn't be simpler.

Define ```Barba.transitionLength``` in miliseconds in your JS, after Barba
is initialised and all transitions will use the newly defined time.

## Example

```
Barba.transitionLength = 1000;
```

This would set the transition length to be 1 second.

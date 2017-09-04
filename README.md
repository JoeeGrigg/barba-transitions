Barba Transitions
=================

This is an extension to [Barba.js](http://barbajs.org/).

With `barba-transitions` it's really easy to add CSS animations to any given element during Barba's page transitions.

# Installation

You can install it using [NPM](https://npmjs.org/) (requires [Node.js](http://nodejs.org/))
```
npm install barba-transitions --save
```
or just including the script in your page:
```html
<script src="barba.transitions.min.js" type="text/javascript"></script>
```

# Getting started

Initialise Barba.js as you normally would and the transitions will automatically kick in.

Simply define your CSS transitions in your stylesheet and pass its name as the value of
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
      <section class="all-posts" data-transition="fadeIn">
        This is the main page content
      </section>
    </div>
  </div>

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
```

### JS

```
window.onload = function() {
  Barba.Pjax.start();
}
```
You can find another example [here](https://github.com/JoeeGrigg/barba-transitions/tree/master/example)).

# Setting a custom transition time

Changing the transition length couldn't be simpler:

In your javascript, just define ```Barba.transitionLength``` in miliseconds after `Barba.Pjax.start()` and all transitions will use the newly defined time.

## Example

```
Barba.transitionLength = 1000;
```
This would set the transition length to be 1 second.

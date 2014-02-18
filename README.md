ArcTween.js
===========

A simple widget that turns a canvas into a Arc vizualizer that uses TweenLite to handle animation stuff.


Usage
=====


1. Include TweenLite.js and ArcTween.js in your HTML page.

		<script src="TweenLite.min.js"></script>
		<script src="ArcTween.js"></script>

2. Create a canvas in your page. Try to make a square one, or the outcome might be erratic :)

    <canvas id="arc1" width="120" height="120"></canvas>

3. Now, you can create arcs. Feed them with the reference to your canvas, and a value to display. The value should be normalized, so keep it between 0 and 1.

    var canvas = document.getElementById("arc1");
    var startValue = 0.1;
    var arc1 = new Arc( canvas, startValue );
  
4. Animate the arc to suit your needs, using the tween() method

    var newValue = 0.85; // normalized value, between 0 and 1
    var animationTime = 1; // in seconds
    var animationDelay = 0; // in seconds too
    
    arc1.tween( value, animationTime, animationDelay );
    
    
That's it.



Browser support
===============

It should run on every browser supporting the <canvas> element, so you're fine.



Credits
=======

Created by @boblemarin in Namur

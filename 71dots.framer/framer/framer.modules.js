require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"shake":[function(require,module,exports){
var handler, throttleInterval, x1, x2, y1, y2, z1, z2;

throttleInterval = exports.throttleInterval != null ? exports.throttleInterval : exports.throttleInterval = 1;

handler = Utils.throttle(throttleInterval, function() {
  return exports.onShake();
});

if (typeof window.DeviceMotionEvent !== 'undefined') {
  x1 = 0;
  y1 = 0;
  z1 = 0;
  x2 = 0;
  y2 = 0;
  z2 = 0;
  window.addEventListener('devicemotion', (function(e) {
    x1 = e.accelerationIncludingGravity.x;
    y1 = e.accelerationIncludingGravity.y;
    z1 = e.accelerationIncludingGravity.z;
  }), false);
  setInterval((function() {
    var change, sensitivity;
    sensitivity = exports.sensitivity != null ? exports.sensitivity : exports.sensitivity = 20;
    change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);
    if (change > sensitivity) {
      handler();
    }
    x2 = x1;
    y2 = y1;
    z2 = z1;
  }), 150);
}


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvVEovR29vZ2xlIERyaXZlL19EZXNpZ24vX0ZyYW1lci9wbGF5Z3JvdW5kLzcxLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi9Vc2Vycy9USi9Hb29nbGUgRHJpdmUvX0Rlc2lnbi9fRnJhbWVyL3BsYXlncm91bmQvNzEuZnJhbWVyL21vZHVsZXMvc2hha2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7OztBQ1BsQixJQUFBOztBQUFBLGdCQUFBLHNDQUFtQixPQUFPLENBQUMsbUJBQVIsT0FBTyxDQUFDLG1CQUFvQjs7QUFDL0MsT0FBQSxHQUFVLEtBQUssQ0FBQyxRQUFOLENBQWUsZ0JBQWYsRUFBaUMsU0FBQTtTQUN2QyxPQUFPLENBQUMsT0FBUixDQUFBO0FBRHVDLENBQWpDOztBQUlWLElBQUcsT0FBTyxNQUFNLENBQUMsaUJBQWQsS0FBbUMsV0FBdEM7RUFHSSxFQUFBLEdBQUs7RUFDTCxFQUFBLEdBQUs7RUFDTCxFQUFBLEdBQUs7RUFDTCxFQUFBLEdBQUs7RUFDTCxFQUFBLEdBQUs7RUFDTCxFQUFBLEdBQUs7RUFHTCxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBd0MsQ0FBQyxTQUFDLENBQUQ7SUFDckMsRUFBQSxHQUFLLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNwQyxFQUFBLEdBQUssQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQ3BDLEVBQUEsR0FBSyxDQUFDLENBQUMsNEJBQTRCLENBQUM7RUFIQyxDQUFELENBQXhDLEVBS0csS0FMSDtFQVNBLFdBQUEsQ0FBWSxDQUFDLFNBQUE7QUFHVCxRQUFBO0lBQUEsV0FBQSxpQ0FBYyxPQUFPLENBQUMsY0FBUixPQUFPLENBQUMsY0FBZTtJQUNyQyxNQUFBLEdBQVMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxFQUFBLEdBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxFQUFmLEdBQW9CLEVBQXBCLEdBQXlCLEVBQWxDO0lBQ1QsSUFBRyxNQUFBLEdBQVMsV0FBWjtNQUNJLE9BQUEsQ0FBQSxFQURKOztJQUlBLEVBQUEsR0FBSztJQUNMLEVBQUEsR0FBSztJQUNMLEVBQUEsR0FBSztFQVhJLENBQUQsQ0FBWixFQWFHLEdBYkgsRUFwQkoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMgaHR0cHM6Ly9naXRodWIuY29tL1JheVBTL0ZyYW1lci1Nb2R1bGUtU2hha2VFdmVudFxuXG50aHJvdHRsZUludGVydmFsID0gZXhwb3J0cy50aHJvdHRsZUludGVydmFsID89IDFcbmhhbmRsZXIgPSBVdGlscy50aHJvdHRsZSB0aHJvdHRsZUludGVydmFsLCAtPlxuICAgIGV4cG9ydHMub25TaGFrZSgpXG5cbiMgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTE1MzZcbmlmIHR5cGVvZiB3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICBcbiAgICAjIFBvc2l0aW9uIHZhcmlhYmxlc1xuICAgIHgxID0gMFxuICAgIHkxID0gMFxuICAgIHoxID0gMFxuICAgIHgyID0gMFxuICAgIHkyID0gMFxuICAgIHoyID0gMFxuXG4gICAgIyBMaXN0ZW4gdG8gbW90aW9uIGV2ZW50cyBhbmQgdXBkYXRlIHRoZSBwb3NpdGlvblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICdkZXZpY2Vtb3Rpb24nLCAoKGUpIC0+XG4gICAgICAgIHgxID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnhcbiAgICAgICAgeTEgPSBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueVxuICAgICAgICB6MSA9IGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56XG4gICAgICAgIHJldHVyblxuICAgICksIGZhbHNlXG5cbiAgICAjIFBlcmlvZGljYWxseSBjaGVjayB0aGUgcG9zaXRpb24gYW5kIGZpcmVcbiAgICAjIGlmIHRoZSBjaGFuZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBzZW5zaXRpdml0eVxuICAgIHNldEludGVydmFsICgtPlxuXG4gICAgICAgICMgU2hha2Ugc2Vuc2l0aXZpdHkgKGEgbG93ZXIgbnVtYmVyIGlzIG1vcmUpXG4gICAgICAgIHNlbnNpdGl2aXR5ID0gZXhwb3J0cy5zZW5zaXRpdml0eSA/PSAyMFxuICAgICAgICBjaGFuZ2UgPSBNYXRoLmFicyh4MSAtIHgyICsgeTEgLSB5MiArIHoxIC0gejIpXG4gICAgICAgIGlmIGNoYW5nZSA+IHNlbnNpdGl2aXR5XG4gICAgICAgICAgICBoYW5kbGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAjIFVwZGF0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgeDIgPSB4MVxuICAgICAgICB5MiA9IHkxXG4gICAgICAgIHoyID0gejFcbiAgICAgICAgcmV0dXJuXG4gICAgKSwgMTUwIl19
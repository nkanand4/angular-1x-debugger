# angular-1x-debugger
Debug AngularJS application by finding out what is the scope or binding on an element. You can request injected services too.

### How to use it.

Create a bookmarklet using the following javascript:

```javascript
javascript:(function(){var s=document.createElement('script');s.setAttribute('src','https://rawgit.com/nkanand4/angular-1x-debugger/master/main.js');s.setAttribute('type','text/javascript');document.querySelector('head').appendChild(s)}())
```

*Please note: If you notice your webpage reloading, after clicking on the bookmarklet, it means the debuggin was disabled in your application which has been just turned on. Kindly click on the bookmarklet again to re-include this javascript.*

 - Access scope of element by selecting it in developer tool or firebug and using function _scope($0)
 - Access binding markup of an element by selecting it and using function _binder($0)
 - Access service by using _inj('name-of-the-service').

var WebFontConfig = {
  google: { families: [ 'PT+Serif:400,700:latin,latin-ext' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

  function setRandomFortune() {
    var fortunes = [
      'Deleted code is debugged code.',
      'One of my most productive days was throwing away 1000 lines of code.',
    ];
    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementsByClassName('Header-fortuneText')[0].textContent = fortune;
  }

  var forEach = Function.prototype.call.bind(Array.prototype.forEach);

  function addSectionAnchors() {
    forEach(document.getElementsByTagName('h2'), function(titleHeader) {
      var id = titleHeader.parentNode.id,
          anchor;

      if (id) {
        anchor = document.createElement('a');
        anchor.className = 'Box-anchor';
        anchor.href = '#' + id;
        anchor.textContent = '¶';
        titleHeader.parentNode.insertBefore(anchor, titleHeader);
      }
    });
  }

  function showEmail() {
    forEach(document.getElementsByClassName('u-contactLink'), function(link) {
      var icon = link.getElementsByClassName('u-icon')[0];

      link.textContent = ['.me', 'olgierd'].concat(['@'].concat('kontakt')).reverse().join('');
      link.href = [link.textContent, 'mailto'].reverse().join(':');

      if (icon) {
        link.insertBefore(icon, link.firstChild);
      }
    });
  }

  showEmail();
  setRandomFortune();
  addSectionAnchors();
})();

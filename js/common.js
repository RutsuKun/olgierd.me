var WebFontConfig = {
  google: { families: [ 'Source+Serif+Pro:400,700:latin,latin-ext' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

  [].forEach.call(document.getElementsByTagName('h2'), function(titleHeader) {
    var id = titleHeader.parentNode.id,
        anchor;

    if (id) {
      anchor = document.createElement('a');
      anchor.className = 'Box-anchor';
      anchor.href = '#' + id;
      anchor.textContent = '¶';
      titleHeader.appendChild(anchor);
    }
  });

  var email = document.getElementById('email');
  email.firstChild.textContent = ['.me', 'olgierd'].concat(['@'].concat('kontakt')).reverse().join('');
  email.firstChild.href = [email.firstChild.textContent, 'mailto'].reverse().join(':');
})();

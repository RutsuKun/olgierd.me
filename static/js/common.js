var WebFontConfig = {
  google: { families: [ 'PT+Serif:400,700:latin,latin-ext' ] }
};
(function(doc) {
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
    doc.getElementsByClassName('Header-fortuneText')[0].textContent = fortune;
  }

  function createTag(tagName, attributes, children) {
    var tag = doc.createElement(tagName);

    if (attributes) {
      for (var name in attributes) {
        if (attributes.hasOwnProperty(name)) {
          tag[name] = attributes[name];
        }
      }
    }

    if (children) {
      children.forEach(tag.appendChild.bind(tag));
    }

    return tag;
  }

  var deobjectify = function(fn) {
    return Function.prototype.call.bind(fn);
  };
  var forEach = deobjectify(Array.prototype.forEach);
  var by = {
    class: deobjectify(doc.getElementsByClassName),
    tag: deobjectify(doc.getElementsByTagName),
    css: deobjectify(doc.querySelectorAll),
  };

  function addSectionAnchors() {
    forEach(by.tag(doc, 'h2'), function(titleHeader) {
      var id = titleHeader.parentNode.id,
          anchor;

      if (id) {
        anchor = createTag('a', {
          className: 'Box-anchor',
          href: '#' + id,
          textContent: '¶',
        });
        titleHeader.parentNode.insertBefore(anchor, titleHeader);
      }
    });
  }

  function makeSectionsTogglable() {
    function toggleBox(e) {
      this.classList.toggle('Box--collapsed');
    }

    forEach(by.class(doc, 'Box-title'), function(titleHeader) {
      var box = titleHeader.parentNode;

      if (!box.querySelector('.Box-content')) {
        return;
      }

      var toggleIcon = createTag('span', {
        className: 'u-icon-collapse Box-toggleIcon'
      });
      var toggleHint = createTag('span', {
        className: 'u-srOnly'
      });
      var toggleButton = createTag('button', {
        className: 'Box-toggleButton',
        title: 'Zwiń/rozwiń sekcję'
      }, [toggleIcon, toggleHint]);

      toggleButton.addEventListener('click', toggleBox.bind(box));
      titleHeader.insertBefore(toggleButton, titleHeader.firstChild);
    });
  }

  function showEmail() {
    forEach(by.class(document, 'u-contactLink'), function(link) {
      var icon = link.getElementsByClassName('u-icon')[0];

      link.textContent = ['.me', 'olgierd'].concat(['@'].concat('kontakt')).reverse().join('');
      link.href = [link.textContent, 'mailto'].reverse().join(':');

      if (icon) {
        link.insertBefore(icon, link.firstChild);
      }
    });
  }

  function createLabelFilters() {
    function filterByLabel(e) {
      e.target.blur();
      var label = e.target.getAttribute('data-label');
      forEach(by.class(document, 'Writing'), function(writing) {
        if (!writing.querySelector('[data-label="' + label + '"]')) {
          writing.classList.add('Writing--filtered');
        } else {
          writing.classList.remove('Writing--filtered');
        }
      });

      if (by.class(doc, 'Writing--filtered').length > 0) {
        showResetButton();
      } else {
        hideResetButton();
      }
    }

    function showResetButton() {
      resetButton.style.display = '';
    }

    function hideResetButton() {
      resetButton.style.display = 'none';
    }

    function resetFilters() {
      forEach(by.class(doc, 'Writing--filtered'), function(writing) {
        writing.classList.remove('Writing--filtered');
      });
      hideResetButton();
    }

    var resetButton = createTag('button', {
      className: 'Writings-resetButton',
      textContent: '← Pokaż wszystkie'
    });
    resetButton.addEventListener('click', resetFilters);
    forEach(by.css(doc, '#teksty .Box-title'), function(header) {
      header.appendChild(resetButton);
    });
    hideResetButton();

    return forEach(by.class(doc, 'Writing-label'), function(label) {
      var button = createTag('button', {
        className: 'Writing-label'
      });
      button.setAttribute('data-label', label.getAttribute('data-label'));
      while (label.firstChild) {
        button.appendChild(label.firstChild);
      }
      label.parentNode.insertBefore(button, label);
      label.parentNode.removeChild(label);
      button.addEventListener('click', filterByLabel);
    });
  }

  showEmail();
  setRandomFortune();
  addSectionAnchors();
  makeSectionsTogglable();
  createLabelFilters();
})(document);

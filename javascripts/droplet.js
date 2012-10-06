// Generated by CoffeeScript 1.3.3
(function() {
  var displayClippings, dropFile, parseClippings, selectBooks, shareQuote, showBooks;

  this.book = $$({
    view: {
      format: '<li><a href="#" data-bind="title"></a></li>'
    },
    controller: {
      'click a': function() {
        var title;
        title = this.model.get('title');
        $('.dropdown-toggle').text(title);
        return selectBooks(title);
      }
    }
  });

  this.quote = $$({
    view: {
      format: '<tr>\n <td>\n   <div class="share">\n     <div class="buttons">\n       <a href="#" id="twitter" class="sharebutton">\n         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="72px" height="72px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="twitter-5-icon" d="M256,90c91.742,0,166,74.244,166,166c0,91.741-74.245,166-166,166c-91.743,0-166-74.245-166-166 C90,164.259,164.244,90,256,90 M256,50C142.229,50,50,142.229,50,256s92.229,206,206,206s206-92.229,206-206S369.771,50,256,50 L256,50z M368.797,201.997c-7.712,3.42-15.999,5.732-24.697,6.771c8.876-5.322,15.696-13.748,18.906-23.79 c-8.311,4.928-17.512,8.506-27.307,10.435c-7.843-8.357-19.02-13.579-31.387-13.579c-27.756,0-48.16,25.902-41.889,52.8 c-35.736-1.793-67.423-18.913-88.63-44.928c-11.265,19.323-5.844,44.61,13.308,57.409c-7.049-0.223-13.682-2.158-19.478-5.379 c-0.466,19.922,13.811,38.552,34.489,42.708c-6.052,1.646-12.681,2.023-19.419,0.735c5.472,17.084,21.354,29.516,40.17,29.862 c-18.079,14.169-40.849,20.495-63.661,17.807c19.028,12.2,41.632,19.32,65.915,19.32c79.834,0,124.939-67.433,122.222-127.911 C355.741,218.194,363.031,210.62,368.797,201.997z"/></svg>\n       </a>\n       <a href="#" id="tumblr" class="sharebutton">\n         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="72px" height="72px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="tumblr-circle-outline-icon" d="M256.417,90c44.34,0,86.026,17.267,117.38,48.62c31.354,31.354,48.62,73.04,48.62,117.38 c0,44.34-17.267,86.026-48.62,117.38c-31.354,31.353-73.04,48.62-117.38,48.62s-86.026-17.268-117.38-48.62 c-31.354-31.354-48.62-73.04-48.62-117.38c0-44.34,17.267-86.026,48.62-117.38C170.391,107.267,212.077,90,256.417,90 M256.417,50 c-113.771,0-206,92.229-206,206s92.229,206,206,206s206-92.229,206-206S370.188,50,256.417,50L256.417,50z M235.171,147.038 c-1.414,11.436-3.995,20.847-7.742,28.249c-3.745,7.406-8.714,13.742-14.91,19.023c-6.193,5.278-13.63,9.335-22.318,12.163v31.618 h24.303v77.772c0,10.135,1.059,17.866,3.187,23.2c2.121,5.337,5.938,10.376,11.441,15.115c5.497,4.739,12.145,8.386,19.941,10.946 c7.79,2.556,16.752,3.837,26.89,3.837c8.931,0,17.241-0.896,24.925-2.687c7.68-1.796,16.265-4.918,25.746-9.381v-34.899 c-11.119,7.306-22.296,10.96-33.525,10.96c-6.322,0-11.939-1.47-16.844-4.42c-3.705-2.174-6.242-5.093-7.605-8.746 c-1.364-3.652-2.042-11.914-2.042-24.778v-56.92h52.698v-34.839h-52.698v-56.214H235.171z"/></svg>\n       </a>\n       <a href="#" id="facebook" class="sharebutton">\n         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="72px" height="72px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">                      <path id="facebook-circle-outline-icon" d="M256.417,90c44.34,0,86.026,17.267,117.38,48.62c31.354,31.354,48.62,73.04,48.62,117.38                        c0,44.34-17.267,86.026-48.62,117.38c-31.354,31.353-73.04,48.62-117.38,48.62s-86.026-17.268-117.38-48.62                        c-31.354-31.354-48.62-73.04-48.62-117.38c0-44.34,17.267-86.026,48.62-117.38C170.391,107.267,212.077,90,256.417,90 M256.417,50                        c-113.771,0-206,92.229-206,206s92.229,206,206,206s206-92.229,206-206S370.188,50,256.417,50L256.417,50z M228.111,218.133h-23.517                        v38.386h23.517v112.764h45.22V256.04h31.551l3.358-37.907h-34.909c0,0,0-14.155,0-21.593c0-8.938,1.801-12.477,10.438-12.477                        c6.957,0,24.471,0,24.471,0v-39.347c0,0-25.797,0-31.309,0c-33.649,0-48.82,14.814-48.82,43.186                        C228.111,212.614,228.111,218.133,228.111,218.133z"/></svg>\n       </a>\n     </div>\n   </div>\n   <div class="quote">\n     <h2 data-bind="text"/>\n     <div class="info" style="display:none;">\n       <strong data-bind="author"/> in <strong data-bind="title"/>  &sect;  <span data-bind="location"/>\n     </div>\n   </div>\n </td>\n</tr>'
    },
    controller: {
      'hover h2': function() {
        return this.view.$('.info').stop().slideDown();
      },
      'mouseout h2': function() {
        return this.view.$('.info').stop().slideUp();
      },
      'click .sharebutton': function(event) {
        var media;
        console.log(event);
        if (event.target.childElementCount === 0) {
          media = event.target.parentElement.parentElement.id;
        } else {
          media = event.target.parentElement.id;
        }
        console.log(media);
        return shareQuote(media, this.model);
      },
      'click h2': function() {
        $('.share:visible').fadeOut(200);
        this.view.$('.share').show();
        this.view.$('.share').css('width', '0%');
        return this.view.$('.share').animate({
          'width': '100%'
        }, 350);
      },
      'click .share': function() {
        return this.view.$('.share').fadeOut(200);
      }
    }
  });

  this.quotes = [];

  this.books = {};

  dropFile = function() {
    return console.log(this);
  };

  shareQuote = function(media, message) {
    var author, sm, text, title;
    title = message.get('title');
    author = message.get('author');
    text = message.get('text');
    sm = {
      facebook: "https://www.facebook.com/dialog/feed?\napp_id=152073644937064&\npicture=http://f.cl.ly/items/0A1R3h3P1Y1v3j3Z2P3E/quotes.png&\nname=" + text + "&\ncaption=" + author + "%20in%20" + title + "&\nredirect_uri=http://jellea.github.com/klartext/posted.html",
      twitter: "http://twitter.com/share?text=" + text + "%20-%20" + author + "%20in%20" + title + "&url=",
      tumblr: "http://www.tumblr.com/share/quote\n?source=" + author + "%20in%20" + title + "\n&quote=" + text
    };
    if (media === 'twitter' && ("" + text + " -" + author + " in " + title).length > 144) {
      return $.ajax({
        type: 'POST',
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        data: "{'longUrl':'http://jellea.github.com/klartext/showquote.html?text=" + text + "&author=" + author + "&title=" + title + "'}",
        contentType: 'application/json',
        processData: false,
        success: function(data) {
          console.log(data);
          return window.open(sm.twitter + data);
        }
      });
    } else {
      return window.open(sm[media]);
    }
  };

  parseClippings = function(data) {
    var clip, clipping, clippings, note, _i, _len;
    clippings = data.split('==========');
    window.notes = [];
    for (_i = 0, _len = clippings.length; _i < _len; _i++) {
      clip = clippings[_i];
      if (clip.indexOf("Added on ") !== -1) {
        clipping = clip.split('Added on ');
        note = {};
        note.title = clipping[0].split('\r\n- ')[0].replace('\r\n', '').replace(/\([\w\s.]+\)$/, '');
        books[note.title] = $$(book, {
          'title': note.title
        });
        note.author = clipping[0].split('\r\n- ')[0].replace('\r\n', '').match(/\([\w\s.]+\)$/)[0].replace(/[\(\)]/g, '');
        note.location = clipping[0].split('\r\n-')[1].replace('\r\n', '').replace('|', '').replace('   ', '').replace(' |', '');
        note.text = clipping[1].split('\r\n\r\n')[1].replace('\r\n', '');
        window.notes.push(note);
      }
    }
    showBooks();
    displayClippings(window.notes);
    return $('#dropview').slideUp(500, function() {
      return $(window.frame).animate({
        height: 600,
        width: 900
      }, 350, function() {
        return $('#listview').slideDown(500);
      });
    });
  };

  showBooks = function() {
    var i, _i, _len, _ref, _results;
    _ref = Object.keys(books);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      _results.push($$.document.append(books[i], '#booklist'));
    }
    return _results;
  };

  selectBooks = function(title) {
    var newarray, q, _i, _len, _ref;
    newarray = [];
    _ref = window.notes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      q = _ref[_i];
      if (q.title === title) {
        newarray.push(q);
      }
    }
    return displayClippings(newarray);
  };

  displayClippings = function(clippings) {
    var clip, key, q, _i, _j, _len, _len1, _ref, _results;
    for (_i = 0, _len = quotes.length; _i < _len; _i++) {
      q = quotes[_i];
      q.destroy();
    }
    _ref = clippings.reverse();
    _results = [];
    for (key = _j = 0, _len1 = _ref.length; _j < _len1; key = ++_j) {
      clip = _ref[key];
      quotes[key] = $$(quote, clip);
      $$.document.append(quotes[key], '#listview table');
      if (key > 100) {
        break;
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  $('#seeall').click(function() {
    return displayClippings(window.notes);
  });

  $(window).on('app-ready', function() {
    var osxpath;
    window.fs = window.require("fs");
    osxpath = '/Volumes/Kindle/documents/My\ Clippings.txt';
    return fs.readFile(osxpath, 'utf-8', function(err, data) {
      if (err) {
        return console.log(err);
      } else {
        fs.readFile(osxpath + '.backup', 'utf-8', function(err, data) {
          if (err) {
            return fs.writeFile(osxpath + '.backup', data, 'utf-8');
          }
        });
        return parseClippings(data);
      }
    });
  });

  $(document).ready(function() {
    var dataArray;
    $.event.props.push('dataTransfer');
    dataArray = [];
    $('#dropzone').bind('dragenter', function() {
      $('#dropzone').css('color', '#9C0001');
      return false;
    });
    $('#dropzone').bind('drop', function(e) {
      var files, reader;
      files = e.dataTransfer.files;
      console.log(files);
      if (files[0].type === "text/plain" && files[0].name === "My Clippings.txt") {
        console.log("test passed!");
        reader = new FileReader();
        reader.addEventListener('loadend', function() {
          parseClippings(reader.result);
          return $('#listview').slideDown(500, false);
        });
        reader.readAsText(files[0]);
      }
      return false;
    });
    $('#dropview a').click(function() {
      return $.get('My Clippings.txt', function(data) {
        parseClippings(data);
        return $('#listview').slideDown(500);
      });
    });
    return $('#dropzone').bind('drop', function() {
      return false;
    });
  });

}).call(this);
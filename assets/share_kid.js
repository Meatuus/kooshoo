$(function() {
  var clicks = 0;
  $('button').on('click', function() {
    clicks++;
    var percent = Math.min(Math.round(clicks / 4 * 100), 100);
    $('.percent').width(percent + '%');
    $('.number').text(percent + '%');
  });

  $('.facebook').on('click', function() {
    var w = 580, h = 300,
        left = (screen.width/2)-(w/2),
        top = (screen.height/2)-(h/2);

    if ((screen.width < 480) || (screen.height < 480)) {
      window.open ('http://www.facebook.com/share.php?u=https://www.indiegogo.com/projects/the-best-kids-pants-in-the-world', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    } else {
      window.open ('http://www.facebook.com/share.php?u=https://www.indiegogo.com/projects/the-best-kids-pants-in-the-world', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);   
    }
  });

  $('.twitter').on('click', function() {
    var loc = encodeURIComponent('https://www.indiegogo.com/projects/the-best-kids-pants-in-the-world'),
        title = encodeURIComponent("These amazing kids pants could save 12 million baby garments a year from landfills!"),
        w = 580, h = 300,
        left = (screen.width/2)-(w/2),
        top = (screen.height/2)-(h/2);

    window.open('http://twitter.com/share?text=' + title + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  });

  $('.email').on('click', function() {
    var body = "I just discovered this great ethical fashion company raising money to launch super cute kids pants. The pants are made from organic cotton and dyed by hand in California. What makes them particularly unique is they are designed to fit 3X longer than other kids pants. In other words, they growi with a growing child. This simple innovation could save 12 million baby garments from landfills every year! Here's the campaign - it`s well worth a look: www.indiegogo.com/projects/the-best-kids-pants-in-the-world",
        title = "I thought of you when I saw this project";
    window.location.href = 'mailto:?subject=' + title + '&body=' + body ;
  });

  $('.play').on('click', function() {
    window.location.href = "https://www.indiegogo.com/projects/the-best-kids-pants-in-the-world";
  });

});
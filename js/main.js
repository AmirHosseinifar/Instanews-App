$(function () {
  function hideLoading() {
    $('.loading').hide();
  }
  hideLoading();
  $('#select').selectric();


  $('#select').on('change', function() {
    $('.header').addClass('to-top');
    $('.loading').show();
    $('.news').empty();
    var storyString = '';
    var runCount= 0;
    var section = this.value;
    var url = 'https://api.nytimes.com/svc/topstories/v2/'+ section + '.json';
    url += '?' + $.param({
  'api-key': 'd84a476d118d4f00a74b79e6bf7001d7'
    });
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(data) {
      hideLoading();
      $.each(data.results, function(index, value) {
        if (value.multimedia.length >= 5 && runCount < 12 && value.multimedia[4].width >= 2048) {
        storyString += '<div class="news-cell"><a href="'+ value.url +'" target="_blank"><img src="'+value.multimedia[4].url+'" class="news-image"><div class="abstract-container"><p class="news-abstract">'+value.abstract+'</p></div></a></div>';
        runCount++ ; 
        }

      })
      $('.news').append(storyString)
    }).fail(function() {
      hideLoading();
      $('.news').append('<p class="errormsg">Sorry, something went wrong.</p>');
    });

  });

  

});
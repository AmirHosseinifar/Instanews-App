$(function () {

  $('#select').on('change', function (event) {
    event.preventDefault();
    var selected = this.value;
    $(".news").empty();
    $('.loading').show();
    var story="";
    var count=0;
    var url = 'https://api.nytimes.com/svc/topstories/v2/'+selected+'.json';

    url += '?' + $.param({
      'api-key': 'd84a476d118d4f00a74b79e6bf7001d7'
    });

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function (data) {
      
      $.each(data.results, function(index, value){
       if( value.multimedia.length >=5 && count<12 && value.multimedia[4].width >= 2048){story += '<div class=story-part>'<a href="'+ value.url +'" target="_blank"><img src="'+value.multimedia[4].url+'" class="story-image"><div class="abstract-container"><p class="story-abstract">'+value.abstract+'</p></div></a></div>';
       count ++;
}
      });
      $('.news').append(story)

     }).fail(function (err) {
      $('.news').append('<p>Sorry, nothing was found.</p>');
    });

  

  });
});

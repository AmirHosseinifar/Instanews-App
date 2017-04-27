$(function (){
  $('#select').on(
    'change', function (){
      var url = "https://api.nytimes.com/svc/topstories/v2/politics.json";
url += '?' + $.param({
  'api-key': "d84a476d118d4f00a74b79e6bf7001d7"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

    
  )
});
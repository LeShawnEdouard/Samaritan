var queryURL = "https://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica";

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
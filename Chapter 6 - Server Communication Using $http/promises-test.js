$http.get('/api/server-config')
  .then(function(configResponse) {
    return $http.get('/api/' + configResponse.data.USER_END_POINT);

  })
  .then(function(userResponse) {
    return $http.get('/api/' + userResponse.data.id + '/items');
    
  })
  .then(function(itemResponse) {
    // Display items here

  },
  function(error) {
    // Common error handling
});

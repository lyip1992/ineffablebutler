muniButlerApp.factory('User', function(Auth){
  var user = {};

  user.username = '';
  user.firstName = '';
  user.loginMethod = '';
  user.routes = [];
  // user.trip is the current route the user is creating
  user.trip = {
    from: '',
    to: ''
  };

  // user.routes is an array of objects
  // each object contains two addresses and two options
  // {
  //   to: '944 Market St',
  //   from: '13333 Candy Lane',
  //   route: ['38R', 'Geary Blvd & 6th Ave'],
  // }

  // adds routes to the user.routes array
  // home page displays routes in the user.routes array
  user.addRoute = function(obj){
    var route = {
      id: user.routes.length, 
      from: obj.from,
      to: obj.to,
      route: obj.route
    };

    user.routes.push(route);
    console.log(route);
    return route;
  };

  user.removeRoute = function(id){
    var removed = user.routes.splice(id, 1);
    return removed;
  };

  return user;
});



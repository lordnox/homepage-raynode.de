var app = angular.module('app', [
  'ngAnimate',
  'ui.router',
  'configuration'
])

  .config(function ($stateProvider, configProvider, $locationProvider) {

    var template = configProvider.template('app')
      , root = {
          abstract: true,
          views: {
            '@': {
              template: template.abstract,
            },
            navigation: {
              templateUrl: template('navigation')
            }
          }
        };

    // if this is a non-root url...
    if(window.location.pathname !== "/") {
      // add the path to the current directory as a base for the abstract state
      root.url = window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/"));
    }



    /**
     *    Define an abstract state that itself defines the navigation element and a container for the
     *    sub-states
     **/
    $stateProvider
      .state('app', root)
      .state('app.home', {
        url: '/index.html',
        templateUrl: template('index')
      })
      .state('app.about', {
        url: '/about.html',
        templateUrl: template('about')
      })
  })

;



angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "tabs.html"
      })
      .state('tabs.home', {
          url: "/home",
          views: {
              'home-tab': {
                  templateUrl: "home.html",
                  controller: 'HomeTabCtrl'
              }
          }
      })
      .state('tabs.facts', {
          url: "/facts",
          views: {
              'home-tab': {
                  templateUrl: "facts.html"
              }
          }
      })
      .state('tabs.facts2', {
          url: "/facts2",
          views: {
              'home-tab': {
                  templateUrl: "facts2.html"
              }
          }
      })
      .state('tabs.about', {
          url: "/about",
          views: {
              'about-tab': {
                  templateUrl: "about.html"
              }
          }
      })
      .state('tabs.navstack', {
          url: "/navstack",
          views: {
              'about-tab': {
                  templateUrl: "nav-stack.html"
              }
          }
      })
      .state('tabs.contact', {
          url: "/contact",
          views: {
              'contact-tab': {
                  templateUrl: "contact.html"
              }
          }
      })
      .state('tabs.search', {
          url: '/search',
          views: {
              'home-tab': {
                  templateUrl: 'search.html'
              }
          }
      })
      .state('tabs.settings', {
          url: '/settings',
          views: {
              'home-tab': {
                  templateUrl: 'settings.html'
              }
          }
      });


    $urlRouterProvider.otherwise("/tab/home");

})
.controller('NavCtrl', function ($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicHistory, $timeout) {
    $scope.showLeftMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

    //open popup with backview title when hold on back navigation button
    $scope.showBackViewTitle = function () {
        var myPopup = $ionicPopup.alert({
            title: 'Back View Title',
            template: 'You are going to: ' + $ionicHistory.backTitle()
        });

        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });

        $timeout(function () {
            myPopup.close(); //close the popup after 2 seconds for some reason
        }, 2000);
    };

})
.controller('HomeTabCtrl', function ($scope) {
});
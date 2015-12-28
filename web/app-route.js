app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.otherwise({
            redirectTo: '/'
        });

        $routeProvider.when('/', {
            templateUrl: "main.html"
        });
    }]);
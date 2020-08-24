module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
    
            var data = {
                message: 'The assignment'
            };
    
            return data;
        }
    });

    //Add route
    server.route({
        method: 'GET',
        path: '/add/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 + num2
            };
    
            return data;
        }
    });

    //Subtract route
    server.route({
        method: 'GET',
        path: '/substract/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 - num2
            };
    
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/metrics',
        handler: function (request, h) {
    
            var data = {
                health: 'server is healthy'
            };
    
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/readiness',
        handler: function (request, h) {
    
            var data = {
                HTTP: '200',
                message: 'service is ready to take requests'
            };
    
            return data;
        }
    });


    server.route({
        method: 'GET',
        path: '/liveness',
        handler: function (request, h) {
    
            var data = {
                HTTP: '200',
                message: 'service is alive'
            };
    
            return data;
        }
    });



    server.route({
        method: 'GET',
        path: '/random/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

                return Math.floor(
                  Math.random() * (num1 - num2) + num1
                )
              
              
        }
    });

   

    //Division route
    server.route({
        method: 'GET',
        path: '/division/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 / num2
            };
    
            return data;
        }
    });
}
/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define([
    './Example.developersDoc.Model'
], function (
    ExampledevelopersDocModel
) {
    'use strict';

    function service (context) {
        var response = {};

        switch (context.request.method) {
            case 'GET':
                response = ExampledevelopersDocModel.get(context.request)
                break;
            case 'POST':
                response = ExampledevelopersDocModel.post(context.request)
                break;
        }

        context.response.write(JSON.stringify(response));
    }

    return {
        service: service
    }
})

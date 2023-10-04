/**
* @NApiVersion 2.x
* @NModuleScope TargetAccount
*/
define(['N/record', 'N/search', 'N/runtime'], function (record, search, runtime) {
    'use strict';

    var ExampledevelopersDocModel = {
        // get: function (request) {
        //     var data = {
        //         message: 'This is a message sent from the server that your record created successfully in netsuite record type!'
        //     }

        //     return data
        // },

        get: function (request) {
            //var type = 'customrecord_user_preferences';
        
            // var filters = [
            //     ['custrecord_user_preferences_owner', search.Operator.ANYOF, runtime.getCurrentUser().id]
            // ];
            var filters = [];
        
            //var columns = ['internalid', 'custrecord_user_preferences_type', 'custrecord_user_preferences_value'];
        
            if (request.parameters.internalid) {
                filters.push({
                    name: 'internalid', 
                    operator: search.Operator.IS, 
                    values: request.parameters.internalid
            });
            }
        
            var mySearch = search.create({
                type: 'customrecord13',
                filters: filters,
                columns: ['internalid', 'custrecord9', 'custrecord10']
            })
            var searchResults = mySearch.run().getRange({start: 0, end: 1000});
        
            var mappedResults = searchResults.map(function (result) {
                return {
                    internalid: result.getValue('internalid'),
                    carName: result.getValue('custrecord9'),
                    carNumber: result.getValue('custrecord10')
                }
            });
        
            return mappedResults.length == 1 ? mappedResults[0] : mappedResults
        },
        
        post: function (request) {
            var body = JSON.parse(request.body);
        
            var developersDoc = record.create({
                type: 'customrecord13'
            });
        
            // developersDoc.setValue({
            //     fieldId: 'owner',
            //     value: runtime.getCurrentUser().id
            // });
        
            developersDoc.setValue({
                fieldId: 'custrecord9',
                value: body.carName
            });
        
            developersDoc.setValue({
                fieldId: 'custrecord10',
                value: body.carNumber
            });
        
            return developersDoc.save()
        }
        
    }

    return ExampledevelopersDocModel
})

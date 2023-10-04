define('Example.developersDoc.Model',
[
    'SCModel',
    'Utils'
],
function
(
    SCModelModule,
    Utils
) {
    'use strict';
 
    var SCModel = SCModelModule.SCModel;
 
    // function ExampledevelopersDoc () {
    //     SCModel.call(this);

    function ExampledevelopersDoc (model, options) {
        SCModel.call(this, model, options);
 
        this.urlRoot = function urlRoot () {
            return Utils.getAbsoluteUrl(
                getExtensionAssetsPath(
                    "Modules/developersDoc/SuiteScript2/Example.developersDoc.Service.ss"
                ), true
            )
        }
    }
 
    ExampledevelopersDoc.prototype = Object.create(SCModel.prototype);
    ExampledevelopersDoc.prototype.constructor = ExampledevelopersDoc;
 
    return ExampledevelopersDoc
})

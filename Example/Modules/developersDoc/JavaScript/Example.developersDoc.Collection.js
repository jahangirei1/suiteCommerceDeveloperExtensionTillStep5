define('Example.developersDoc.Collection', [
    'SCCollection',
    'Example.developersDoc.Model',
    'Utils'
], function (
    SCCollectionModule,
    ExampledevelopersDocModel,
    Utils
) {
    'use strict';

    var SCCollection = SCCollectionModule.SCCollection;

    function ExampledevelopersDocCollection(models, options) {
        SCCollection.call(this, models, options);

        this.model = ExampledevelopersDocModel;
        this.url = function () {
            return Utils.getAbsoluteUrl(
                getExtensionAssetsPath(
                    "Modules/developersDoc/SuiteScript2/Example.developersDoc.Service.ss"
                ), true
            )
        }
    }

    ExampledevelopersDocCollection.prototype = Object.create(SCCollection.prototype);
    ExampledevelopersDocCollection.prototype.constructor = ExampledevelopersDocCollection;

    return ExampledevelopersDocCollection
})

define('Example.developersDoc.Details.View', [
    'SCView',
    'Example.developersDoc.Helper',
    'example_developersDoc_details.tpl'
], function (
    SCViewModule,
    ExampledevelopersDocHelper,
    example_developersDoc_details_tpl
) {
    'use strict';

    var SCView = SCViewModule.SCView;

    function ExampledevelopersDocDetailsView (options) {
        SCView.call(this, options);

        this.model = options.model;

        this.template = example_developersDoc_details_tpl;
    }

    ExampledevelopersDocDetailsView.prototype = Object.create(SCView.prototype);
    ExampledevelopersDocDetailsView.prototype.constructor = ExampledevelopersDocDetailsView;

    ExampledevelopersDocDetailsView.prototype.getContext = function () {
        return {
            model: this.model
            //typeOptions: ExampledevelopersDocHelper.getTypeOptions()
        }
    }

    return ExampledevelopersDocDetailsView
})

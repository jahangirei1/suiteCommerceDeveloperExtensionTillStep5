define('Example.developersDoc.Collection.View', [
    'SCCollectionView',
    'Example.developersDoc.Details.View',
    'example_developersDoc_collection.tpl',
    'jQuery'
], function (
    SCCollectionViewModule,
    ExampledevelopersDocDetailsView,
    example_developersDoc_collection_tpl,
    jQuery
) {
    'use strict';

    var SCCollectionView = SCCollectionViewModule.SCCollectionView;

    function ExampledevelopersDocCollectionView (options) {
        SCCollectionView.call(this, options.collection);

        this.collection = options.collection;

        this.template = example_developersDoc_collection_tpl;
    }

    ExampledevelopersDocCollectionView.prototype = Object.create(SCCollectionView.prototype);
    ExampledevelopersDocCollectionView.prototype.constructor = ExampledevelopersDocCollectionView;

    ExampledevelopersDocCollectionView.prototype.getCellViewsPerRow = function () {
        return 1
    }

    ExampledevelopersDocCollectionView.prototype.getCellViewInstance = function (model) {
        return new ExampledevelopersDocDetailsView({
            model: model
        })
    }

    ExampledevelopersDocCollectionView.prototype.getContext = function () {
        return {}
    }

    return ExampledevelopersDocCollectionView
})

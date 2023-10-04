define('Example.developersDoc.List.View', [
    'PageType.Base.View',
    'Example.developersDoc.Collection',
    'Example.developersDoc.Collection.View',
    'example_developersDoc_list.tpl'
], function (
    PageTypeBaseView,
    ExampledevelopersDocCollection,
    ExampledevelopersDocCollectionView,
    example_developersDoc_list_tpl
) {
    'use strict';

    return PageTypeBaseView.PageTypeBaseView.extend({
        template: example_developersDoc_list_tpl,

        initialize: function initialize () {
            this.collection = new ExampledevelopersDocCollection();
        },

        beforeShowContent: function beforeShowContent () {
            this.childViews = {
                'Example.developersDoc.Collection.View': function () {
                    return new ExampledevelopersDocCollectionView({
                        collection: this.collection
                    })
                }
            }

            return this.collection.fetch()
        }
    })
});

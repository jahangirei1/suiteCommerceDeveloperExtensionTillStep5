define('Example.developersDoc.Edit.View', [
    'PageType.Base.View',
    'Example.developersDoc.Form.View',
    'Example.developersDoc.Model',
    'example_developersDoc_edit.tpl',
    'jQuery'
], function (
    PageTypeBaseView,
    ExampledevelopersDocFormView,
    ExampledevelopersDocModel,
    example_developersDoc_edit_tpl,
    jQuery
) {
    'use strict';

    return PageTypeBaseView.PageTypeBaseView.extend({
        template: example_developersDoc_edit_tpl,

        initialize: function initialize () {
            this.model = new ExampledevelopersDocModel();
        },

        beforeShowContent: function beforeShowContent () {
            this.childViews = {
                'Example.developersDoc.Form.View': function () {
                    return new ExampledevelopersDocFormView({
                        model: this.model
                    })
                }
            }

            if (!!Number(this.options.routerArguments[0])) {
                return this.model.fetch({
                    data: {internalid: this.options.routerArguments[0]}
                })
            }
            else {
                return jQuery.Deferred().resolve()
            }
        }
    })
})

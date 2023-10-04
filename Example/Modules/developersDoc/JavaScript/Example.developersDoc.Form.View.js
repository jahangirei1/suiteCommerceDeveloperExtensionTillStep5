define('Example.developersDoc.Form.View', [
    'Backbone',
    'SCFormView',
    'Example.developersDoc.Helper',
    'Utils',
    'example_developersDoc_form.tpl'
], function (
    Backbone,
    SCFormViewModule,
    ExampledevelopersDocHelper,
    Utils,
    example_developersDoc_form_tpl
) {
    'use strict';

    var SCFormView = SCFormViewModule.SCFormView;

    function ExampledevelopersDocFormView (options) {
        SCFormView.call(this, options.model);

        this.formModel.on('sync', function () {
            Backbone.history.navigate('developersDoc', {trigger: true});
        });

        this.template = example_developersDoc_form_tpl;
    }

    ExampledevelopersDocFormView.prototype = Object.create(SCFormView.prototype)
    ExampledevelopersDocFormView.prototype.constructor = ExampledevelopersDocFormView;

    ExampledevelopersDocFormView.prototype.getEvents = function () {
        return {
            'submit form': 'saveForm'
        }
    }

    ExampledevelopersDocFormView.prototype.saveForm = function (e) {
        e.preventDefault();

        var promise = SCFormView.prototype.saveForm.call(this, e);

        return promise
    }

    ExampledevelopersDocFormView.prototype.getFormValues = function (form) {
        var formValues = form.serializeObject();

        return {
            carName: formValues.carName,
            carNumber: formValues.carNumber
        }
    }

    ExampledevelopersDocFormView.prototype.getContext = function () {
        return {
            model: this.formModel
            //typeOptions: ExampledevelopersDocHelper.getTypeOptions()
        }
    }

    return ExampledevelopersDocFormView
})

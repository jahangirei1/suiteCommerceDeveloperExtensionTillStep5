define('Example.developersDoc', [
    'Example.developersDoc.List.View',
    'Example.developersDoc.Edit.View'
], function (
    ExampledevelopersDocListView,
    ExampledevelopersDocEditView
) {
    'use strict';

    return {
        mountToApp: function (container) {
            var PageType = container.getComponent('PageType');

            PageType.registerPageType({
                name: 'example_developersDoc_list',
                routes: ['developersDoc'],
                view: ExampledevelopersDocListView,
                defaultTemplate: {
                    name: 'example_developersDoc_list.tpl',
                    displayName: 'Developers Documentation List'
                }
            });

            PageType.registerPageType({
                name: 'example_developersDoc_edit',
                routes: ['developersDoc/add', 'developersDoc/:id'],
                view: ExampledevelopersDocEditView,
                defaultTemplate: {
                    name: 'example_developersDoc_edit.tpl',
                    displayName: 'Developers Documentation Edit'
                }
            });
        }
    }
});


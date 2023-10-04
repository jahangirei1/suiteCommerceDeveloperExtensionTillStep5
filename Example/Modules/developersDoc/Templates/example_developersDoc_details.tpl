<!-- <tr>
    <td>{{model.internalid}}</td>
    <td>
        {{#each typeOptions}}
            {{#ifEquals internalid ../model.type}}{{name}}{{/ifEquals}}
        {{/each}}
    </td>
    <td>{{model.value}}</td>
    <td>
        <a class="user-preferences-table-edit-link" href="/preferences/{{model.internalid}}">{{translate 'Edit'}}</a>
        <button class="user-preferences-table-delete-button" data-action="delete" data-id="{{model.internalid}}">{{translate 'Delete'}}</button>
    </td>
</tr> -->
<tr>
    <td>{{model.internalid}}</td>
    <td>{{model.carName}}</td>
    
    <td>{{model.carNumber}}</td>
    <td>
        <a class="developers-Doc-table-edit-link" href="/developersDoc/{{model.internalid}}">{{translate 'Edit'}}</a>
        <button class="developers-Doc-table-delete-button" data-action="delete" data-id="{{model.internalid}}">{{translate 'Delete'}}</button>
    </td>
</tr>

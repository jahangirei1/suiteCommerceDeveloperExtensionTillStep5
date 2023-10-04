<div class="alert-placeholder" data-type="alert-placeholder"></div>
<form>
    <fieldset>
        <!-- <div data-validation="control-group">
            <label for="type">{{translate 'Type'}}</label>
            <div data-validation="control">
                <select name="type" id="type">
                    {{#each typeOptions}}
                        <option value="{{internalid}}" {{#ifEquals internalid ../model.type}}selected{{/ifEquals}}>{{name}}</option>
                    {{/each}}
                </select>
            </div>
        </div> -->

        <div data-validation="control-group">
            <label for="carName">{{translate 'Car Name'}}</label>
            <div data-validation="control">
                <input type="text" name="carName" id="carName" value="{{model.carName}}">
            </div>
        </div>
        <div data-validation="control-group">
            <label for="carNumber">{{translate 'No. of Cars'}}</label>
            <div data-validation="control">
                <input type="number" name="carNumber" id="carNumber" value="{{model.carNumber}}">
            </div>
        </div>
    </fieldset>
    <button type="submit">{{translate 'Add/Update'}}</button>
</form>

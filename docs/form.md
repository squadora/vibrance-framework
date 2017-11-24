# Form

Allows you to define different form styles.

## Usage

To apply a style to a form element, simply add the class associated with the element.

| Value | Description |
| ------ | ------- |
| ```.fieldset``` | Class to add on a ```<fieldset>``` element to define a fieldset. |
| ```.form-legend``` | Class to add on a ```<legend>``` element to define a form legend. |
| ```.input``` | Class to add on a ```<input>``` element. |
| ```.textarea``` | Class to add on a ```<textarea>``` element. |
| ```.select``` | Class to add on a ```<select>``` element. |
| ```.radio``` | Class to add on a ```<input type="radio">``` element. |
| ```.checkbox``` | Class to add on a ```<input type="checkbox">``` element. |
| ```.range``` | Class to add on a ```<input type="range">``` element. |

<div class="docs-demo width-md-100 width-lg-50 inline-block">
    <form>
        <fieldset>
            <legend class="form-legend">Legend</legend>
            <div class="margin-20">
                <input class="input" type="text" placeholder="Input text">
            </div>
            <div class="margin-20">
                <textarea class="textarea" rows="6" placeholder="Textarea"></textarea>
            </div>
            <div class="margin-20">
                <select class="select">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
            <div class="margin-20">
                <div class="inline-block width-10">
                    <input id="radio1" class="radio" name="radio" checked="" type="radio">
                    <label class="radio-label" for="radio1">A</label>
                </div>
                <div class="inline-block width-10">
                    <input id="radio2" class="radio" name="radio" type="radio">
                    <label class="radio-label" for="radio2">B</label>
                </div>
            </div>
            <div class="margin-20">
                <div class="inline-block width-10">
                    <input id="checkbox1" class="checkbox" name="checkbox" checked="" type="checkbox">
                    <label class="checkbox-label" for="checkbox1">A</label>
                </div>
                <div class="inline-block width-10">
                    <input id="checkbox2" class="checkbox" name="checkbox" checked="" type="checkbox">
                    <label class="checkbox-label" for="checkbox2">B</label>
                </div>
            </div>
            <div class="margin-20">
                <input class="range" type="range" min="0" max="100" step="1">
            </div>
            <div class="margin-20">
                <label class="iconfield">
                    <i class="fa fa-at icon"></i>
                    <input class="input" placeholder="Field" type="text">
                </label>
            </div>
            <div class="margin-20">
                <div class="merged-form">
                    <div class="grid grid-spacing-off">
                        <div class="column xs-12 md-8">
                            <input class="input" placeholder="Input" type="text">
                        </div>
                        <div class="column">
                            <button class="button button-primary">Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="margin-20">
                <div class="file-form">
                    <span class="button button-primary">Select File
                        <input type="file">
                    </span>
                </div>
            </div>
            <div class="margin-20">
                <div class="merged-form file-form">
                    <div class="grid grid-spacing-off">
                        <div class="column xs-12 md-8">
                            <input class="input" placeholder="Select a file" type="text" disabled>
                        </div>
                        <div class="column">
                            <span class="button button-primary">Upload
                                <input type="file">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="margin-20">
                <input class="input form-success" type="text" placeholder="Input text">
            </div>
            <div class="margin-20">
                <input class="input form-danger" type="text" placeholder="Input text">
            </div>
        </fieldset>
    </form>
</div>

```html
<form>
    <fieldset class="fieldset">

        <legend class="form-legend">Legend</legend>

        <input class="input" type="text">

        <textarea class="textarea" rows="6"></textarea>

        <select class="select">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
        </select>

        <input class="radio" name="radio" checked="" type="radio">

        <input class="checkbox" name="checkbox" checked="" type="checkbox">

        <input class="range" type="range" min="0" max="100" step="1">
        
    </fieldset>
</form>
```

-----------

## Shapes

Default style applies a slightly rounded form border style. You can apply two other button shape styles.

| Class | Description |
| ------ | ------- |
| ```.form-squared``` | Applies a square border style. |
| ```.form-rounded``` | Applies a rounded border style. |

!!!Note
    Shape classes should be applied directly to ```.merged-form``` and ```.file-form``` element.

<div class="docs-demo width-md-100 width-lg-50 inline-block">
    <form>
        <div class="margin-20">
            <input class="input form-rounded" type="text" placeholder="Input text">
        </div>
        <div class="margin-20">
            <div class="merged-form form-rounded">
                <div class="grid grid-spacing-off">
                    <div class="column xs-12 md-8">
                        <input class="input" placeholder="Input" type="text">
                    </div>
                    <div class="column">
                        <button class="button button-primary">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

```html
<input class="input form-rounded" type="text">

<!-- Example for merged form -->
<div class="merged-form form-rounded">
    <!-- Contents -->
</div>
```

-----------

## Sizes

You can apply two other form sizes.

| Class | Description |
| ------ | ------- |
| ```.form-small``` | Applies a small form size. |
| ```.form-large``` | Applies a large form size. |

!!!Note
    Shape classes should be applied directly to ```.merged-form``` and ```.file-form``` element.

<div class="docs-demo width-md-100 width-lg-50 inline-block">
    <form>
        <div class="margin-20">
            <input class="input form-small" type="text" placeholder="Input text">
        </div>
        <div class="margin-20">
            <div class="merged-form form-small">
                <div class="grid grid-spacing-off">
                    <div class="column xs-12 md-8">
                        <input class="input" placeholder="Input" type="text">
                    </div>
                    <div class="column">
                        <button class="button button-primary">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

```html
<input class="input form-small" type="text">

<!-- Example for merged form -->
<div class="merged-form form-small">
    <!-- Contents -->
</div>
```

-----------

## Merged form

To create a merged form, add the ```.merged-form``` class to a ```<div>``` element. Place a grid inside and add the ```.grid-spacing-off``` class to remove the spacing. Place your fields inside the columns as in the example below.

<div class="docs-demo width-md-100 width-lg-50 inline-block">
    <form>
        <div class="margin-20">
            <div class="merged-form">
                <div class="grid grid-spacing-off">
                    <div class="column xs-12 md-8">
                        <input class="input" placeholder="Input" type="text">
                    </div>
                    <div class="column">
                        <button class="button button-primary">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

```html
<div class="merged-form">
    <div class="grid grid-spacing-off">
        <div class="column xs-12 md-8">
            <input class="input" placeholder="Input" type="text">
        </div>
        <div class="column">
            <button class="button button-primary">Button</button>
        </div>
    </div>
</div>
```

-----------

## File form

To create a file upload button, add the ```.file-form``` class to a ```<div>``` element. Create a fake button inside by adding the ```.button``` class to a ```<span>``` element. Inside, place an element ```<input type="file">```. Clicking the wrong button will trigger the file form. Follow the example below.

<div class="docs-demo width-md-100 width-lg-50 inline-block">
    <form>
        <div class="margin-20">
            <div class="file-form">
                <span class="button button-primary">Select File
                    <input type="file">
                </span>
            </div>
        </div>
        <div class="margin-20">
            <div class="merged-form file-form">
                <div class="grid grid-spacing-off">
                    <div class="column xs-12 md-8">
                        <input class="input" placeholder="Select a file" type="text" disabled>
                    </div>
                    <div class="column">
                        <span class="button button-primary">Upload
                            <input type="file">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

```html
<!-- File form -->
<div class="file-form">
    <span class="button button-primary">Select File
        <input type="file">
    </span>
</div>

<!-- File form with file path field -->
<div class="merged-form file-form">
    <div class="grid grid-spacing-off">
        <div class="column xs-12 md-8">
            <input class="input" placeholder="Select a file" type="text" disabled>
        </div>
        <div class="column">
            <span class="button button-primary">Upload
                <input type="file">
            </span>
        </div>
    </div>
</div>
```

-----------

## States

The status of a field is used to tell the user whether or not the field value is correct. To change the state of a field, add the associated class (see table below).

| Class | Description |
| ------ | ------- |
| ```.form-success``` | Class to be added to indicate to the user that the value of the field is valid. |
| ```.form-danger``` | Class to be added to indicate to the user that the field value is invalid. |

<div class="docs-demo width-md-100 width-lg-50 inline-block">
    <form>
        <div class="margin-20">
            <input class="input form-success" type="text" placeholder="Input text">
        </div>
        <div class="margin-20">
            <input class="input form-danger" type="text" placeholder="Input text">
        </div>
    </form>
</div>

```html
<!-- File form -->
<div class="file-form">
    <span class="button button-primary">Select File
        <input type="file">
    </span>
</div>
```

-----------

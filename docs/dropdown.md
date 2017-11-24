# Dropdown

This component is used to create dropdown element.

## Usage

To create a dropdown, add the ```.dropdown``` to a ```<div>``` element. Add a button just before the menu with the ```.dropdown-toggle``` class. Vibrance Framework considers the ```.dropdown-toggle``` button placed just before as a switch button to display the dropdown.

To apply the default style, add the ```.dropdown-default``` class.

<div class="docs-demo">
    <div class="inline-block">
        <button class="button button-default button-square dropdown-toggle">Dropdown</button>
        <div class="dropdown dropdown-default">
            <ul class="nav nav-default">
                <li class="nav-header">Heading</li>
                <li class="nav-divider"></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="inline-box">
    <button class="button button-default dropdown-toggle">Dropdown</button>
    <div class="dropdown dropdown-default">
        <!-- Contents -->
    </div>
</div>
```

!!!Note
    For a correct display, wrap the button and dropdown in a ```<div>``` element with the ```.inline-box``` class. The ```.inline-box``` element must be used in a position context.

-----------

## Mode

By default, the dropdown is displayed by a click event. To display the dropdown when hovering over the button, add the ```[data-mode]``` attribute with the ```hover``` value on the ```.dropdown``` element.

<div class="docs-demo">
    <div class="inline-block">
        <button class="button button-default button-square dropdown-toggle">Dropdown</button>
        <div class="dropdown dropdown-default" data-mode="hover">
            <ul class="nav nav-default">
                <li class="nav-header">Heading</li>
                <li class="nav-divider"></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="inline-box">
    <button class="button button-default dropdown-toggle">Dropdown</button>
    <div class="dropdown dropdown-default" data-mode="hover">
        <!-- Contents -->
    </div>
</div>
```

-----------

## Position

By default, the dropdown is displayed at the bottom left of the button. To change the dropdown position relative to the button, add the ```[data-position]``` attribute on the ```.dropdown``` element. The table below shows the possible values.

| Value | Description |
| ------ | ------- |
| ```bottom-left``` | Places dropdown below the left side of the button. |
| ```bottom-center``` | Places the dropdown below in the middle of the button. |
| ```bottom-right``` | Places dropdown below the right-hand side of the button. |
| ```top-left``` | Places dropdown above the center of the button. |
| ```top-center``` | Places dropdown above the center of the button. |
| ```top-right``` | Places dropdown above the center of the button. |
| ```left-top``` | Places dropdown at the top left of the button. |
| ```left-center``` | Places the dropdown in the middle left of the button. |
| ```left-bottom``` | Places dropdown at the bottom left of the button. |
| ```right-top``` | Places dropdown at the top right of the button. |
| ```right-center``` | Puts the dropdown in the center right of the button. |
| ```right-bottom``` | Places dropdown in the bottom right of the button. |

<div class="docs-demo">
    <div class="inline-block">
        <button class="button button-default button-square dropdown-toggle">Dropdown</button>
        <div class="dropdown dropdown-default" data-position="top-left">
            <ul class="nav nav-default">
                <li class="nav-header">Heading</li>
                <li class="nav-divider"></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="inline-box">
    <button class="button button-default dropdown-toggle">Dropdown</button>
    <div class="dropdown dropdown-default" data-position="bottom-left">
        <!-- Contents -->
    </div>
</div>
```

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.dropdown( element, options );
```

### Options

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```toggle``` | String | N/A | CSS selector for the element to be used as switch. By default, the previous element is used. |
| ```mode``` | String | ```click``` | Event type allowing to show dropdown. |
| ```position``` | String | ```bottom-left``` | Position of dropdown relative to toggle button. |
| ```hideDelay``` | Number | ```500``` | Delay before hide the dropdown after mouse out (in milliseconds). |

### Methods

```javascript
/* 
 * Use this methods if you change data-mode or data-position
 * attribute for update the dropdown 
*/
$.vibrance.dropdown( element ).update();

/* Show dropdown */
$.vibrance.dropdown( element ).show();

/* Hide dropdown */
$.vibrance.dropdown( element ).hide();

/* Trigger event (hover or click) on dropdown toggle button */
$.vibrance.dropdown( element ).toggle();
```

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.dropdown.update```   | This event is fired when an dropdown element is update. |
| ```vibrance.dropdown.show```   | This event is fired when an dropdown element is displayed. |
| ```vibrance.dropdown.hide```  | This event is fired when an dropdown element is hidden. |
| ```vibrance.dropdown.toggle``` | This event is fired by clicking or hovering on the dropdown toggle button. |


```javascript
$( element ).on('vibrance.dropdown.show', function(e){
    // do something
});
```

-----------

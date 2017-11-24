# Modal

This component is used to create a dialog box.

## Usage

To create a modal dialog, add the ```.modal``` class to a ```<div>``` element. A modal dialog consists of several parts:

| Class | Description |
| ------ | ------- |
| ```.modal```   | The modal dialog container. |
| ```.modal-overlay```   | The overlay element. |
| ```.modal-wrapper```   | Element for wrapping the content of the modal dialog. |
| ```.modal-header```   | Item containing the header of the dialog mode. |
| ```.modal-title```   | The title of the modal dialog. |
| ```.modal-close```   | Indicates an element to close modal dialog at the click of a mouse. |
| ```.modal-body```   | The body of the modal dialog. |
| ```.modal-footer```   | The footer of the modal dialog that can contain action buttons. |

<div class="docs-demo">
    <button type="button" class="modal-toggle button-bordered" data-modal="#myModal">Open Modal</button>
    <div id="myModal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-wrapper">
            <div class="modal-header">
                <h2 class="modal-title">Modal</h2>
                <button class="modal-close modal-close-default position-top-right" type="button"><i class="fa fa-times sm"></i></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="modal-footer">
                <button class="button button-default modal-close" type="button">Cancel</button>
                <button class="button button-primary" type="button">Save</button>
            </div>
        </div>
    </div>
</div>

```html
<div id="myModal" class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-wrapper">
        <div class="modal-header">
            <h2 class="modal-title">Modal</h2>
            <button class="modal-close modal-close-default position-top-right" type="button"><i class="fa fa-times sm"></i></button>
        </div>
        <div class="modal-body">
            <p>...</p>
        </div>
        <div class="modal-footer">
            <button class="button button-default modal-close" type="button">Cancel</button>
            <button class="button button-primary" type="button">Save</button>
        </div>
    </div>
</div>
```

JavaScript must be used to display a modal dialog. Add the ```.modal-toggle``` class on a button element and the ```[data-modal]``` attribute containing the id of the modal dialog to be displayed.

```html
<button type="button" class="modal-toggle button-default" data-modal="#myModal"></button>
```

!!!Note
    Clicking on an element inside the modal dialog that has the ```.modal-close``` class will close the modal dialog.

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.modal( element, options );
```

### Options

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```toggle``` | String | N/A | CSS selector of the toggle button. |

### Methods

```javascript
/* Show modal */
$.vibrance.modal( element ).show();

/* Hide modal */
$.vibrance.modal( element ).hide();

/* 
 * Show modal if hidden 
 * Hide modal if shown
 */
$.vibrance.modal( element ).toggle();
```

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.modal.show```   | This event is fired when an modal element is displayed. |
| ```vibrance.modal.hide```  | This event is fired when an modal element is hidden. |
| ```vibrance.modal.toggle``` | This event is fired by clicking on an toggle button. |


```javascript
$( element ).on('vibrance.modal.show', function(event){
    // do something
});
```

-----------

# Off-canvas

Allow you to create a off-canvas sidebar. This component is very useful for creating a mobile menu.

## Usage

To create an off-canvas, add the ```.offcanvas``` class to a ```<div>``` element. An off-canvas consists of three elements:

| Class | Description |
| ------ | ------- |
| ```.offcanvas-header```   | Bloc contenant le titre et le bouton fermer |
| ```.offcanvas-title```   | Contient le titre du off-canvas |
| ```.offcanvas-close```   | Bouton permettant de fermer le off-canvas |
| ```.offcanvas-body```   | The body of the off-canvas. |

<div class="docs-demo">
    <button type="button" class="offcanvas-toggle button-bordered" data-offcanvas="#myOffcanvas">Open Offcanvas</button>
    <div id="myOffcanvas" class="offcanvas">
        <div class="offcanvas-header">
            <h4 class="offcanvas-title">Example</h4>
            <button class="offcanvas-close offcanvas-close-default" type="button"><i class="fa fa-times icon x18"></i></button>
        </div>
        <div class="offcanvas-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</div>

```html
<div id="myOffcanvas" class="offcanvas">
    <div class="offcanvas-header">
        <h4 class="offcanvas-title"></h4>
        <button class="offcanvas-close offcanvas-close-default" type="button"><i class="fa fa-times icon x18"></i></button>
    </div>
    <div class="offcanvas-content">
        <!-- contents -->
    </div>
</div>
```

JavaScript must be used to display a off-canvas. Add the ```.offcanvas-toggle``` class on a button element and the ```[data-offcanvas]``` attribute containing the id of the off-canvas to be displayed.

```html
<button type="button" class="offcanvas-toggle button-default" data-offcanvas="#myOffcanvas"></button>
```

!!!Note
    Clicking on an element inside the off-canvas that has the ```.offcanvas-close``` class will close theoff-canvas.

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.offcanvas( element, options );
```

### Options

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```toggle``` | String | N/A | CSS selector of the toggle button. |
| ```width``` | String | ```300px``` | The width of the off-canvas. |
| ```position``` | String | ```left``` | The position of the off-canvas (left or right). |
| ```animate``` | Booleen | ```true``` | Reveal item directly or with a transition. |
| ```duration``` | Number | ```200``` | Transition duration in milliseconds. |

### Methods

```javascript
/* Show offcanvas */
$.vibrance.offcanvas( element ).show();

/* Hide offcanvas */
$.vibrance.offcanvas( element ).hide();

/* 
 * Show offcanvas if hidden 
 * Hide offcanvas if shown
 */
$.vibrance.offcanvas( element ).toggle();
```

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.offcanvas.show```   | This event is fired when an offcanvas element is displayed. |
| ```vibrance.offcanvas.hide```  | This event is fired when an offcanvas element is hidden. |
| ```vibrance.offcanvas.toggle``` | This event is fired by clicking on an toggle button. |


```javascript
$( element ).on('vibrance.offcanvas.show', function(event){
    // do something
});
```

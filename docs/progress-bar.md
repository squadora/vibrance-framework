# Progress Bar

This component allows you to create a progress bar.

## Usage

Add the ```.progress-bar``` class to a ```<div>``` element. Inside, create a ```<div>``` element and add the ```.progression``` class. Add the ```[data-value]``` attribute containing the starting value. The ```[data-max]``` attribute is used to indicate the maximum value of progress. You can add the ```[data-caption]``` attribute to display a unit (percent for example).

<div class="docs-demo">
    <div id="demo-progress-bar" class="progress-bar">
        <div class="progression" data-value="0" data-max="80" data-caption="%"></div>
    </div>
</div>

```html
<div class="progress-bar">
    <div class="progression" data-value="0" data-max="100" data-caption="%"></div>
</div>
```

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.progressBar( element, options );
```

### Options

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```value``` | Number | ```0``` | Starting value (0 - 100). |
| ```max``` | Number | ```100``` | Maximum progression value (100 max). |
| ```caption``` | String | ```%``` | Text to be displayed after the percentage. |
| ```percent``` | Booleen | ```true``` | Enable or disable percentage display. |


### Methods

```javascript
/* Change progress value */
$.vibrance.progressBar( element ).to( value );

/* Adds a value to the present value of the progress */
$.vibrance.progressBar( element ).add( value, callback );
```

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```value``` | Number | ```0``` | New progression value. |
| ```callback``` | Function | N/A | Function called when maximum value is reached. |

The code below shows an example of a progress bar animation:

```javascript
var bar = $('#demo-progress-bar');

var animate = setInterval(function () {
    
    // Adds 10 to each interval
    vibrance.progressBar( bar ).add(10, function(){

        // Stop the animation when the maximum value is reached
        clearInterval(animate);

    });

}, 1000);
```

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.progressBar.change```  | This event is fired when the bar progress value is changed. |

```javascript
$( element ).on('vibrance.progressBar.change', function(event){
    // do something
});
```

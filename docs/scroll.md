# Scroll

This component allows you to jump to various sections of the page.

## Usage

Simply add the ```.scroll-toggle``` class on a ```<a>``` element containing the target section id in the ```[href]``` attribute.

<div class="docs-demo">
    <button id="targetA" href="#targetB" class="scroll-toggle button button-bordered">Scroll Bottom</button>
</div>

```html
<a class="scroll-toggle" href="#target"></a>
```

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.scroll( element, options );
```

### Options

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```animate``` | Booleen | ```true``` | Scroll directly or with a transition. |
| ```duration``` | Number | ```1000``` | Transition duration in milliseconds. |

### Methods

```javascript
/* Scroll to */
$.vibrance.scroll( element ).to( target );
```

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```target``` | String, Number | N/A | CSS selector or position. |

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.scroll.scrolled```   | Callback when scrolling has completed. |


```javascript
$( element ).on('vibrance.scroll.scrolled', function(event){
    // do something
});
```

<div class="docs-demo">
    <button id="targetB" href="#targetA" class="scroll-toggle button button-bordered">Scroll Top</button>
</div>
<div style="height:400px">
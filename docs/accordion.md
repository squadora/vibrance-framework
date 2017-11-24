# Accordion

This component allows you to create a list of items that can be displayed individually.

## Usage

Create an ```ul``` list and add the ```.accordion``` class. To apply the default style, add the ```.accordion-default``` class.
Each item in the list must contain two additional items:

| Class | Description |
| ------ | ------- |
| ```.accordion-title``` | Contains the title of an element of the accordion |
| ```.accordion-content``` | Contains the content of an accordion element |

<div class="docs-demo">
    <ul class="accordion accordion-default">
        <li class="active">
            <div class="accordion-title">
                <a href="#">Default</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
        <li class="active">
            <div class="accordion-title">
                <a href="#">Default</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
        <li>
            <div class="accordion-title">
                <a href="#">Default</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="accordion accordion-default">
    <li>
        <div class="accordion-title"></div>
        <div class="accordion-content"></div>
    </li>
</ul>
```

-----------

## Expendable

By default, only one item in the list can be displayed at a time. To allow multiple accordion elements to be displayed, add the ```.accordion-expendable``` class to the ```.accordion``` element.

<div class="docs-demo">
    <ul class="accordion accordion-default accordion-expendable">
        <li class="active">
            <div class="accordion-title">
                <a href="#">Expendable</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
        <li>
            <div class="accordion-title">
                <a href="#">Expendable</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
        <li>
            <div class="accordion-title">
                <a href="#">Expendable</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="accordion accordion-default accordion-expendable">
    <li>
        <div class="accordion-title"></div>
        <div class="accordion-content"></div>
    </li>
</ul>
```

-----------

## Collapsible off

To allow the accordion to close all items in the list, add the ```.accordion-collapsible-off``` class to the ```.accordion``` item.

<div class="docs-demo">
    <ul class="accordion accordion-default accordion-collapsible-off">
        <li class="active">
            <div class="accordion-title">
                <a href="#">Collapsible Off</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
        <li>
            <div class="accordion-title">
                <a href="#">Collapsible Off</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
        <li>
            <div class="accordion-title">
                <a href="#">Collapsible Off</a>
            </div>
            <div class="accordion-content">
                <p>Nam sed ex sit amet metus lacinia posuere. Duis dolor sapien, auctor ac fringilla a, aliquet eget ligula. Proin pretium scelerisque odio, in commodo neque. Curabitur odio nisl, posuere in mauris et, finibus dignissim turpis. Vivamus fringilla leo tellus, vel dignissim ligula accumsan ac.</p>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="accordion accordion-default accordion-collapsible-off">
    <li>
        <div class="accordion-title"></div>
        <div class="accordion-content"></div>
    </li>
</ul>
```

-----------

## Set open

To display a default item when initializing the accordion, add the ```li``` class to an ```.active``` item in the list.

```html
<ul class="accordion accordion-default">
    <li class="active">
        <div class="accordion-title"></div>
        <div class="accordion-content"></div>
    </li>
</ul>
```

!!! note
    If the item does not have the ```.accordion-expendable``` class or ```{expendable: true}``` option and several ```.active``` items are found, only the first one will be displayed.

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.accordion( element, options );
```

### Options

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```animation``` | Booleen | ```true``` | Reveal item directly or with a transition animation. |
| ```duration``` | Number | ```300``` | Animation duration in milliseconds. |
| ```expendable``` | Booleen | ```false``` | Allow multiple opening of the accordion items. |
| ```collapsible``` | Booleen | ```true``` | Allow all items of the accordion to be closed. |

### Methods

```javascript
/* Open accordion item */
$.vibrance.accordion( element ).open( index );

/* Close accordion item */
$.vibrance.accordion( element ).close( index );

/* 
 * Show accordion item if hidden 
 * Hide accordion item if shown
 */
$.vibrance.accordion( element ).toggle( index );
```

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```index``` | String, Integer, Node | ```0``` | The accordion item target index (0 based). |

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.accordion.open```   | This event is fired when an accordion element is displayed. |
| ```vibrance.accordion.close```  | This event is fired when an accordion element is hidden. |
| ```vibrance.accordion.toggle``` | This event is fired by clicking on an element of the accordion. |


```javascript
$( element ).on('vibrance.accordion.open', function(e){
    // do something
});
```

-----------

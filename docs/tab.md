# Tab

This component is used to create tabbed navigation.

## Usage

The tabbed navigation component consists of various elements:

| Class | Description |
| ------ | ------- |
| ```.tab``` | The component itself. |
| ```.tab-header``` | Contains toggle links. |
| ```.tab-content``` | Contains toggle pannels. |

Create a ```<div>``` element and add the ```.tab``` class. Inside, add the ```.tab-header``` class to a ```<ul>``` element. Create another ```<div>``` element just after that and add the ```.tab-content``` class.

To open a default tab, add the ```.active``` class to a ```<li>``` element of ```.tab-header```. To disable a tab, use the ```.disabled``` class.

!!!Important
    The elements of ```.tab-content``` must be placed in the same order as the elements of ```.tab-header```.

<div class="docs-demo">
    <div class="tab" style="max-width: 500px;">
        <ul class="tab-header">
            <li class="active"><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li class="disabled"><a href="#">Disabled</a></li>
        </ul>
        <div class="tab-content">
            <div>
                <p>Tab 1</p>
            </div>
            <div>
                <p>Tab 2</p>
            </div>
            <div>
                <p>Tab 3</p>
            </div>
            <div>
                <p>Tab 4</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="tab">
    <ul class="tab-header">
        <li><a href="#">Tab 1</a></li>
        <li><a href="#">Tab 2</a></li>
        <li class="active"><a href="#">Tab 3</a></li>
        <li class="disabled"><a href="#">Disabled</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-item">
            <p>Tab 1</p>
        </div>
        <div class="tab-item">
            <p>Tab 2</p>
        </div>
        <div class="tab-item">
            <p>Tab 3</p>
        </div>
        <div class="tab-item">
            <p>Tab 4</p>
        </div>
    </div>
</div>
```

-----------

## Tab Position

You can change the location of the tabs on the right, left and bottom of the panels to be displayed.

-----------

### Tab Left

Create a [Grid component](grid.md) and apply the ```.tab``` class. In a column, insert the ```.tab-header``` element. In a second column, insert the ```.tab-content``` element. Then add the ```.tab-left``` class to the ```.tab-header``` element.

!!!Note
    In the example below, the size of the first column has been set to md-2. This means that it will take a width of 2 by 12 columns from the size of an average screen.

<div class="docs-demo">
    <div class="tab grid" style="max-width: 500px;">
        <div class="column md-3">
            <ul class="tab-header tab-left">
                <li class="active"><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
            </ul>
        </div>
        <div class="column">
            <div class="tab-content">
                <div>
                    <p>Tab 1</p>
                </div>
                <div>
                    <p>Tab 2</p>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="tab grid">
    <div class="column md-2">
        <ul class="tab-header tab-left">
            <!-- tab header items -->
        </ul>
    </div>
    <div class="column">
        <div class="tab-content">
            <!-- tab content items -->
        </div>
    </div>
</div>
```

-----------

### Tab Right

Create a [Grid component](grid.md) and apply the ```.tab``` class. In a column, insert the ```.tab-header``` element. In a second column, insert the ```.tab-content``` element. Then add the ```.tab-left``` class to the ```.tab-header``` element.

!!!Note    
    In the example below, the size of the first column has been set to ```md-2```. This means that it will take a width of 2 by 12 columns from the size of an average screen.

<div class="docs-demo">
    <div class="tab grid" style="max-width: 500px;">
        <div class="column">
            <div class="tab-content">
                <div>
                    <p>Tab 1</p>
                </div>
                <div>
                    <p>Tab 2</p>
                </div>
            </div>
        </div>
        <div class="column md-3">
            <ul class="tab-header tab-right">
                <li class="active"><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="tab grid">
    <div class="column">
        <div class="tab-content">
            <!-- tab content items -->
        </div>
    </div>
    <div class="column md-2">
        <ul class="tab-header tab-right">
            <!-- tab header items -->
        </ul>
    </div>
</div>
```

-----------

### Tab Bottom

Placez simplement l'élément ```.tab-header``` après l'élément ```.tab-content``` et ajoutez la classe ```.tab-bottom```.

<div class="docs-demo">
    <div class="tab" style="max-width: 500px;">
        <div class="tab-content">
            <div>
                <p>Tab 1</p>
            </div>
            <div>
                <p>Tab 2</p>
            </div>
            <div>
                <p>Tab 3</p>
            </div>
            <div>
                <p>Tab 4</p>
            </div>
        </div>
        <ul class="tab-header tab-bottom">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li class="active"><a href="#">Item 3</a></li>
            <li class="disabled"><a href="#">Disabled</a></li>
        </ul>
    </div>
</div>

```html
<div class="tab">
    <div class="tab-content">
        <!-- tab content items -->
    </div>
    <ul class="tab-header tab-bottom">
        <!-- tab header items -->
    </ul>
</div>
```

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.tab( element );
```

### Methods

```javascript
/* Open tab item */
$.vibrance.tab( element ).open( index );
```

| Name | Type | Default | Description |
| ------ | ------- | ------- | ------- |
| ```index``` | String, Integer, Node | ```0``` | The tab item target index (0 based). |

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.tab.toggle``` | This event is fired by clicking on an element of the tab. |


```javascript
$( element ).on('vibrance.tab.toggle', function(e){
    // do something
});
```
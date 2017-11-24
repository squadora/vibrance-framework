# Nav

This component is used to create a navigation list.

## Usage

To create a navigation list, add the ```.nav``` class to a ```<ul>``` element. Navigation lists do not have a default style. To apply the default style, add the ```.nav-default``` class. To define an item as active, add the ```.active``` class to a ```<li>``` item in the list.

<div class="docs-demo">
    <div class="grid">
        <div class="column md-4">
            <ul class="nav nav-default">
                <li class="active"><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="nav nav-default">
    <li class="active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
</ul>
```

-----------

## Header

To create a navigation list header, add the ```.nav-header``` class to a ```<li>``` item in the list.

<div class="docs-demo">
    <div class="grid nav-default">
        <div class="column md-4">
            <ul class="nav nav-default">
                <li class="nav-header">Heading</li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="nav nav-default">
    <li class="nav-header">Heading</li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
</ul>
```

-----------

## Divider

To create a separator between two items in the list, add the ```.nav-divider``` class to a ```<li>``` item.

<div class="docs-demo">
    <div class="grid nav-default">
        <div class="column md-4">
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
<ul class="nav nav-default">
    <li class="nav-header">Heading</li>
    <li class="nav-divider"></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
</ul>
```

-----------

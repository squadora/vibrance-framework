# List

This component allows you to apply different list styles.

## Usage

Simply add the ```.list``` class to a ```<ul>``` element to apply the basic list style.

<div class="docs-demo">
    <div class="grid">
        <div class="column md-4">
            <ul class="list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="list">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

-----------

## Header

To create a list header, add the ```.list-header``` class to the first item in the list.

<div class="docs-demo">
    <div class="grid">
        <div class="column md-4">
            <ul class="list">
                <li class="list-header">Header</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="list">
    <li class="list-header"></li>
    <li></li>
    <li></li>
</ul>
```

-----------

## Divider

To create a separator between two items in the list, add the ```.list-divider``` class.

<div class="docs-demo">
    <div class="grid">
        <div class="column md-4">
            <ul class="list">
                <li class="list-header">Header</li>
                <li class="list-divider"></li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="list">
    <li class="list-header"></li>
    <li class="list-divider"></li>
    <li></li>
    <li></li>
</ul>
```

-----------

## Bullet styles

For apply a bullet styles, simply add the style class.

| Class | Description |
| ------ | ------- |
| ```.list-bullet-circle``` | Applies a circle bullet style. |
| ```.list-bullet-square``` | Applies a square bullet style. |
| ```.list-bullet-decimal``` | Applies a decimal bullet style. |

<div class="docs-demo">
    <div class="grid">
        <div class="column md-4">
            <ul class="list list-bullet-circle">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="list list-bullet-circle">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

-----------

## Stripped list

To apply a striped list style, add the ```.list-stripped``` class.

<div class="docs-demo">
    <div class="grid">
        <div class="column md-4">
            <ul class="list list-striped">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    </div>
</div>

```html
<ul class="list list-stripped">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

-----------

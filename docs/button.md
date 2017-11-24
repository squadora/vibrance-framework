# Button

This component allows you to apply different button styles.

## Usage

To create a button, apply the ```.button``` class to an ```<a>``` or ```<button>``` element. To apply the default style, add the ```.button-default``` class. To disable a button, add the John ```.disabled``` or ```[disabled]``` attribute (for a ```<button>``` element).

<div class="docs-demo">
    <a class="button button-default" href="#">Link</a>
    <button class="button button-default">Button</button>
    <button class="button button-default" disabled>Disabled</button>
</div>

```html
<a class="button button-default" href="#">Link</a>
<button class="button button-default">Button</button>
<button class="button button-default" disabled>Disabled</button>
```

-----------

## Shapes

Default style applies a slightly rounded button border style. You can apply two other button shape styles.

| Class | Description |
| ------ | ------- |
| ```.button-squared``` | Applies a square border style. |
| ```.button-rounded``` | Applies a rounded border style. |

<div class="docs-demo">
    <button class="button button-default">Standard</button>
    <button class="button button-default button-squared">squared</button>
    <button class="button button-default button-rounded">Rounded</button>
</div>

```html
<button class="button button-default button-squared">Square</button>
<button class="button button-default button-rounded">Rounded</button>
```

-----------

## Sizes

You can apply two other button sizes.

| Class | Description |
| ------ | ------- |
| ```.button-small``` | Applies a small button size. |
| ```.button-large``` | Applies a large button size. |

<div class="docs-demo">
    <button class="button button-default button-small">Small</button>
    <button class="button button-default">Normal</button>
    <button class="button button-default button-large">Large</button>
</div>

```html
<button class="button button-default button-small">Small</button>
<button class="button button-default button-large">Large</button>
```

-----------

## Full width

To apply a 100% width, add the ```.width-100``` class (See [Utility components](utility.md)).

<div class="docs-demo">
    <button class="button button-default width-100">Full width button</button>
</div>

```html
<button class="button button-default width-100">Full width Button</button>
```

-----------

## Icon

It is possible to place icons inside the buttons. The icon library used in this example is [Font Awesome](http://fontawesome.io/) (see the [Icon component](icon.md)). To apply a margin between icon and text, add the ```.icon-left``` or ```.icon-right``` class to the icon element according to its position.

<div class="docs-demo">
    <button class="button button-default"><i class="fa fa-star icon"></i></button>
    <button class="button button-default"><i class="fa fa-star icon-left"></i> Icon Left</button>
    <button class="button button-default">Icon Right <i class="fa fa-star icon-right"></i></button>
</div>

```html
<button class="button button-default"><i class="fa fa-star icon"></i></button>
<button class="button button-default"><i class="fa fa-star icon-left"></i> Icon Left</button>
<button class="button button-default">Icon Right <i class="fa fa-star icon-right"></i></button>
```

-----------

## Styles

See the table below for possible button styles.

| Class | Description |
| ------ | ------- |
| ```.button-bordered``` | Applies a bordered button style. |
| ```.button-primary``` | Applies a primary button style. |
| ```.button-secondary``` | Applies a secondary button style. |
| ```.button-danger``` | Applies a danger button style. |
| ```.button-text``` | Applies a text button style. |

<div class="docs-demo">
    <button class="button button-default">Default</button>
    <button class="button button-bordered">Bordered</button>
    <button class="button button-primary">Primary</button>
    <button class="button button-secondary">Secondary</button>
    <button class="button button-danger">Danger</button>
</div>

```html
<button class="button button-bordered">Bordered</button>
<button class="button button-primary">Primary</button>
<button class="button button-secondary">Secondary</button>
<button class="button button-danger">Danger</button>
<button class="button button-text">Text</button>
```

-----------

## Button group

To create a button group, add the ```.button-group``` class to a ```<div>``` element. Place the knobs inside. 

!!!Note
    Style classes for the shape and size of buttons should be applied directly to the ```.button-group``` element.

<div class="docs-demo">
    <div class="button-group">
        <button class="button button-default">Default</button>
        <button class="button button-primary">Primary</button>
        <button class="button button-secondary">Secondary</button>
    </div>
</div>

```html
<div class="button-group button-rounded">
    <button class="button button-default">Default</button>
    <button class="button button-primary">Primary</button>
    <button class="button button-secondary">Secondary</button>
</div>
```

-----------

## Dropdown

To create a button with dropdown, create a ```<div>``` and add the ```.dropdown``` class. On the button, add the ```.dropdown-toggle``` class.

<div class="docs-demo">
    <div class="inline-block">
        <button class="button button-default button-squared dropdown-toggle">Dropdown</button>
        <div class="dropdown dropdown-default dropdown-bottom-left">
            <ul class="nav nav-default">
                <li class="nav-header">Header</li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="#">Menu 3</a></li>
            </ul>
        </div>
    </div>

    <div class="inline-block margin">
        <div class="button-group button-squared">
            <button class="button button-default" href="#">Dropdown</button>
            <button class="button button-default dropdown-toggle" href="#"><i class="fa fa-caret-down icon"></i></button>
            <div class="dropdown dropdown-default dropdown-bottom-left">
                <ul class="nav nav-default">
                    <li class="nav-header">Header</li>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

```html
<div class="inline-box"> <!--Container used in a positioning context-->
    <button class="button button-default dropdown-toggle">Dropdown</button>
    <div class="dropdown dropdown-default dropdown-bottom-left">
        <ul class="nav nav-default">
            <li>Hello</li>
        </ul>
    </div>
</div>
```

```html
<div class="inline-box">
    <div class="button-group button-square">
        <button class="button button-default dropdown-toggle" href="#"><i class="fa fa-caret-down icon"></i></button>
        <div class="dropdown dropdown-default dropdown-bottom-left">
            <ul class="nav nav-default">
                <li>Hello</li>
            </ul>
        </div>
    </div>
</div>
```

!!!Important
    The dropdown to be displayed at the click of a button is automatically detected if a ```.dropdown``` element is placed directly after the button. If not, you must initialize the dropdown with ```toggle``` option.

For more information on dropdown, see the [Dropdown components](dropdown.md).

-----------



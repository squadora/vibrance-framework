# Icon

This component allow you to change icons style.

## Usage

Vibrance Framework does not yet have its own icon fonts libraries. On the other hand, it is compatible with many icon fonts libraries such as [Font Awesome](http://fontawesome.io) or [Google Material Icons](https://material.io/icons/) for example.

See the documentation in your Icon Font Library for instructions on how to use it.

-----------

## Margin

You can add an small margin before or after the icon element. Add the ```.icon-left``` class to add an margin before, or the ```.icon-right``` class to add a margin after.

The example below uses Font Awesome:

<div class="docs-demo">
    <div class="margin"><i class="fa fa-at icon-left"></i> Example</div>
    <div>Example <i class="fa fa-at icon-right"></i></div>
</div>

```html
<span><i class="fa fa-at icon-left"> Example</span>

<span>Example <i class="fa fa-at icon-right"></span>
```

-----------

## Sizes

You can easyly change the font size of an icon. Add first the ```.icon``` class on the icon element and add an ```.x*``` class.

| Class | Description |
| ------ | ------- |
| ```.x12``` | Sets the font size to 12px. |
| ```.x14``` | Sets the font size to 14px. |
| ```.x16``` | Sets the font size to 16px. |
| ```.x18``` | Sets the font size to 18px. |
| ```.x24``` | Sets the font size to 24px. |
| ```.x32``` | Sets the font size to 32px. |
| ```.x48``` | Sets the font size to 48px. |
| ```.x64``` | Sets the font size to 64px. |

The example below uses Font Awesome:

<div class="docs-demo">
    <span class="margin-right">x12 <i class="fa fa-at x12 icon icon-right"></i></span>
    <span class="margin-right">x14 <i class="fa fa-at x14 icon icon-right"></i></span>
    <span class="margin-right">x16 <i class="fa fa-at x16 icon icon-right"></i></span>
    <span class="margin-right">x18 <i class="fa fa-at x18 icon icon-right"></i></span>
    <span class="margin-right">x24 <i class="fa fa-at x24 icon icon-right"></i></span>
    <span class="margin-right">x32 <i class="fa fa-at x32 icon icon-right"></i></span>
    <span class="margin-right">x48 <i class="fa fa-at x48 icon icon-right"></i></span>
    <span class="margin-right">x64 <i class="fa fa-at x64 icon icon-right"></i></span>
</div>

```html
<i class="fa fa-at icon x24">
```

-----------

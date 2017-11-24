# Badge

This component allows you to create different badge styles.

## Usage

To create a badge, apply the ```.badge``` class to an element. Badges have no default style. To apply the default style, add the ```.badge-default``` class.

<div class="docs-demo">
    <span class="badge badge-default margin-medium">new</span>
    <span class="badge material-blue text-white margin-medium">new</span>
</div>

```html
<span class="badge badge-default">new</span>
```

-----------

## Shapes

You can apply three different badge styles. By default, a badge has a slightly rounded style. Use the ```.badge-squared```class to apply a square style, or the ```.badge-rounded``` class to round the badge to the maximum.

<div class="docs-demo">
    <span class="badge badge-squared margin-medium material-blue text-white">squared</span>
    <span class="badge badge-rounded margin-medium material-blue text-white">rounded</span>
</div>

```html
<!-- Squared badge -->
<span class="badge badge-default badge-squared">new</span>

<!-- Rounded badge -->
<span class="badge badge-default badge-rounded">new</span>
```

-----------

## Caption

It is possible to add static text to a badge using the ```[data-caption]``` attribute. This attribute allows you to display a text in the badge just after the original content of the element. If the content is modified dynamically via JavaScript for example, the static text will not be modified.

<div class="docs-demo">
    <span class="badge badge-squared material-blue text-white" data-caption="likes">12</span>
</div>

```html
<!-- Result: 12 likes -->
<span class="badge badge-default" data-caption=" likes">12</span> 
```

-----------

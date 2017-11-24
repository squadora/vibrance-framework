# Breadcrumb

This component allows you to create a breadcrumb.

## Usage

Create an ```ul``` list and add the ```.breadcrumb``` class. Add the ```.disabled``` class to a ```li``` element to deactivate a breadcrumb item.

<div class="docs-demo">
    <ul class="breadcrumb">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li class="disabled"><a href="#">Disabled</a></li>
        <li><a href="#">Active</a></li>
    </ul>
</div>

```html
<ul class="breadcrumb">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li class="disabled"><a href="#">Disabled</a></li>
    <li><a href="#">Active</a></li>
</ul>
```

-----------

## Divider

You can choose between two other divider styles. Use ```.breadcrumb-caret-divider``` or ```.breadcrumb-angle-divider``` classes to apply them.

<div class="docs-demo">
    <ul class="breadcrumb breadcrumb-caret-divider">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li class="disabled"><a href="#">Disabled</a></li>
        <li><a href="#">Active</a></li>
    </ul>

    <ul class="breadcrumb breadcrumb-angle-divider margin">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li class="disabled"><a href="#">Disabled</a></li>
        <li><a href="#">Active</a></li>
    </ul>
</div>

```html
<!-- Carret icon divider -->
<ul class="breadcrumb breadcrumb-caret-divider">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
</ul>
```

```html
<!-- Angle icon divider -->
<ul class="breadcrumb breadcrumb-angle-divider">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
</ul>
```

-----------

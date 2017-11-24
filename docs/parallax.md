# Parallax

This component is used to apply a parallax effect to a background image during scroll.

## Usage

Create a ```<div>``` element and apply the ```.parallax``` class. Next, you must add the ```.parallax-layer``` class to a parent element.

<div class="docs-demo">
    <div class="parallax-layer">
        <div class="parallax" style="background-image:url(../assets/images/image-2.jpg);height:400px;"></div>
    </div>
</div>

```html
<div class="parallax-layer">
    <div class="parallax" style="background-image:url(...)"></div>
</div>
```

!!!Note
    If you want the image to be referenced by search engines, add a ```<img>``` tag with the ```.hide``` class.

```html
<div class="parallax-layer">
    <div class="parallax" style="background-image:url(...)">
        <img class="hide" src="...">
    </div>
</div>
```

You can add content directly to the parallax.

<div class="docs-demo">
    <div class="parallax-layer">
        <div class="parallax" style="background-image:url(../assets/images/image-1.jpg);height:400px;">
            <img class="hide" src="../assets/images/image-2.jpg">
            <div class="position-center">
                <h1>Example</h1>
            </div>
        </div>
    </div>
</div>

```html
<div class="parallax-layer">
    <div class="parallax" style="background-image:url(...);">
        <img class="hide" src="...">
        <div class="position-center">
            <h1>Example</h1>
        </div>
    </div>
</div>
```

!!!Note
    If you want to impose a fixed height, do it directly on the ```.parallax``` element.

```html
<div class="parallax-layer">
    <div class="parallax" style="background-image:url(...); height:400px"></div>
</div>
```

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.parallax( element );
```

-----------

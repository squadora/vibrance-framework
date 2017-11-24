# Overlay

This component is used to create a image overlay.

## Usage

First, you must create a position context by adding the ```.inline-box``` class to a ```<div>``` element. Inside, place your image and create a ```<div>``` element with the ```overlay``` class. Then, add a position class, as in the example below (see [Utility component](utility.md#position)).

<div class="docs-demo">
    <div class="grid">
        <div class="column">
            <div class="inline-block">
                <img src="../assets/images/image-1.jpg">
                <div class="overlay position-bottom">
                    <span>Example</span>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="inline-box">
    <img src="...">
    <div class="overlay position-bottom"></div>
</div>
```

-----------

## Full size

To display the full size overlay, add the ```.fullsize``` class.

<div class="docs-demo">
    <div class="grid">
        <div class="column">
            <div class="inline-block">
                <img src="../assets/images/image-2.jpg">
                <div class="overlay fullsize">
                    <div class="position-center">
                        <span>Example</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="inline-box">
    <img src="...">
    <div class="overlay fullsize"></div>
</div>
```

-----------

## Inverse

To reverse the color of the overlay and switch from dark to light, add the ```.overlay-inverse``` class.

<div class="docs-demo">
    <div class="grid">
        <div class="column">
            <div class="inline-block">
                <img src="./assets/images/image-1.jpg">
                <div class="overlay overlay-inverse fullsize">
                    <div class="position-center">
                        <span>Inverse</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="inline-box">
    <img src="...">
    <div class="overlay overlay-inverse fullsize"></div>
</div>
```

-----------

## Content

You can add content directly to the overlay. You can also use [position classes](utility.md#position) to align your content.

<div class="docs-demo">
    <div class="grid margin-bottom-medium">
        <div class="column">
            <div class="inline-block">
                <img src="../assets/images/image-1.jpg">
                <div class="overlay fullsize">
                    <div class="position-center">
                        <span>Center</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="column">
            <div class="inline-block">
                <img src="../assets/images/image-1.jpg">
                <div class="overlay overlay-inverse position-top">
                    <span>Top</span>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<!-- Center Alignment -->
<div class="inline-box">
    <img src="...">
    <div class="overlay fullsize">
        <div class="position-center">
            <span>Center</span>
        </div>
    </div>
</div>

<!-- Top Right Alignment -->
<div class="inline-box">
    <img src="...">
    <div class="overlay fullsize">
        <div class="position-top-right">
            <span>Top right</span>
        </div>
    </div>
</div>
```

-----------

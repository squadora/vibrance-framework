# Section

Sections are very useful containers to divide the content of the page into several parts. 

## Usage

To create a section, add the ```.section``` class to a ```<section>``` element.

```html
<section class="section">
    <!-- Contents -->
</section>
```

-----------

## Background Layer

The background layer is ideal for applying an image, color or video to the background of a section. To create a background layer, apply the ```.background-layer``` class to a ```<div>``` within the section. Place the contents of the section in the [Container component](container.md). 

!!!Note
    If you use color classes to add a background color, it is preferable to apply them to the background layer rather than the section itself.

!!!Note
    In order for an image to retain full coverage of the section on all screen sizes, we recommend that you use ```background-image``` css property instead of a ```background-layer``` element. For referencing purposes, you can add a ```<img>``` element with the ```.hide``` class inside the layer for the image remains accessible to search engines.

-----------

### Background Color

<div class="docs-demo">
    <section class="section section-padding-md text-center">
        <div class="background-layer material-green-50"></div>
        <div class="container-expand">
            <h4 class="text-white">Background Color</h4>
        </div>
    </section>
</div>

```html
<section class="section">
    <div class="background-layer material-blue"></div>
    <div class="container">
        <!-- Contents -->
    </div>
</section>
```

-----------

### Background Image

<div class="docs-demo">
    <section class="section section-padding-md text-center">
        <div class="background-layer" style="background-image:url(../assets/images/image-1.jpg)"></div>
        <div class="container-expand">
            <h4>Background Image</h4>
        </div>
    </section>
</div>

```html
<!-- Section with background image -->
<section class="section">
    <div class="background-layer" style="background-image:url(...)"></div>
    <div class="container">
        <!-- Contents -->
    </div>
</section>
```

-----------

### Background Video

<div class="docs-demo">
    <section class="section section-padding-md text-center">
        <div class="background-layer">
            <video muted="true" loop="true" autoplay="true">
                <source src="../assets/videos/video-1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="container-expand">
            <h4 class="text-white">Background Video</h4>
        </div>
    </section>
</div>

```html
<!-- Section with background video -->
<section class="section">
    <div class="background-layer">
        <video muted="true" loop="true" autoplay="true">
            <source src="..." type="video/mp4">
            <source src="..." type="video/webm">
        </video>
    </div>
    <div class="container">
        <!-- Contents -->
    </div>
</section>
```

-----------

## Overlay

You can add a transparency layer between the background and the content of the section for more visibility. To create a transparency layer, add the ```.overlay``` class to a ```<div>``` element placed directly after the background layer. Don't forget to add the ```.fullsize``` class so that the overlay completely covers the section. It is also possible to invert the color of the overlay from dark to light by adding the ```.overlay-inverse``` class.

<div class="docs-demo">
    <section class="section section-padding-md text-center">
        <div class="background-layer" style="background-image:url(../assets/images/image-2.jpg)"></div>
        <div class="overlay fullsize"></div>
        <div class="container-expand">
            <h4 class="text-white">Overlay</h4>
        </div>
    </section>
</div>

```html
<!-- Section with background image -->
<section class="section">
    <div class="background-layer" style="background-image:url(...)"></div>
    <div class="overlay fullsize"></div>
    <div class="container">
        <!-- Contents -->
    </div>
</section>
```

Learn more about [Overlay component](overlay.md).

-----------

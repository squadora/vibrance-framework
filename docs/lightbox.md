# Lightbox

This component allows you to create a media gallery in a lightbox.

## Usage

To create a lightbox, add the ```.lightbox``` class on a parent element to a media (img or video). On the media element, add the ```.lightbox-item``` class.

<div class="docs-demo">
    <div class="grid">
        <div class="column">
            <div class="lightbox">
                <img class="lightbox-item" src="../assets/images/image-1.jpg" alt="Image 1 Caption">
            </div>
        </div>
        <div class="column">
            <div class="lightbox">
                <img class="lightbox-item" src="../assets/images/image-2.jpg" alt="Image 2 Caption">
            </div>
        </div>
        <div class="column">
            <div class="lightbox">
                <video class="lightbox-item" controls>
                    <source src="../assets/videos/video-1.mp4" type="video/mp4"><source>
                </video>
            </div>
        </div>
    </div>
</div>

```html
<!-- Image -->
<div class="lightbox">
    <img class="lightbox-item" src="...">
</div>

<!-- Video -->
<div class="lightbox">
    <video class="lightbox-item" controls>
        <source src="..." type="video/mp4"><source>
        <source src="..." type="video/webm"><source>
    </video>
</div>
```

-----------

## JavaScript

### Initialization

```javascript
$.vibrance.lightbox( element );
```

### Methods

```javascript

/* Open lightbox */
$.vibrance.lightbox( element ).open();

/* Close lightbox */
$.vibrance.lightbox( element ).close();

/* Open lightbox if closed / close if opened */
$.vibrance.lightbox( element ).toggle();
```

### Events

| Event Type | Description |
| ------ | ------- |
| ```vibrance.lightbox.open```   | This event is fired when an lightbox element is opened. |
| ```vibrance.lightbox.close```   | This event is fired when an lightbox element is closed. |
| ```vibrance.lightbox.toggle``` | This event is fired by a click on an ```.lightbox-item``` element. |

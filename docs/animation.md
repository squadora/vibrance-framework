# Animation

Vibrance Framework contains a collection of animations that can be easily used in a page.

## Usage

Add an ```.animation-*``` class to an element. The animation is then started when the ```.animate``` class is applied. If this class is applied directly to an element, then the animation will be automatically launched when the page is loaded. To start the animation at another time you need to add it using JavaScript with the [Scrollspy component](scrollspy.md) for example.

If you want to launch an animation when hovering over the mouse, you can wrap the element in another element with the ```.animation-hover``` class.

| Class | Description |
| ------ | ------- |
| ```.animation-fade-in``` | The element fade in. |
| ```.animation-fade-in-down``` | The element appears from the bottom. |
| ```.animation-fade-in-up``` | The element appears from the top. |
| ```.animation-fade-in-left``` | The element appears from the left. |
| ```.animation-fade-in-right``` | The element appears from the right. |
| ```.animation-fade-in-down-small``` | The element appears from a slightly lower position. |
| ```.animation-fade-in-up-small``` | The element appears from a slightly higher position. |
| ```.animation-fade-in-left-small``` | The element appears from a slightly further left position. |
| ```.animation-fade-in-right-small``` | The element appears from a slightly further right position. |
| ```.animation-zoom-in``` | The element appears with a zoomed-in view |
| ```.animation-zoom-out``` | The element appears with a zoomed-out view |
| ```.animation-shake``` | The element shakes. |

```html
<div class="animation-fade-in animate">
    <!-- contents -->
</div>

<!-- Animate on mouseover -->
<div class="animation-hover">
    <div class="animation-fade-in">
        <!-- contents -->
    </div>
</div>
```

## Reverse animation

You can reverse an animation by adding the ```.reverse-animation``` class.

```html
<div class="animation-fade-in reverse-animation animate">
    <!-- contents -->
</div>

<!-- Reverse animation on mouseover -->
<div class="animation-hover">
    <div class="animation-fade-in reverse-animation">
        <!-- contents -->
    </div>
</div>
```
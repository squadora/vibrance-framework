# Card

This component allows you to apply different card styles.

## Usage

To create a card, add the ```.card``` class to a ```<div>``` element. Add the ```.card-body``` class to apply padding. To apply the default style, add the ```.card-default``` class. The title of the card must be contained in an element with the ```.card-title``` class.

<div class="docs-demo">
    <div class="grid">
        <div class="column md-6">
            <div class="card card-body card-default">
                <h4 class="card-title">Simple card</h4>
                <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-body card-default">
    <h4 class="card-title">Simple card</h4>
    <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
</div>
```

-----------

## Shapes

Default style applies a slightly rounded card border style. You can apply two other card shape styles.

| Class | Description |
| ------ | ------- |
| ```.card-squared``` | Applies a square border style. |
| ```.card-rounded``` | Applies a rounded border style. |

<div class="docs-demo">
    <div class="grid">
        <div class="column md-6">
            <div class="card card-body card-default card-squared">
                <h4 class="card-title">Squared card</h4>
                <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
            </div>
        </div>
        <div class="column md-6">
            <div class="card card-body card-default card-rounded">
                <h4 class="card-title">Rounded card</h4>
                <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-body card-default card-squared">
    <h4 class="card-title">Squared card</h4>
    <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
</div>

<div class="card card-body card-default card-rounded">
    <h4 class="card-title">Rounded card</h4>
    <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
</div>
```

-----------

## Sizes

You can apply two other card sizes.

| Class | Description |
| ------ | ------- |
| ```.card-small``` | Applies a small card size. |
| ```.card-large``` | Applies a large card size. |

<div class="docs-demo">
    <div class="grid">
        <div class="column md-6">
            <div class="card card-body card-default card-small">
                <h4 class="card-title">Small card</h4>
                <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
            </div>
        </div>
        <div class="column md-6">
            <div class="card card-body card-default card-large">
                <h4 class="card-title">Large card</h4>
                <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-body card-default card-small">
    <h4 class="card-title">Small card</h4>
    <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
</div>

<div class="card card-body card-default card-large">
    <h4 class="card-title">Large card</h4>
    <p>Nulla sapien enim, egestas nec nibh vitae, suscipit bibendum purus.</p>
</div>
```

-----------

## Header and footer

To create a card header, create a ```<div>``` element inside and add the ```.card-header``` class. You can include the title of the card and a description with the ```.text-meta``` element for example. To create a card footer, create a ```<div>``` element and add the ```.card-footer``` class. This element is useful to include links in the card for example.

<div class="docs-demo">
    <div class="grid">
        <div class="column sm-6">
            <div class="card card-default">
                <div class="card-header">
                    <h4 class="card-title">Header</h4>
                    <p class="text-meta">A short description</p>
                </div>
                <div class="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="card-footer">
                    <a href="#">Link</a>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-default">
    <div class="card-header">
        <h4 class="card-title">Header</h4>
        <p class="text-meta">A short description</p>
    </div>
    <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="card-footer">
        <a href="#">Link</a>
    </div>
</div>
```

-----------

## Media card

To create a media card, create a ```<div>``` element inside and add the ```.card-media``` class. Insert an image inside with the ```<img>``` tag.

<div class="docs-demo">
    <div class="grid">
        <div class="column sm-6">
            <div class="card card-default">
                <div class="card-media">
                    <img src="../assets/images/image-1.jpg"> 
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card Media</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
        <div class="column sm-6">
            <div class="card card-default">
                <div class="card-body">
                    <h4 class="card-title">Card Media</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="card-media">
                    <img src="../assets/images/image-2.jpg">
                </div>
            </div>
        </div>
    </div>
</div>

```html
<!-- Media Top -->
<div class="card card-default">
    <div class="card-media">
        <img src="...">
    </div>
    <div class="card-body">
        <h4 class="card-title">Card Media</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
</div>
```

```html
<!-- Media Bottom -->
<div class="card card-default">
    <div class="card-body">
        <h4 class="card-title">Card Media</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="card-media">
        <img src="...">
    </div>
</div>
```

-----------

### Horizontal media card

To create a horizontal media card, start by adding the ```.card-horizontal``` class to the ```.card``` element. Inside the card, create a ```<div>``` element with the ```.card-media``` class. Add the ```.card-media-right``` class if you place the media on the right or the ```.card-media-left``` class if you place the media on the left.

!!!Note 
    You can include a media with the img tag if you wish. However, it is recommended to use the CSS ```background-image``` attribute on the ```.card-media``` element for a better rendering. In this case, add the ```.hide``` class to the img element so that it is hidden from users while remaining visible to search engines.

You can adjust the width of content and media with the ```.width-*``` class (see the [Utility components](utility.md#width)). 

<div class="docs-demo">
    <div class="grid">
        <div class="column xs-12">
            <div class="card card-horizontal card-default margin">
                <div class="card-media-left width-sm-40" style="background-image:url(../assets/images/image-1.jpg)">
                    <img src="../assets/images/image-1.jpg" class="hide">
                </div>
                <div class="card-body width-sm-60">
                    <h4 class="card-title">Card Media Left</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="column xs-12">
            <div class="card card-horizontal card-default">
                <div class="card-body width-sm-60">
                    <h4 class="card-title">Card Media Right</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="card-media-right width-sm-40" style="background-image:url(../assets/images/image-2.jpg)">
                    <img src="../assets/images/image-2.jpg" class="hide">
                </div>
            </div>
        </div>
    </div>
</div>

```html
<!-- Media Left -->
<div class="card card-horizontal card-default">
    <div class="card-media-left width-sm-40" style="background-image:url(...)">
        <img src="..." class="hide">
    </div>
    <div class="card-body width-sm-60">
        <h4 class="card-title">Card Media Right</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
</div>

<!-- Media Right -->
<div class="card card-horizontal card-default">
    <div class="card-body width-sm-60">
        <h4 class="card-title">Card Media Right</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="card-media-right width-sm-40" style="background-image:url(...)">
        <img src="..." class="hide">
    </div>
</div>
```

-----------


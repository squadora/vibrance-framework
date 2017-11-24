# Navbar

This component is used to create a navigation bar.

## Usage

To create a navigation bar, apply the ```.navbar``` class to a ```<nav>``` element.

Navigation bars can support multiple content types:

| Class | Description |
| ------ | ------- |
| ```.navbar-left```   | Aligns content to the left |
| ```.navbar-center```   | Allows content to be aligned centrally |
| ```.navbar-right```   | Aligns content to the right |
| ```.navbar-brand```   | Contains the name or logo of the site |
| ```.navbar-item```   | Contains various elements such as a button or a form field |
| ```.navbar-nav```   | Allows to contain a menu |

<div class="docs-demo">
    <nav class="navbar material-grey-200">
        <a class="navbar-brand" href="#">Brand</a>
        <ul class="navbar-nav">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
        </ul>
    </nav>
</div>

```html
<nav class="navbar">
    <a class="navbar-brand" href="#">Brand</a>
    <ul class="navbar-nav">
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
        <li><a href="#">Menu 4</a></li>
    </ul>
</nav>
```

-----------

## Alignment containers

If you need to align the contents of the navigation bar, use the alignment containers. To align content to the left, add the ```.navbar-left``` class to a ```<div>``` element. To align content to the right, add the ```.navbar-right``` class to a ```<div>``` element. To align content to center, add the ```.navbar-left``` class to a ```<div>``` element.

<div class="docs-demo">
    <nav class="navbar material-grey-200">
        <div class="navbar-left">
            <a class="navbar-brand" href="#">Brand</a>
            <ul class="navbar-nav">
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="#">Menu 3</a></li>
                <li><a href="#">Menu 4</a></li>
            </ul>
        </div>
        <div class="navbar-right">
            <div class="navbar-item">
                <button class="button button-primary button-small">Button</button>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="navbar">
    <div class="navbar-left">
        <a class="navbar-brand" href="#">Brand</a>
        <ul class="navbar-nav">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
        </ul>
    </div>
    <div class="navbar-right">
        <div class="navbar-item">
            <button class="button button-primary button-small">Button</button>
        </div>
    </div>
</nav>
```

!!!Note
    It is recommended that the right and left alignment container not be used simultaneously with the center alignment container for perfect centering.

<div class="docs-demo">
    <nav class="navbar material-grey-200">
        <div class="navbar-center">
            <a class="navbar-brand" href="#">Brand</a>
            <ul class="navbar-nav">
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="#">Menu 3</a></li>
                <li><a href="#">Menu 4</a></li>
            </ul>
            <div class="navbar-item">
                <button class="button button-primary button-small">Button</button>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="navbar">
    <div class="navbar-center">
        <a class="navbar-brand" href="#">Brand</a>
        <ul class="navbar-nav">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
        </ul>
        <div class="navbar-item">
            <button class="button button-primary button-small">Button</button>
        </div>
    </div>
</nav>
```

-----------

## Brand

For create a navbar brand element, add the ```.navbar-brand``` class to a ```<a>``` element. You can insert the site name or a logo image.

<div class="docs-demo">
    <nav class="navbar material-grey-200">
        <div class="navbar-left">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/vibrance-framework-logo-x72.png" width="55">
            </a>
        </div>
    </nav>
</div>

```html
<!-- Text brand -->
<nav class="navbar">
    <a class="navbar-brand" href="#">Brand</a>
</nav>

<!-- Image brand -->
<nav class="navbar">
    <a class="navbar-brand" href="#">
        <img src="...">
    </a>
</nav>
```

-----------

## Nav

To create a horizontal navigation list in the navigation bar, add the ```.navbar-nav``` class to a ```<div>``` element.

```html
<nav class="navbar">
    <ul class="navbar-nav">
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
        <li><a href="#">Menu 4</a></li>
    </ul>
</nav>
```

-----------

## Dropdown

You can insert a dropdown within an element of a navigation list as in the following example.

<div class="docs-demo">
    <nav class="navbar material-grey-200">
        <div class="navbar-left">
            <a class="navbar-brand" href="#">Brand</a>
            <ul class="navbar-nav">
                <li>
                    <button class="button button-text dropdown-toggle">Dropdown Menu</button>
                    <div class="dropdown dropdown-default" data-mode="hover">
                        <ul class="nav nav-default">
                            <li class="nav-header">Heading</li>
                            <li class="nav-divider"></li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                            <li><a href="#">Item 4</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="navbar">
    <ul class="navbar-nav">
        <li><a href="#">Menu 1</a></li>
        <li>
            <button class="button button-text dropdown-toggle">Dropdown</button>
            <div class="dropdown dropdown-default">
                <ul class="nav nav-default">
                    <li class="nav-header">Heading</li>
                    <li class="nav-divider"></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Menu 3</a></li>
        <li><a href="#">Menu 4</a></li>
    </ul>
</nav>
```

!!!Important
    The dropdown to be displayed at the click of a button is automatically detected if a ```.dropdown``` element is placed directly after the button. If not, you must initialize the dropdown with ```toggle``` option.

For more information on dropdown, see the [Dropdown components](dropdown.md).

-----------

# Column

The column component allows you to vertically separate the content in the form of columns.

## Usage

Columns are part of the [Grid component](grid.md). The grid is based on a total of 12 columns. By default, the column size automatically adjusts itself according to the number of columns contained in the container element.

To create a column, apply the ```.column``` class to a ```<div>``` element. Columns must be placed inside a ```.grid``` element.

<div class="docs-demo text-center">
    <div class="grid margin margin-top">
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Column</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Column</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Column</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Column</span></div>
        </div>
    </div>
</div>

```html
<div class="grid">
    <div class="column">
        <!-- Column 1 -->
    </div>
    <div class="column">
        <!-- Column 2 -->
    </div>
    <div class="column">
        <!-- Column 3 -->
    </div>
    <div class="column">
        <!-- Column 4 -->
    </div>
</div>
```

-----------

## Size

The size of each column can be adjusted according to the screen size by means of prefixes ```xs-*```, ```sm-*```, ```md-*```, ```lg-*``` and ```xl-*```. The asterisk ```*``` must be replaced by a number corresponding to the desired size (from 1 to 12).

| Class | Description |
| ------ | ------- |
| ```.xs-*``` | Applies a size on extra-small screen (< 576px). |
| ```.sm-*``` | Applies a size on small screen (≥ 576px). |
| ```.md-*``` | Applies a size on medium screen (≥ 768px). |
| ```.lg-*``` | Applies a size on large screen (≥ 992px). |
| ```.xl-*``` | Applies a size on extra-large screen (≥ 1200px). |

<div class="docs-demo text-center">
    <div class="grid margin">
        <div class="column md-6 lg-3">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>.md-6 .lg-3</span></div>
        </div>
    </div>
</div>

```html
<div class="grid">
    <div class="column md-6 lg-3">
        <!--  
            This column is displayed with a half-size on a medium screen and with a one-fourth-size on an average screen.
        -->
    </div>
</div>
```

!!!Note
    The sizes applied to a screen size category are retained on the larger screen sizes. For example, if you apply a ```.sm-6``` size to a column, it will retain that width on the ```md```, ```lg``` and ```xs``` screens unless you set a specific size for those screens. For screen sizes smaller than this class, the column width is automatically fixed.

!!!Note
    By default, columns are displayed in full width from ```sm``` size screens and bellow (equivalent to ```.xs-12 .sm-12``` class).

-----------


## Offset

To offset a column, apply the ```.offset-*-*``` class. The first asterisk corresponds to the size of the screen on which an offset (```xs```, ```sm```, ```md```, ```lg```, ```xl```) must be applied. The second asterisk indicate the offset to applies.

You can also use the ```.offset-*``` class to apply an offset from size ```xs```. The second asterisk indicate the offset to applies.

<div class="docs-demo text-center">
    <div class="grid margin">
        <div class="column md-6 md-offset-6">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>md-offset-6</span></div>
        </div>
    </div>
</div>

```html
<div class="grid">
    <div class="column md-6 md-offset-6">
        <!-- Contents -->
    </div>
</div>
```

-----------


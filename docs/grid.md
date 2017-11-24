# Grid

This component is used to contain columns.

## Usage

To create a grid, add the ```.grid``` class to a ```<div>``` element. The grids must be optimally placed in the [Container component](container.md).

```html
<div class="grid">
    <!-- Columns -->
</div>
```

See the [Column component](column.md) for learn more about columns.

-----------

## Spacing

By default, the grid add a spacing between columns. For turn off spacing, add the ```.grid-spacing-off``` class to a ```.grid``` element.
You can also set two other spacing sizes with the following classes:

| Class | Description |
| ------ | ------- |
| ```.grid-spacing-medium``` | Adds a medium spacing between columns. |
| ```.grid-spacing-large``` | Adds a large spacing between columns. |

<div class="docs-demo text-center">
    <div class="grid grid-spacing-off margin">
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing off</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing off</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing off</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing off</span></div>
        </div>
    </div>
    <div class="grid grid-spacing-medium margin margin-top">
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing medium</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing medium</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing medium</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing medium</span></div>
        </div>
    </div>
    <div class="grid grid-spacing-large margin margin-top">
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing large</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing large</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing large</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white padding-medium padding-top-medium"><span>Spacing large</span></div>
        </div>
    </div>
</div>

```html
<!-- No spacing -->
<div class="grid grid-spacing-off">
    <!-- Columns -->
</div>

<!-- Large spacing -->
<div class="grid grid-spacing-large">
    <!-- Columns -->
</div>
```

-----------

## Alignment

By default, the columns are aligned at the center of the grid. You can align columns at the top and bottom of the grid with the following classes:

| Class | Description |
| ------ | ------- |
| ```.grid-align-top``` | Align columns at the top. |
| ```.grid-align-center``` | Align columns at the center. |
| ```.grid-align-bottom``` | Align columns at the bottom. |

<div class="docs-demo text-center">
    <div class="grid material-grey-100 grid-align-top margin" style="height: 150px">
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Top</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Top</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Top</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Top</span></div>
        </div>
    </div>
    <div class="grid material-grey-100 grid-align-center margin margin-top" style="height: 150px">
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Center</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Center</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Center</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Center</span></div>
        </div>
    </div>
    <div class="grid material-grey-100 grid-align-bottom margin margin-top" style="height: 150px">
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Bottom</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Bottom</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Bottom</span></div>
        </div>
        <div class="column">
            <div class="material-green-100 text-white"><span>Align Bottom</span></div>
        </div>
    </div>
</div>

```html
<div class="grid grid-align-top">
    <!-- Columns -->
</div>

<div class="grid grid-align-center">
    <!-- Columns -->
</div>

<div class="grid grid-align-bottom">
    <!-- Columns -->
</div>
```

-----------


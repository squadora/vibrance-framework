# Pagination

This component allows you to create a pagination element to navigate between the pages of a site.

## Usage

Add the ```.pagination``` class to a ```<ul>``` element. 

To create a previous button, add the ```.nav-pagination``` and ```.previous``` classes to the first ```<li>``` element. To create a next button, add the ```.nav-pagination``` and ```.next``` classes to the last ```<li>``` element. 

To make an element active, add the ```.active``` class. 
To deactivate an item, add the ```.disabled``` class.

<div class="docs-demo">
    <ul class="pagination">
        <li class="nav-pagination previous disabled"><a href=""><i class="fa fa-chevron-left"></i></a></li>
        <li class="active"><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li class="nav-pagination next"><a href=""><i class="fa fa-chevron-right"></i></a></li>
    </ul>
</div>

```html
<ul class="pagination">
    <li class="nav-pagination previous disabled"><a href=""><i class="fa fa-chevron-left"></i></a></li>
    <li class="active"><a href="">1</a></li>
    <li><a href="">2</a></li>
    <li><a href="">3</a></li>
    <li><a href="">4</a></li>
    <li><a href="">5</a></li>
    <li><a href="">6</a></li>
    <li class="nav-pagination next"><a href=""><i class="fa fa-chevron-right"></i></a></li>
</ul>
```

!!!Note
    In this example, the icons used come from Font Awesome.

-----------

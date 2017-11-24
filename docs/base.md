# Base

Vibrance Framework applies a default style to basic HTML elements.

## Usage

The style applied to HTML5 elements is based on [Normalize.css](https://necolas.github.io/normalize.css/). This makes it possible to have an identical and consistent rendering between the different browsers.

!!!Note
    Some elements such as [Form](form.md), [Table](table.md) or [Button](button.md) do not have a default style and require the addition of a class for a style to be applied.

-----------

## Link

The John element allows you to create a [hyperlink](#!). Add the ```.link-muted``` class to apply a muted link style.

```html
<a href="#"></a>

<!-- Muted link style -->
<a class="link-muted" href="#"></a>
```

-----------

## Content tags

The table below gives you an overview of the default style applied to the most commonly used basic elements at text level.

| Class | Description |
| ------ | ------- |
| ```<abbr>``` | Defines an <abbr title="Example">abbreviation or an acronym</abbr> |
| ```<b>``` | Specifies <b>bold text</b> |
| ```<cite>``` | Defines <cite>the title of a work</cite> |
| ```<code>``` | Defines a piece of <code>computer code</code>. |
| ```<del>``` | Defines text that has been <del>deleted</del> from a document. |
| ```<dfn>``` | Specifies the <dfn>defining instance of a term</dfn> |
| ```<em>``` | Creates <em>emphasized text<em> |
| ```<i>``` | Differentiates <i>piece of text</i> from the main text. |
| ```<ins>``` | Indicates text that has been <ins>inserted</ins> into a document. |
| ```<kbd>``` | Defines <kbd>keyboard input</kbd>. |
| ```<mark>``` | Defines <mark>marked text</mark>. |
| ```<q>``` | Specifies <q>short quotation</q> |
| ```<s>``` | Defines <s>strikethrough</s> text |
| ```<samp>``` | Defines <samp>sample output</samp> from a computer program. |
| ```<small>``` | Defines <small>smaller text</small>. |
| ```<strong>``` | Defines <strong>important text</strong>. |
| ```<sub>``` | Defines <sub>subscript text</sub>. |
| ```<sup>``` | Defines <sup>superscript text</sup>. |
| ```<u>``` | Defines <u>underlined</u> text |
| ```<var>``` | Defines a <var>variable</var> |

-----------

### Paragraph

To create a paragraph, use the ```<p>``` tag.

```html
<p>My paragraph</p>
```

-----------

### Blockquote

The ```<blockquote>``` element is used to cite several lines of content from another source.

<div class="docs-demo">
    <blockquote cite="#">
        <p>Nos paucis ad haec additis finem faciamus aliquando; Cuius similitudine perspecta in formarum specie ac dignitate transitum est ad honestatem dictorum atque factorum.</p>
        <footer>John Doe, <cite><a href="#">Society</a></cite></footer>
    </blockquote>
</div>

```html
<blockquote cite="#">
    <p>Nos paucis ad haec additis finem faciamus aliquando; Cuius similitudine perspecta in formarum specie ac dignitate transitum est ad honestatem dictorum atque factorum.</p>
    <footer>John Doe, <cite><a href="#">Society</a></cite></footer>
</blockquote>
```

-----------

### Headings

See the [Typography](typography.md) component for more information.

-----------

### List

See the [List](list.md) component for more information.

-----------

### Description List

See the [Description List](description-list.md) component for more information.

-----------

### Thematic break

The ```<hr>``` element is used to separate content in an page.

<div class="docs-demo">
    <hr>
</div>

```html
A content
<hr>
A another thematic content
```

-----------

# Comment

This component allows you to create a comments list.

## Usage

Create a ```ul``` element and add the ```.comment-list``` class.

```html
<ul class="comment-list">
    <li>
        <!-- Item comment -->
    </li>
</ul>
```

The comments in the list are composed of several elements.

| Class | Description |
| ------ | ------- |
| ```.comment``` | Block representing a comment. |
| ```.comment-header``` | The header of the comment block. |
| ```.comment-avatar``` | Element containing the author's avatar. |
| ```.comment-infos``` | Element containing information about the comment. |
| ```.comment-author``` | Element containing the author's name. |
| ```.comment-meta``` | Element containing metadata and the button to reply to the comment. |
| ```.comment-body``` | The body of the comment. |

<div class="docs-demo">
    <ul class="comment-list">
        <li>
            <article class="comment">
                <header class="comment-header">
                    <div class="comment-avatar">
                        <img src="../assets/images/avatar-1.png">
                    </div>
                    <div class="comment-infos">
                        <span class="comment-author">Jane Doe</span>
                        <span class="comment-meta text-meta">5 hours ago | <a href="" class="link-muted">Reply</a></span>
                    </div>
                </header>
                <div class="comment-body">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </article>
        </li>
        <ul class="comment-list">
            <li>
                <article class="comment">
                    <header class="comment-header">
                        <div class="comment-avatar">
                            <img src="../assets/images/avatar-2.png">
                        </div>
                        <div class="comment-infos">
                            <span class="comment-author">John Doe</span>
                            <span class="comment-meta text-meta">3 hours ago | <a href="" class="link-muted">Reply</a></span>
                        </div>
                    </header>
                    <div class="comment-body">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </article>
            </li>
        </ul>
    </ul>
</div>

```html
<ul class="comment-list">
    <li>
        <article class="comment">
            <header class="comment-header">
                <div class="comment-avatar">
                    <img  src="...">
                </div>
                <div class="comment-infos">
                    <span class="comment-author">...</span>
                    <span class="comment-meta text-meta">... | <a href="" class="link-muted">Reply</a></span>
                </div>
            </header>
            <div class="comment-body">
                <p></p>
            </div>
        </article>
    </li>
    <ul class="comment-list">
        <li>
            <article class="comment">
                <header class="comment-header">
                    <div class="comment-avatar">
                        <img  src="...">
                    </div>
                    <div class="comment-infos">
                        <span class="comment-author">...</span>
                        <span class="comment-meta text-meta">... | <a href="" class="link-muted">Reply</a></span>
                    </div>
                </header>
                <div class="comment-body">
                    <p></p>
                </div>
            </article>
        </li>
    </ul>
</ul>
```

-----------

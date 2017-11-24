# Installation

Follow the instructions bellow to find out how to install Vibrance Framework correctly.

## Package Contents

After downloading, extract the contents of the zip file. It contains the compiled JavaScript and CSS files.

<div class="margin-top-20 file-tree">
    <ul>
        <li>
            <span class="folder"><i class="fa fa-folder icon"></i> css</span>
            <ul class="subfolder">
                <li>
                    <span class=""><i class="fa fa-file icon"></i> vibrance-framework.css</span>
                    <span class="file-description">Unminified CSS file</span>
                </li>
                <li>
                    <span class=""><i class="fa fa-file icon"></i> vibrance-framework.min.css</span>
                    <span class="file-description">Minified CSS file</span>
                </li>
                <li>
                    <span class=""><i class="fa fa-file icon"></i> colors.css</span>
                    <span class="file-description">Minified color classes file (optional)</span>
                </li>
                <li>
                    <span class=""><i class="fa fa-file icon"></i> colors.min.css</span>
                    <span class="file-description">Minified color classes file (optional)</span>
                </li>
            </ul>
        </li>
        <li>
            <span class="folder"><i class="fa fa-folder icon"></i> js</span>
            <ul class="subfolder">
                <li>
                    <span class=""><i class="fa fa-file icon"></i> vibrance-framework.js</span>
                    <span class="file-description">Unminified JavaScript file</span>
                </li>
                <li>
                    <span class=""><i class="fa fa-file icon"></i> vibrance-framework.min.js</span>
                    <span class="file-description">Minified JavaScript file</span>
                </li>
            </ul>
        </li>
    </ul>
</div>

## Project Structure

The directory of your project should look like the example below. In production, it is the minified ```.min``` versions of the files that are usually used. These files are "compressed" for faster loading. However, it is preferable to use non-mineralized files in development. The optional ```colors.css``` or ```colors.min.css``` file allows you to use color classes.

<div class="margin-top-30 file-tree">
    <ul>
        <li>
            <span class="folder"><i class="fa fa-folder icon"></i> Project</span>
            <ul class="subfolder">
                <li>
                    <span class="folder"><i class="fa fa-folder icon"></i> css</span>
                    <ul class="subfolder">
                        <li>
                            <span class=""><i class="fa fa-file icon"></i> vibrance-framework.css</span>
                            <span class="file-description">or vibrance-framework.min.css</span>
                        </li>
                        <li>
                            <span class=""><i class="fa fa-file icon"></i> colors.css</span>
                            <span class="file-description">or colors.min.css - CSS file allowing the use of color classes (optional)</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="folder"><i class="fa fa-folder icon"></i> js</span>
                    <ul class="subfolder">
                        <li>
                            <span class=""><i class="fa fa-file icon"></i> vibrance-framework.js</span>
                            <span class="file-description">or vibrance-framework.min.js</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span class=""><i class="fa fa-file icon"></i> index.html</span>
                    <span class="file-description">Main html file</span>
                </li>
            </ul>
        </li>
    </ul>
</div>

## HTML Markup

The next step is to make sure that your HTML5 documents are linked to the framework's CSS and JavaScript files. Note that Vibrance Framework needs [JQuery](https://jquery.com/) to work. You can also integrate [Font Awesome](http://fontawesome.io/) to get an icon library, but know that the framework is compatible with many other icon libraries. Follow the example below.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!--Import Vibrance Framework css files-->
        <link href="css/vibrance-framework.css" rel="stylesheet" type="text/css"/>
        <link href="css/theme.css" rel="stylesheet" type="text/css"/>
        <link href="css/colors.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>

        <!--Import jQuery before vibrance-framework.js-->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
        <script src="js/vibrance-framework.js" type="text/javascript"></script>
    </body>
</html>
```
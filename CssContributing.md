# css
Standards for developing flexible, durable, and sustainable CSS.


## Syntax

- Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
- When grouping selectors, keep individual selectors to a single line.
- Include one space after `:` in property declarations.
- Include one space before `{` in rule declarations, and place the closing `}` of declaration blocks on a new line.
- Comma-separated property values should include a space after each comma (e.g., box-shadow).
- Don't include spaces after commas within `rgb()`, `rgba()`, `translate()`, or `rect()` values. This helps differentiate multiple values (comma, no space) from multiple property values (comma with space).
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
- Don't prefix property values or color parameters with a leading zero (e.g., `.5` instead of `0.5` and `-.5px` instead of `-0.5px`).
- Lowercase all hex values, e.g., `#fff`.  Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
- Use shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.

```
/* Bad Example */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good Example */
.selector,
.selector-secondary,
.selector[type="text"] {
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
  margin-bottom: 15px;
  padding: 15px;
}
```

## Property Declarations

Order alphabetically

```
// Bad Example
.selector-1 {
  display: block;
  color: #333;
  font-family: helvetica, arial, sans-serif;
  background-color: #fff;
}

// Good Example
.selector-1 {
  background-color: #fff;
  color: #333;
  display: block;
  font-family: helvetica, arial, sans-serif;
}
```

List @extend(s) first

```
.main-content {
  @extends %module;
  ...
}
```

List "regular" styles next

```
.main-content {
  @extends %module;
  background-color: $brand-primary;
  ...
}
```

List @include(s) next

```
.main-content {
  @extends %module;
  background-color: $brand-primary;
  @include clearfix();
  ...
}
```

All vendor prefixes use @mixins

```
.main-content {
  @extends %module;
  background-color: $brand-primary;
  @include clearfix();
  @include transition(all 0.3s ease-out);
  ...
}
```

If you're using Sublime Text, these packages can help with the above:

- [Sass Beautify](https://packagecontrol.io/packages/SassBeautify) for spacing, indents
- [CSS Comb](https://github.com/csscomb/sublime-csscomb) for spacing, indents, alpha sort

## Nesting

This can get out of hand quick, and when it does it tends to make for difficult merging. Also, it becomes difficult to identify where selector optimizations can be made. Let's limit nesting to the following css:
- psuedo selectors like `:hover` or `:after`
- classes that denote active or dormant states
- media queries.
- maximum nesting: 3 levels, 50 lines

```
// Bad Example
.header {
  .navbar {
    > li
      > a {
        color: $text-color
        display: block;
        text-align: center;

        &:hover {
          color: $brand-primary-blue;
        }
      }
    }
    @media(min-width: 768px){
      float: left;
    }
  }
}

// Good Example
.navbar > li > a {
  color: $text-color
  display: block;

  &:hover,
  &:visited,
  &:focus,
  &:active,
  &.active {
    color: $brand-primary-blue;
  }
  @media(min-width: 768px){
    float: left;
  }
}

// Good V2 Example
.thing {
  property: value;
  @include stuff($spacer, $brand-primary);

  @include media-breakpoint-up(md) {
    property: value;
  }
}
.thing-alt {
  property: value;

  &.class,
  &:hover {
    property: value;
  }
  @include media-breakpoint-up(md) {
    property: value;
  }
}
.stuff {
  @include media-breakpoint-up(md) {
    property: value;
  }
}

```

## Naming Conventions

- Use ID and class names that are as short as possible but as long as necessary.
- IDs are camel-cased to help create a clear visual distinction amongst classes.

```
// Not recommended
#buy-now-modal

// Recommended
#buyNowModal
```

#### Classes

- Use naming conventions set forth by the CSS language itself, i.e. border-radius-top-left, etc.
- Keep classes lowercase and use dashes (not underscores or camelCase). Dashes serve as natural breaks in related class (e.g., .btn and .btn-danger).
- Prefix classes based on the closest parent or base class.

```
// Not Recommended
.btnClickHere
.btn_click_here

// Recommended
.btn-click-here
```

## Selectors

- Use classes over generic element tag for optimum rendering performance.
- Avoid using several attribute selectors (e.g., [class^="..."]) on commonly occuring components. Browser performance is known to be impacted by these.
- Keep selectors short and strive to limit the number of elements in each selector to three.
- Scope classes to the closest parent only when necessary (e.g., when not using prefixed classes).

```
/* Bad example */
span { ... }
.page-container #header .navbar .nav-items .nav-link { ... }
.avatar { ... }

/* Good example */
.avatar { ... }
.page-container .navbar { ... }
.navbar .nav-link { ... }
```

### Variables

- Variables are lowercase with multiple names separated using hyphens.

```
// Not recommended
$brandPrimaryGreen;

// Recommended
$brand-primary-green
```

## Z-index Tree

We use a z-index scale to build and maintain the layering of page elements. The scale provides values to apply to an element. The applications are maintained using the syntax below, leading with the scale value followed by the element it's being applied to.

```
//== Z-index Scale
//
$zindex-negative:               -1 !default;
$zindex-0:                      0 !default;
$zindex-1:                      100 !default;
$zindex-2:                      200 !default;
...

// Zindex applications
$zindex-negative--bg-pattern:   $zindex-negative;
$zindex-1--logo-wrap:           $zindex-1;
$zindex-2--breadcrumbs:         $zindex-2;
```

## Other General Practices

- Variablize all colors, e.g. `$brand-primary-blue: #27c8ec !default;`
- Use single quotes with all strings, eg. `import: 'globals/page-base; content: '';`
- Use `0` instead of `none` where applicable for linting purposes.

## Commenting

- Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.
- Be sure to write in complete sentences for larger comments and succinct phrases for general notes.
- Use `//` for comment blocks (instead of `/* */`).

```
// Bad example
//** Modal header
.modal-header {
  ...
}

// Good example
//** Wrapping element for .modal-title and .modal-close
.modal-header {
  ...
}
```

The commenting heirarchy below is taken directly from Bootstrap, where `<header>` is the parent element, `<nav>` its direct descendant, and the menu links are grandchildren of sorts.

```
//
// Header Styles
// --------------------------------------------------

//== Navigation
//
//## Menu styles

//** Menu link styles
```
#### SCSS Linting
Added scss-linting to the gulpfile in `static/v2` on 8/17.

Installation for linting:
* run `gem install scss_lint`
* in the `static/v2` directory run `npm install`
* run `gulp scss-lint`

scss-lint module on [github](https://github.com/brigade/scss-lint) and [npm](https://www.npmjs.com/package/gulp-scss-lint).
Linters rulesets and how they work [here](https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md).
Sorting rules can be found in `/static/v2/src/scss/lint.yml` or [here on github](https://github.com/insurancezebra/zfront/blob/develop/zfront/static/v2/src/scss/lint.yml).

## V2 Commenting modifications
The V2 project introduces a new version of Bootstrap and two new CSS projects. The first being "Landing Page" which is used only for /compare/start page that actually uses Bootstrap 3 so ignore that project all together for now. The other project includes styles for the homepage, vehicle select page, city pages, carrier pages and so on.  Our intention is to migrate all pages to V2 (and not in the landing page project) A comprehensive list of all these pages can be found in [this Google Sheet](https://docs.google.com/spreadsheets/d/1tAaYIEak3MvP-qvIwOptN1uUH1VVn5Yw2H7e-4O_zaI/edit#gid=707327030). The commenting structure changes in the Bootstrap 4 so we'll follow suit in our project as well with the following standards...

```

//
// File Name or Section Break
//

// Single Line Clarifying Comment
```
These are evolving rules and we'll make them up as we go but try to be consistent as you build. The headline or new section comments include a row of slashes above and below the comment. In addition to the slashes we'll also add a space above and below. A more active / robust example can be found below...

```

//
// Thing Page
//

// Main Area
.thing-main {
    property: value;
    property: value; // Sample inset comment
}

// Alt Main wrapper used on wider pages
.thing-main-alt {
    property: value;
}

// Things Footer
//
// Any time a headline has supporting comments it will be added here and structured like this

.thing-footer {
    property: value; // Some clarifying comment only used in extreme cases
}
.thing-footer h2 {
    property: value;
}

// Footer Ads - Seen only on the homepage
.thing-footer-ad {
    property: value;
}
```
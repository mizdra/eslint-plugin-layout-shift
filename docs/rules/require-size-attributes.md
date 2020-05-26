# Forbid media element without an explicit size attributes (@mizdra/layout-shift/require-size-attributes)

The Web has been using `<img>` tags to load images since ancient times. However, the `<img>` tag does not have any attribute to embed the aspect ratio. As a result, the size of the responsive img element cannot be determined until the browser fetches the image from the network and finishes loading, and there is a problem that [Layout Shift](https://web.dev/cls) occurs on the page.

To solve this problem, [the idea of computing the layout using the width and height attributes](https://developer.mozilla.org/en-US/docs/Web/Media/images/aspect_ratio_mapping) has been proposed and is starting to be implemented in browsers.

- Chrome: https://www.chromestatus.com/feature/5695266130755584
- Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1547231
- Safari: https://trac.webkit.org/changeset/254669/webkit

This rule forbids media element without an explicit size attributes to prevent Layout Shift from occurring.

## Rule Details

This rule forbids media element without an explicit `width` and `height` attributes.

## Examples

:ok_woman: Examples of **correct** code for this rule:

```jsx
const Img1 = <img width="200" height="100" />;

const width = 200;
const height = 100;
const Img2 = <img width={width} height={height} />;
```

:no_good: Examples of **incorrect** code for this rule:

```jsx
const Img1 = <img width="200" />;
const Img2 = <img height="100" />;
const Img3 = <img />;

const props = { width: 200, height: 100 };
const Img4 = <img {...props} />;
```

## Supported Media Element

- [x] `<img>`
- [ ] `<video>`
- [ ] `<source>`
- [ ] Third-party component (ex. `<LazyImg>`)

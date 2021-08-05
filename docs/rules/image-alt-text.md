# Image requires alt text that is descriptive about what the image contains. (image-alt-text)

Alternative (alt) text is a short, written description of an image. This attribute is critical for web accessibility and benefical for SEO. Alt text is read by screen readers, allowing users with visual impairments to understand the contents and/or function of an image. Additionally, search engines use alt text to return search results.

Consider these tips when writing alt text:

- Be specific and succinct
- Don't include "Image of" or "Photo of"
- Read your alt text to yourself. Can you form a detailed picture in your head? If not, be more descriptive.

## Rule Details

This rule aims to ensure alt text has been added to any instance of Grommet's [Image](https://v2.grommet.io/image) component.

Examples of **incorrect** code for this rule:

```js
<Image src="/ocean.png" />
```

Examples of **correct** code for this rule:

```js
<Image src="/ocean.png" alt="Waves breaking on an empty shoreline at sunset" />
```

# csp-builder
> A builder tool to help generate CSPs in a type-safe way

[![Travis (.org)](https://img.shields.io/travis/pgilad/csp-builder.svg?style=for-the-badge)](https://travis-ci.org/pgilad/csp-builder)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

## Motivation

I had to create a [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) and found the process rather unintuitive and mistake-prone.
If you've created a Content Security Policy before, there are 3 paths to choose (or a mixture):

1. Use a reporting wizard ([Example](https://scotthelme.co.uk/report-uri-csp-wizard/))

2. Use a generator wizard ([Example](https://www.cspisawesome.com/))

3. Manually edit policy, usually with a wash-rinse-repeat recipe

Any path you choose, you eventually end up with a big string of CSP content, very hard to edit or maintain. This is especially
true if you opt in to create the CSP manually.

For that reason, I wanted a builder tool to help me with generating the string, in a type-safe way, but could not find one,
so I created this tool.

## Usage

For now, see the [tests](./__tests__/index.spec.ts) on how to use this tool.

## Future plans

I've noticed there are possible optimizations to be done for the CSP, especially regarding deprecations and conciseness.
 
## License

MIT © [Gilad Peleg](https://www.giladpeleg.com)

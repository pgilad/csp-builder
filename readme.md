# csp-builder

> A builder tool to help generate CSPs in a type-safe way

[![Travis (.org)](https://img.shields.io/travis/pgilad/csp-builder.svg?style=for-the-badge)](https://travis-ci.org/pgilad/csp-builder)
[![Codecov](https://img.shields.io/codecov/c/github/pgilad/csp-builder.svg?style=for-the-badge)](https://codecov.io/gh/pgilad/csp-builder)
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

```typescript
import * as CSP from 'csp-builder';

const csp = new CSP.Builder();

const analyticsDomain = 'www.google-analytics.com';
const ownDomain = 'www.giladpeleg.com';
const reportUri = 'https://giladpeleg.report-uri.com/r/d/csp/enforce';

const extensiveSourceDirective = [
    CSP.PredefinedSource.Self,
    CSP.SchemaSource.Data,
    analyticsDomain,
    ownDomain,
];
const regularSourceDirective = [CSP.PredefinedSource.Self, analyticsDomain, ownDomain];
const localSourceDirective = [CSP.PredefinedSource.Self, ownDomain];

csp.addDirective(new CSP.DefaultSource().addValue(regularSourceDirective))
    .addDirective(new CSP.FontSource().addValue(extensiveSourceDirective))
    .addDirective(new CSP.ImageSource().addValue(extensiveSourceDirective))
    .addDirective(new CSP.MediaSource().addValue(localSourceDirective))
    .addDirective(new CSP.ObjectSource().addValue([CSP.PredefinedSource.None]))
    .addDirective(new CSP.FontSource().addValue(extensiveSourceDirective))
    .addDirective(
        new CSP.PrefetchSource().addValue([CSP.PredefinedSource.Self, analyticsDomain, ownDomain])
    )
    .addDirective(
        new CSP.ScriptSource().addValue([
            CSP.PredefinedSource.Self,
            CSP.PredefinedSource.UnsafeInline,
            analyticsDomain,
            ownDomain,
        ])
    )
    .addDirective(
        new CSP.StyleSource().addValue([
            CSP.PredefinedSource.Self,
            CSP.PredefinedSource.UnsafeInline,
            ownDomain,
        ])
    )
    .addDirective(new CSP.WorkerSource().addValue(localSourceDirective))
    .addDirective(new CSP.ReportUri().setValue(reportUri));

console.log(csp.stringify());
```

See more usages in the [tests](./__tests__/index.spec.ts)

## Future plans

I've noticed there are possible optimizations to be done for the CSP, especially regarding deprecations and conciseness.

## License

MIT © [Gilad Peleg](https://www.giladpeleg.com)

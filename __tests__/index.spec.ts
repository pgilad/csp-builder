import * as CSP from '../src/index';

test('Using builder without directives outputs empty string', () => {
    const csp = new CSP.Builder();

    expect(csp.stringify()).toEqual('');
});

test('Correctly outputs a single directive', () => {
    const csp = new CSP.Builder();

    const directive = new CSP.ConnectSource().addValue(CSP.PredefinedSource.Self);

    csp.addDirective(directive);

    expect(csp.stringify()).toEqual("connect-src 'self';");
});

test('Using same directive twice overrides the previous', () => {
    const csp = new CSP.Builder();

    const directive1 = new CSP.ConnectSource().addValue(CSP.PredefinedSource.Self);
    const directive2 = new CSP.ConnectSource().addValue(CSP.PredefinedSource.None);

    csp.addDirective(directive1).addDirective(directive2);

    expect(csp.stringify()).toEqual("connect-src 'none';");
});

test('Correctly spaces between 2 different directives', () => {
    const csp = new CSP.Builder();

    const directive1 = new CSP.ConnectSource().addValue(CSP.PredefinedSource.Self);
    const directive2 = new CSP.ScriptSource().addValue(CSP.PredefinedSource.Self);

    csp.addDirective(directive1).addDirective(directive2);

    expect(csp.stringify()).toEqual("connect-src 'self'; script-src 'self';");
});

test('Throws when directive is beyond requested CSP level', () => {
    const csp = new CSP.Builder(2);

    const directive = new CSP.PrefetchSource().addValue(CSP.PredefinedSource.Self);

    expect(() => csp.addDirective(directive)).toThrowError(/not supported/);
});

test('Toggle directives work as well', () => {
    const csp = new CSP.Builder();

    const directive = new CSP.BlockAllMixedContent().toggle(true);

    csp.addDirective(directive);

    expect(csp.stringify()).toEqual('block-all-mixed-content;');
});

test('Report directives work as well', () => {
    const csp = new CSP.Builder();

    const directive = new CSP.ReportUri().setValue('/csp');

    csp.addDirective(directive);

    expect(csp.stringify()).toEqual('report-uri /csp;');
});

test('Adding multiple values to a multi value directive', () => {
    const csp = new CSP.Builder();

    const directive = new CSP.MediaSource().addValue([CSP.PredefinedSource.Self, 'www.google.com']);

    csp.addDirective(directive);

    expect(csp.stringify()).toEqual("media-src 'self' www.google.com;");
});

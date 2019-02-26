export enum PredefinedSource {
    None = "'none'",
    ReportSample = "'report-sample'",
    Self = "'self'",
    StrictDynamic = "'strict-dynamic'",
    UnsafeEval = "'unsafe-eval'",
    UnsafeInline = "'unsafe-inline'",
}

export enum SchemaSource {
    Blob = 'blob:',
    Data = 'data:',
    Filesystem = 'filesystem:',
    Http = 'http:',
    Https = 'https:',
    MediaStream = 'mediastream:',
}

export type HostSource = string;
export type SourceList = PredefinedSource | SchemaSource | HostSource;

export enum DirectiveType {
    Fetch = 'fetch',
    Document = 'document',
    Navigation = 'navigation',
    Reporting = 'reporting',
    Other = 'other',
}

export type DirectiveName = string;
export type CspVersion = number;

export interface Directive {
    getDirectiveName(): DirectiveName;

    getDirectiveType(): DirectiveType;

    getMinimumCspVersion(): CspVersion;

    serialize(): string;
}

export interface MultiValueDirective extends Directive {
    addValue(value: any | any[]): this;
}

export interface SingleValueDirective extends Directive {
    setValue(value: any): this;
}

export interface ToggleDirective extends Directive {
    toggle(value: boolean): this;
}

export type Directives = MultiValueDirective | SingleValueDirective | ToggleDirective;

import { DirectiveName, Directives } from './types';

export class Builder {
    public level: number;
    private directives: Map<DirectiveName, Directives> = new Map();

    constructor(level = 3) {
        this.level = level;
    }

    public addDirective(directive: Directives) {
        const directiveName = directive.getDirectiveName();
        if (directive.getMinimumCspVersion() > this.level) {
            throw new Error(
                `Directive ${directiveName} is not supported by CSP level of ${this.level}`
            );
        }

        this.directives.set(directiveName, directive);
        return this;
    }

    public stringify() {
        return Array.from(this.directives.values())
            .map((directive) => directive.serialize())
            .join(' ')
            .trim();
    }
}

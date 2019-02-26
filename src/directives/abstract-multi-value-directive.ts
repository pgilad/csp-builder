import { DirectiveType, MultiValueDirective } from '../types';

export abstract class AbstractMultiValueDirective<T> implements MultiValueDirective {
    private state: Set<T> = new Set();

    public addValue(value: T | T[]) {
        const values = Array.isArray(value) ? value : [value];
        this.state = new Set([...this.state, ...values]);
        return this;
    }

    public serialize() {
        const sources = Array.from(this.state).join(' ');
        return `${this.getDirectiveName()} ${sources};`;
    }

    public abstract getDirectiveName(): string;

    public abstract getDirectiveType(): DirectiveType;

    public getMinimumCspVersion() {
        return 1;
    }
}

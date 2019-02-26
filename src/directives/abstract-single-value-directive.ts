import { DirectiveType, SingleValueDirective } from '../types';

export abstract class AbstractSingleValueDirective<T> implements SingleValueDirective {
    private state: T | null = null;

    public setValue(value: T) {
        this.state = value;
        return this;
    }

    public abstract getDirectiveName(): string;

    public abstract getDirectiveType(): DirectiveType;

    public getMinimumCspVersion() {
        return 1;
    }

    public serialize() {
        if (!this.state) {
            return '';
        }
        return `${this.getDirectiveName()} ${this.state};`;
    }
}

import { DirectiveType, ToggleDirective } from '../types';

export abstract class AbstractToggleDirective implements ToggleDirective {
    private state = false;

    public toggle(value: boolean) {
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
        return `${this.getDirectiveName()};`;
    }
}

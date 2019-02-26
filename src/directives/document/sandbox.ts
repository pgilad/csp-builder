import { DirectiveType } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export type SandboxSource = string;

export class Sandbox extends AbstractMultiValueDirective<SandboxSource> {
    public getDirectiveName() {
        return 'sandbox';
    }

    public getDirectiveType() {
        return DirectiveType.Document;
    }
}

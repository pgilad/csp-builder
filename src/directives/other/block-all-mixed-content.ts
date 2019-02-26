import { DirectiveType } from '../../types';
import { AbstractToggleDirective } from '../abstract-toggle-directive';

export class BlockAllMixedContent extends AbstractToggleDirective {
    public getDirectiveName() {
        return 'block-all-mixed-content';
    }

    public getDirectiveType() {
        return DirectiveType.Other;
    }
}

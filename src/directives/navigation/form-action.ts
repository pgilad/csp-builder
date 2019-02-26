import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class FormAction extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'form-action';
    }

    public getDirectiveType() {
        return DirectiveType.Navigation;
    }

    public getMinimumCspVersion() {
        return 2;
    }
}

import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class DefaultSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'default-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

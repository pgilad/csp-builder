import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class ObjectSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'object-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class StyleSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'style-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

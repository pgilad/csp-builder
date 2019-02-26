import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class FontSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'font-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

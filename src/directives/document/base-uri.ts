import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class BaseUri extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'base-uri';
    }

    public getDirectiveType() {
        return DirectiveType.Document;
    }
}

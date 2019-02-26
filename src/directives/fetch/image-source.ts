import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class ImageSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'img-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class MediaSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'media-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

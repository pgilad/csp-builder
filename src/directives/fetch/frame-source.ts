import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class FrameSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'frame-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

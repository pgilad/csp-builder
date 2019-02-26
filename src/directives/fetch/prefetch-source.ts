import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class PrefetchSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'prefetch-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }

    public getMinimumCspVersion() {
        return 3;
    }
}

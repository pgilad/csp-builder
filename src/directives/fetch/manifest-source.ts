import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class ManifestSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'manifest-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }

    public getMinimumCspVersion() {
        return 3;
    }
}

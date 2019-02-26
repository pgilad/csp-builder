import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class WorkerSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'worker-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }

    public getMinimumCspVersion() {
        return 3;
    }
}

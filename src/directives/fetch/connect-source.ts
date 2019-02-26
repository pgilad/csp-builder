import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class ConnectSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'connect-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

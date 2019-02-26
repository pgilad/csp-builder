import { DirectiveType, SourceList } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export class ScriptSource extends AbstractMultiValueDirective<SourceList> {
    public getDirectiveName() {
        return 'script-src';
    }

    public getDirectiveType() {
        return DirectiveType.Fetch;
    }
}

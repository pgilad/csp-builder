import { DirectiveType } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export type PluginTypeSource = string;

export class PluginTypes extends AbstractMultiValueDirective<PluginTypeSource> {
    public getDirectiveName() {
        return 'plugin-types';
    }

    public getDirectiveType() {
        return DirectiveType.Document;
    }

    public getMinimumCspVersion() {
        return 2;
    }
}

import { DirectiveType, HostSource, PredefinedSource, SchemaSource } from '../../types';
import { AbstractMultiValueDirective } from '../abstract-multi-value-directive';

export type FrameAncestorsSource =
    | SchemaSource
    | HostSource
    | PredefinedSource.Self
    | PredefinedSource.None;

export class FrameAncestors extends AbstractMultiValueDirective<FrameAncestorsSource> {
    public getDirectiveName() {
        return 'frame-ancestors';
    }

    public getDirectiveType() {
        return DirectiveType.Navigation;
    }

    public getMinimumCspVersion() {
        return 2;
    }
}

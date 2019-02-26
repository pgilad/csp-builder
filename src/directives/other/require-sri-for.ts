import { DirectiveType } from '../../types';
import { AbstractSingleValueDirective } from '../abstract-single-value-directive';

export type RequireSriForValue = 'script' | 'style' | 'script style';

export class RequireSriFor extends AbstractSingleValueDirective<RequireSriForValue> {
    public getDirectiveName() {
        return 'require-sri-for';
    }

    public getDirectiveType() {
        return DirectiveType.Other;
    }
}

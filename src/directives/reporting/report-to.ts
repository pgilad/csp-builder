import { DirectiveType } from '../../types';
import { AbstractSingleValueDirective } from '../abstract-single-value-directive';

export type GroupName = string;

export class ReportTo extends AbstractSingleValueDirective<GroupName> {
    public getDirectiveName() {
        return 'report-to';
    }

    public getDirectiveType() {
        return DirectiveType.Reporting;
    }
}

import { DirectiveType } from '../../types';
import { AbstractSingleValueDirective } from '../abstract-single-value-directive';

export type ReportUriReference = string;

export class ReportUri extends AbstractSingleValueDirective<ReportUriReference> {
    public getDirectiveName() {
        return 'report-uri';
    }

    public getDirectiveType() {
        return DirectiveType.Reporting;
    }
}

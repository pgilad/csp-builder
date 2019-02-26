import { DirectiveType } from '../../types';
import { AbstractToggleDirective } from '../abstract-toggle-directive';

export class UpgradeInsecureRequests extends AbstractToggleDirective {
    public getDirectiveName() {
        return 'upgrade-insecure-requests';
    }

    public getDirectiveType() {
        return DirectiveType.Other;
    }
}

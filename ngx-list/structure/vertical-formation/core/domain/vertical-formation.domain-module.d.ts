import { Provider } from '@angular/core';
import { DomainModule } from '@generic-ui/hermes';
export declare class VerticalFormationDomainModule extends DomainModule {
    constructor();
    static commandHandlers(): Array<Provider>;
    static domainEventHandlers(): Array<Provider>;
}

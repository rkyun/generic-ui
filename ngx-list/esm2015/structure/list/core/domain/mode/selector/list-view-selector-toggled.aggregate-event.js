/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ListViewSelectorToggledEvent } from './list-view-selector-toggled.event';
import { ListViewAggregateEvent } from '../../list-view.aggregate-event';
export class ListViewSelectorToggledAggregateEvent extends ListViewAggregateEvent {
    /**
     * @param {?} listViewId
     * @param {?} enabled
     */
    constructor(listViewId, enabled) {
        super(listViewId, 'ListViewSelectorToggledAggregateEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new ListViewSelectorToggledEvent(this.getAggregateId(), this.enabled);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledAggregateEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHekUsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLHNCQUFzQjs7Ozs7SUFFaEYsWUFBWSxVQUFzQixFQUNkLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxVQUFVLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztRQUR4QyxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNEOzs7Ozs7SUFQRyx3REFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQgfSBmcm9tICcuL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIExpc3RWaWV3QWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PExpc3RWaWV3SWQ+IHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLmVuYWJsZWQpO1xuXHR9XG59XG4iXX0=
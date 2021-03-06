/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaRowColoringRepository } from './schema.row-coloring.repository';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
var SchemaRowColoringSetEventHandler = /** @class */ (function () {
    function SchemaRowColoringSetEventHandler(schemaRowColoringRepository) {
        this.schemaRowColoringRepository = schemaRowColoringRepository;
    }
    /**
     * @return {?}
     */
    SchemaRowColoringSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return RowColoringSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SchemaRowColoringSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.schemaRowColoringRepository.next(event.getAggregateId(), event.getRowColoring());
        }
    };
    SchemaRowColoringSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaRowColoringSetEventHandler.ctorParameters = function () { return [
        { type: SchemaRowColoringRepository }
    ]; };
    return SchemaRowColoringSetEventHandler;
}());
export { SchemaRowColoringSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRowColoringSetEventHandler.prototype.schemaRowColoringRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHdkY7SUFHQywwQ0FBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDNUUsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxpREFBTTs7OztJQUFOLFVBQU8sS0FBMEI7UUFFaEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFMRiwyQkFBMkI7O0lBdUJwQyx1Q0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGdDQUFnQzs7Ozs7O0lBRWhDLHVFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5yb3ctY29sb3JpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVJvd0NvbG9yaW5nU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkLCBSb3dDb2xvcmluZ1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFJvd0NvbG9yaW5nU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gUm93Q29sb3JpbmdTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogUm93Q29sb3JpbmdTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRSb3dDb2xvcmluZygpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=
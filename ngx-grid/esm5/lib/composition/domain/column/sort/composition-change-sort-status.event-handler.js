/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SortToggledEvent } from '../../../../structure/domain/structure/sort/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { ColumnFieldId } from '../field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
import { SortOrderSetEvent } from '../../../../structure/domain/structure/sort/order/sort-order-set.event';
var CompositionChangeSortStatusEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionChangeSortStatusEventHandler, _super);
    function CompositionChangeSortStatusEventHandler(compositionDispatcher) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CompositionChangeSortStatusEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof SortToggledEvent) {
            /** @type {?} */
            var compositionId = event.getCompositionId();
            /** @type {?} */
            var dirs = event.getDirections();
            /** @type {?} */
            var params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) {
                /** @type {?} */
                var columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event instanceof SortOrderSetEvent) {
            /** @type {?} */
            var compositionId = event.getCompositionId();
            /** @type {?} */
            var dirs = event.getDirections();
            /** @type {?} */
            var params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) {
                /** @type {?} */
                var columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    };
    CompositionChangeSortStatusEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionChangeSortStatusEventHandler.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionChangeSortStatusEventHandler;
}(DomainEventHandler));
export { CompositionChangeSortStatusEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUkzRztJQUM2RCxtRUFBaUM7SUFFN0YsaURBQW9CLHFCQUE0QztRQUFoRSxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1Qjs7SUFFaEUsQ0FBQzs7Ozs7SUFFRCx3REFBTTs7OztJQUFOLFVBQU8sS0FBaUM7UUFFdkMsSUFBSSxLQUFLLFlBQVksZ0JBQWdCLEVBQUU7O2dCQUVoQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFOztnQkFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUU7O2dCQUV6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLEdBQVE7O29CQUV4QixhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFNUQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDO1lBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTs7Z0JBRWpDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7O2dCQUM3QyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRTs7Z0JBRXpCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsR0FBUTs7b0JBRXhCLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU1RCxPQUFPLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQUM7WUFFRixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7O2dCQXRDRCxVQUFVOzs7O2dCQVBGLHFCQUFxQjs7SUE4QzlCLDhDQUFDO0NBQUEsQUF2Q0QsQ0FDNkQsa0JBQWtCLEdBc0M5RTtTQXRDWSx1Q0FBdUM7Ozs7OztJQUV2Qyx3RUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3NvcnQvb3JkZXIvc29ydC1vcmRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4pOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNvcnRUb2dnbGVkRXZlbnQpIHtcblxuXHRcdFx0Y29uc3QgY29tcG9zaXRpb25JZCA9IGV2ZW50LmdldENvbXBvc2l0aW9uSWQoKSxcblx0XHRcdFx0ZGlycyA9IGV2ZW50LmdldERpcmVjdGlvbnMoKTtcblxuXHRcdFx0bGV0IHBhcmFtcyA9IGRpcnMubWFwKChkaXI6IGFueSkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBuZXcgQ29sdW1uRmllbGRJZChkaXIuZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENoYW5nZVNvcnRQYXJhbXMoY29sdW1uRmllbGRJZCwgZGlyLmRpcmVjdGlvbik7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY2hhbmdlU29ydChjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNvcnRPcmRlclNldEV2ZW50KSB7XG5cblx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBldmVudC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRcdGRpcnMgPSBldmVudC5nZXREaXJlY3Rpb25zKCk7XG5cblx0XHRcdGxldCBwYXJhbXMgPSBkaXJzLm1hcCgoZGlyOiBhbnkpID0+IHtcblxuXHRcdFx0XHRjb25zdCBjb2x1bW5GaWVsZElkID0gbmV3IENvbHVtbkZpZWxkSWQoZGlyLmZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDaGFuZ2VTb3J0UGFyYW1zKGNvbHVtbkZpZWxkSWQsIGRpci5kaXJlY3Rpb24pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmNoYW5nZVNvcnQoY29tcG9zaXRpb25JZCwgcGFyYW1zKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
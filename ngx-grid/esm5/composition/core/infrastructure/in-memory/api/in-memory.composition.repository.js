/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../domain-read/composition.read-model-root-repository';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionCreatedEvent } from '../../../domain/create/composition-created.event';
import { CompositionResizeWidthSetEvent } from '../../../domain/width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from '../../../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../../domain/width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from '../../../domain/width/set-width/composition-width-set.event';
import { CompositionChangeSortStatusEvent } from '../../../domain/column/sort/composition-change-sort-status.event';
import { CompositionColumnSetEnabledEvent } from '../../../domain/column/set-enabled/composition.column-set-enabled.event';
import { CompositionColumnMovedLeftEvent } from '../../../domain/column/move/left/composition.column-moved-left.event';
import { CompositionColumnMovedRightEvent } from '../../../domain/column/move/right/composition.column-moved-right.event';
var InMemoryCompositionRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionRepository, _super);
    function InMemoryCompositionRepository(domainEventBus, inMemoryCompositionReadStore) {
        var _this = _super.call(this, domainEventBus) || this;
        _this.inMemoryCompositionReadStore = inMemoryCompositionReadStore;
        _this.compositionIdToComposition = new Map();
        _this.composition$ = new ReplaySubject(1);
        return _this;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.on = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        function (compositionIdToComposition) {
            /** @type {?} */
            var key = compositionId.getId();
            return compositionIdToComposition.has(key);
        })), map((/**
         * @param {?} compositionIdToComposition
         * @return {?}
         */
        function (compositionIdToComposition) { return compositionIdToComposition.get(compositionId.getId()); })));
    };
    /**
     * @protected
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.forEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        return [
            CompositionCreatedEvent,
            CompositionResizeWidthSetEvent,
            CompositionColumnsSetEvent,
            CompositionContainerWidthSetEvent,
            CompositionWidthSetEvent,
            CompositionColumnSetEnabledEvent,
            CompositionColumnMovedLeftEvent,
            CompositionColumnMovedRightEvent,
            (/** @type {?} */ (CompositionChangeSortStatusEvent))
        ];
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.subscribe = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var aggregateId = event.getAggregateId();
        /** @type {?} */
        var optComposition = this.inMemoryCompositionReadStore.getById(aggregateId);
        optComposition.ifPresent((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) {
            /** @type {?} */
            var key = composition.getId().toString();
            _this.compositionIdToComposition.set(key, composition);
            _this.composition$.next(_this.compositionIdToComposition);
        }));
    };
    InMemoryCompositionRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryCompositionReadStore }
    ]; };
    return InMemoryCompositionRepository;
}(CompositionReadModelRootRepository));
export { InMemoryCompositionRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.compositionIdToComposition;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.composition$;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.inMemoryCompositionReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVqSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNwSSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUkxSDtJQUNtRCx5REFBa0M7SUFNcEYsdUNBQVksY0FBOEIsRUFDL0IsNEJBQTBEO1FBRHJFLFlBRUMsa0JBQU0sY0FBYyxDQUFDLFNBQ3JCO1FBRlUsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUxwRCxnQ0FBMEIsR0FBRyxJQUFJLEdBQUcsRUFBbUMsQ0FBQztRQUV4RSxrQkFBWSxHQUFHLElBQUksYUFBYSxDQUF1QyxDQUFDLENBQUMsQ0FBQzs7SUFLM0YsQ0FBQzs7Ozs7SUFFRCwwQ0FBRTs7OztJQUFGLFVBQUcsYUFBNEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNsQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsMEJBQWdFOztnQkFFakUsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFFakMsT0FBTywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsMEJBQWdFLElBQUssT0FBQSwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQXJELENBQXFELEVBQUMsQ0FDaEksQ0FBQztJQUNSLENBQUM7Ozs7O0lBRVMsaURBQVM7Ozs7SUFBbkI7UUFDQyxPQUFPO1lBQ04sdUJBQXVCO1lBQ3ZCLDhCQUE4QjtZQUM5QiwwQkFBMEI7WUFDMUIsaUNBQWlDO1lBQ2pDLHdCQUF3QjtZQUN4QixnQ0FBZ0M7WUFDaEMsK0JBQStCO1lBQy9CLGdDQUFnQztZQUNoQyxtQkFBQSxnQ0FBZ0MsRUFBTztTQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsaURBQVM7Ozs7O0lBQW5CLFVBQW9CLEtBQWlDO1FBQXJELGlCQWFDOztZQVhNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFOztZQUVwQyxjQUFjLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFN0UsY0FBYyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFdBQW9DOztnQkFDdkQsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFMUMsS0FBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkF0REQsVUFBVTs7OztnQkFqQlcsY0FBYztnQkFJM0IsNEJBQTRCOztJQW9FckMsb0NBQUM7Q0FBQSxBQXZERCxDQUNtRCxrQ0FBa0MsR0FzRHBGO1NBdERZLDZCQUE2Qjs7Ozs7O0lBRXpDLG1FQUF5Rjs7Ozs7SUFFekYscURBQTJGOzs7OztJQUd4RixxRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY3JlYXRlL2NvbXBvc2l0aW9uLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtcmlnaHQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbiA9IG5ldyBNYXA8c3RyaW5nLCBDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290Pj4oMSk7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxSZWFkb25seTxDb21wb3NpdGlvblJlYWRNb2RlUm9vdD4+IHtcblxuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChjb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbjogTWFwPHN0cmluZywgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IGNvbXBvc2l0aW9uSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbXBvc2l0aW9uSWRUb0NvbXBvc2l0aW9uLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb246IE1hcDxzdHJpbmcsIENvbXBvc2l0aW9uUmVhZE1vZGVSb290PikgPT4gY29tcG9zaXRpb25JZFRvQ29tcG9zaXRpb24uZ2V0KGNvbXBvc2l0aW9uSWQuZ2V0SWQoKSkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDb21wb3NpdGlvbkNyZWF0ZWRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCxcblx0XHRcdENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25XaWR0aFNldEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50LFxuXHRcdFx0Q29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQsXG5cdFx0XHRDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBhcyBhbnlcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGNvbnN0IG9wdENvbXBvc2l0aW9uID0gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0Q29tcG9zaXRpb24uaWZQcmVzZW50KChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IHtcblx0XHRcdGNvbnN0IGtleSA9IGNvbXBvc2l0aW9uLmdldElkKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbi5zZXQoa2V5LCBjb21wb3NpdGlvbik7XG5cblx0XHRcdHRoaXMuY29tcG9zaXRpb24kLm5leHQodGhpcy5jb21wb3NpdGlvbklkVG9Db21wb3NpdGlvbik7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
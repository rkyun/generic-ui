/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { CreateCompositionCommand } from './create/create-composition.command';
import { SetColumnsCommand } from './column/set-columns/set-columns.command';
import { SetCompositionWidthCommand } from './width/set-width/set-composition-width.command';
import { SetCompositionContainerWidthCommand } from './width/set-container-width/set-composition-container-width.command';
import { SetCompositionResizeWidthCommand } from './width/resize-width/set-composition-resize-width.command';
import { CompositionChangeSortStatusCommand } from './column/sort/composition-change-sort-status.command';
import { CompositionSetColumnEnabledCommand } from './column/set-enabled/composition.set-column-enabled.command';
import { CompositionMoveLeftColumnCommand } from './column/move/left/composition.move-left-column.command';
import { CompositionMoveRightColumnCommand } from './column/move/right/composition.move-right-column.command';
import { SetGroupsCommand } from './group/set-groups/set-groups.command';
var CompositionDispatcher = /** @class */ (function () {
    function CompositionDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDispatcher.prototype.createComposition = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        this.commandDispatcher.dispatch(new CreateCompositionCommand(compositionId));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.setColumns = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new SetColumnsCommand(compositionId, params));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.setGroups = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new SetGroupsCommand(compositionId, params));
    };
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    CompositionDispatcher.prototype.setWidth = /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    function (compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionWidthCommand(compositionId, width));
    };
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    CompositionDispatcher.prototype.setContainerWidth = /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    function (compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionContainerWidthCommand(compositionId, width));
    };
    /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    CompositionDispatcher.prototype.setResizeWidth = /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    function (compositionId, enabled) {
        this.commandDispatcher.dispatch(new SetCompositionResizeWidthCommand(compositionId, enabled));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.changeSort = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new CompositionChangeSortStatusCommand(compositionId, params));
    };
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    CompositionDispatcher.prototype.setColumnEnabled = /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    function (compositionId, columnId, enabled) {
        this.commandDispatcher.dispatch(new CompositionSetColumnEnabledCommand(compositionId, columnId, enabled));
    };
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    CompositionDispatcher.prototype.moveLeft = /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    function (compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveLeftColumnCommand(compositionId, columnId));
    };
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    CompositionDispatcher.prototype.moveRight = /**
     * @param {?} compositionId
     * @param {?} columnId
     * @return {?}
     */
    function (compositionId, columnId) {
        this.commandDispatcher.dispatch(new CompositionMoveRightColumnCommand(compositionId, columnId));
    };
    CompositionDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return CompositionDispatcher;
}());
export { CompositionDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUU3RyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUxRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd6RTtJQUdDLCtCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixhQUE0QjtRQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFFRCwwQ0FBVTs7Ozs7SUFBVixVQUFXLGFBQTRCLEVBQUUsTUFBMkI7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELHlDQUFTOzs7OztJQUFULFVBQVUsYUFBNEIsRUFBRSxNQUFXO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFFRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLGFBQTRCLEVBQUUsS0FBYTtRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7O0lBRUQsaURBQWlCOzs7OztJQUFqQixVQUFrQixhQUE0QixFQUFFLEtBQWE7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7OztJQUVELDhDQUFjOzs7OztJQUFkLFVBQWUsYUFBNEIsRUFBRSxPQUFnQjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0NBQWdDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7O0lBRUQsMENBQVU7Ozs7O0lBQVYsVUFBVyxhQUE0QixFQUFFLE1BQStCO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7O0lBRUQsZ0RBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsYUFBNEIsRUFBRSxRQUFrQixFQUFFLE9BQWdCO1FBQ2xGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7Ozs7O0lBRUQsd0NBQVE7Ozs7O0lBQVIsVUFBUyxhQUE0QixFQUFFLFFBQWtCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCx5Q0FBUzs7Ozs7SUFBVCxVQUFVLGFBQTRCLEVBQUUsUUFBa0I7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlDQUFpQyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O2dCQTVDRCxVQUFVOzs7O2dCQWxCRixpQkFBaUI7O0lBZ0UxQiw0QkFBQztDQUFBLEFBOUNELElBOENDO1NBN0NZLHFCQUFxQjs7Ozs7O0lBRXJCLGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS1jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kIH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NvbHVtbi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kIH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kJztcbmltcG9ydCB7IFNldEdyb3Vwc0NvbW1hbmQgfSBmcm9tICcuL2dyb3VwL3NldC1ncm91cHMvc2V0LWdyb3Vwcy5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Y3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZChjb21wb3NpdGlvbklkKSk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbHVtbnNDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHBhcmFtcykpO1xuXHR9XG5cblx0c2V0R3JvdXBzKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHBhcmFtczogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0R3JvdXBzQ29tbWFuZChjb21wb3NpdGlvbklkLCBwYXJhbXMpKTtcblx0fVxuXG5cdHNldFdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZChjb21wb3NpdGlvbklkLCB3aWR0aCkpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kKGNvbXBvc2l0aW9uSWQsIHdpZHRoKSk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQoY29tcG9zaXRpb25JZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBwYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZChjb21wb3NpdGlvbklkLCBwYXJhbXMpKTtcblx0fVxuXG5cdHNldENvbHVtbkVuYWJsZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQpKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQoY29tcG9zaXRpb25JZCwgY29sdW1uSWQpKTtcblx0fVxuXG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
var InMemoryCompositionAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionAggregateStore, _super);
    function InMemoryCompositionAggregateStore(inMemoryCompositionStore, aggregateStoreRegister) {
        return _super.call(this, inMemoryCompositionStore, aggregateStoreRegister) || this;
    }
    InMemoryCompositionAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionAggregateStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: AggregateStoreRegister }
    ]; };
    return InMemoryCompositionAggregateStore;
}(InMemoryAggregateStore));
export { InMemoryCompositionAggregateStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzFFO0lBQ3VELDZEQUE0QztJQUVsRywyQ0FBWSx3QkFBa0QsRUFDM0Qsc0JBQThDO2VBQ2hELGtCQUFNLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDO0lBQ3hELENBQUM7O2dCQU5ELFVBQVU7Ozs7Z0JBSEYsd0JBQXdCO2dCQUp4QixzQkFBc0I7O0lBZS9CLHdDQUFDO0NBQUEsQUFSRCxDQUN1RCxzQkFBc0IsR0FPNUU7U0FQWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsIEluTWVtb3J5QWdncmVnYXRlU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSBleHRlbmRzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSwgYWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cdH1cblxufVxuIl19
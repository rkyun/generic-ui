/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { GuiGridColumnConverter } from './column/gui.grid.column.converter';
import { GuiGridThemeConverter } from './theme/gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './theme/coloring/gui.grid.row-coloring.converter';
import { GuiGridColumnMenuConverter } from './column/menu/gui.grid.column-menu.converter';
import { GuiGridPagingConverter } from './paging/gui.grid.paging.converter';
import { GuiGridRowSelectionConverter } from './row-selection/gui.grid.row-selection.converter';
/**
 * @abstract
 */
var GuiGridGateway = /** @class */ (function () {
    function GuiGridGateway() {
        this.source = [];
        this.columns = [];
        /**
         * OUTPUTS
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
        this.selectedRows = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
        this.themeChanged = new EventEmitter();
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
        this.rowColoringChanged = new EventEmitter();
        this.gridColumnConverter = new GuiGridColumnConverter();
        this.gridThemeConverter = new GuiGridThemeConverter();
        this.gridRowColoringConverter = new GuiGridRowColoringConverter();
        this.gridColumnMenuConverter = new GuiGridColumnMenuConverter();
        this.gridPagingConverter = new GuiGridPagingConverter();
        this.gridRowSelectionConverter = new GuiGridRowSelectionConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    GuiGridGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            this.columnsConfig = this.gridColumnConverter.convert(this.columns);
        }
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.themeConfig = this.gridThemeConverter.convert(this.theme);
        }
        if (changes.rowColoring !== undefined && changes.rowColoring.currentValue !== undefined) {
            this.rowColoringConfig = this.gridRowColoringConverter.convert(this.rowColoring);
        }
        if (changes.columnMenu !== undefined && changes.columnMenu.currentValue !== undefined) {
            this.columnMenuConfig = this.gridColumnMenuConverter.convert(this.columnMenu);
        }
        if (changes.rowSelection !== undefined && changes.rowSelection.currentValue !== undefined) {
            this.rowSelectionConfig = this.gridRowSelectionConverter.convert(this.rowSelection);
        }
        // TODO
        if (changes.paging !== undefined && changes.paging.currentValue !== undefined) {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.gridPagingConverter.convert(this.paging);
            }
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    GuiGridGateway.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    GuiGridGateway.prototype.onPageSizeChange = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GuiGridGateway.prototype.onItemSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemsSelected.emit(item);
    };
    /**
     * @param {?} rows
     * @return {?}
     */
    GuiGridGateway.prototype.onRowsSelect = /**
     * @param {?} rows
     * @return {?}
     */
    function (rows) {
        /** @type {?} */
        var guiRows = rows.map((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            return {
                index: row.getIndex(),
                data: row.getData(),
                itemId: row.getItemId()
            };
        }));
        this.selectedRows.emit(guiRows);
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onColumnsChange = /**
     * @return {?}
     */
    function () {
        this.columnsChanged.emit();
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    GuiGridGateway.prototype.onContainerWidthChange = /**
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        this.containerWidthChanged.emit(containerWidth);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onSourceEdit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.sourceEdited.emit(value);
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onCellEditEnter = /**
     * @return {?}
     */
    function () {
        this.cellEditEntered.emit();
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onCellEditSubmit = /**
     * @return {?}
     */
    function () {
        this.cellEditSubmitted.emit();
    };
    /**
     * @return {?}
     */
    GuiGridGateway.prototype.onCellEditCancel = /**
     * @return {?}
     */
    function () {
        this.cellEditCanceled.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onSearchPhrase = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchPhraseChanged.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onTheme = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.themeChanged.emit(this.gridThemeConverter.convertToGuiTheme(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onHorizontalGrid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.horizontalGridChanged.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onVerticalGrid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.verticalGridChanged.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GuiGridGateway.prototype.onRowColoring = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rowColoringChanged.emit(this.gridRowColoringConverter.convertToGuiRowColoring(value));
    };
    GuiGridGateway.propDecorators = {
        columnHeaderTop: [{ type: Input }],
        columnHeaderBottom: [{ type: Input }],
        maxHeight: [{ type: Input }],
        width: [{ type: Input }],
        rowHeight: [{ type: Input }],
        autoResizeWidth: [{ type: Input }],
        source: [{ type: Input }],
        columns: [{ type: Input }],
        paging: [{ type: Input }],
        verticalGrid: [{ type: Input }],
        horizontalGrid: [{ type: Input }],
        theme: [{ type: Input }],
        rowColoring: [{ type: Input }],
        rowSelection: [{ type: Input }],
        rowStyle: [{ type: Input }],
        rowClass: [{ type: Input }],
        loading: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        sorting: [{ type: Input }],
        searching: [{ type: Input }],
        titlePanel: [{ type: Input }],
        footerPanel: [{ type: Input }],
        filtering: [{ type: Input }],
        quickFilters: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }],
        infoPanel: [{ type: Input }],
        summaries: [{ type: Input }],
        columnMenu: [{ type: Input }],
        rowDetail: [{ type: Input }],
        localization: [{ type: Input }],
        pageChanged: [{ type: Output }],
        pageSizeChanged: [{ type: Output }],
        itemsSelected: [{ type: Output }],
        selectedRows: [{ type: Output }],
        columnsChanged: [{ type: Output }],
        containerWidthChanged: [{ type: Output }],
        sourceEdited: [{ type: Output }],
        cellEditEntered: [{ type: Output }],
        cellEditCanceled: [{ type: Output }],
        cellEditSubmitted: [{ type: Output }],
        searchPhraseChanged: [{ type: Output }],
        themeChanged: [{ type: Output }],
        horizontalGridChanged: [{ type: Output }],
        verticalGridChanged: [{ type: Output }],
        rowColoringChanged: [{ type: Output }]
    };
    return GuiGridGateway;
}());
export { GuiGridGateway };
if (false) {
    /**
     * INPUTS
     * @type {?}
     */
    GuiGridGateway.prototype.columnHeaderTop;
    /** @type {?} */
    GuiGridGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    GuiGridGateway.prototype.maxHeight;
    /** @type {?} */
    GuiGridGateway.prototype.width;
    /** @type {?} */
    GuiGridGateway.prototype.rowHeight;
    /** @type {?} */
    GuiGridGateway.prototype.autoResizeWidth;
    /** @type {?} */
    GuiGridGateway.prototype.source;
    /** @type {?} */
    GuiGridGateway.prototype.columns;
    /** @type {?} */
    GuiGridGateway.prototype.paging;
    /** @type {?} */
    GuiGridGateway.prototype.verticalGrid;
    /** @type {?} */
    GuiGridGateway.prototype.horizontalGrid;
    /** @type {?} */
    GuiGridGateway.prototype.theme;
    /** @type {?} */
    GuiGridGateway.prototype.rowColoring;
    /** @type {?} */
    GuiGridGateway.prototype.rowSelection;
    /** @type {?} */
    GuiGridGateway.prototype.rowStyle;
    /** @type {?} */
    GuiGridGateway.prototype.rowClass;
    /** @type {?} */
    GuiGridGateway.prototype.loading;
    /** @type {?} */
    GuiGridGateway.prototype.virtualScroll;
    /** @type {?} */
    GuiGridGateway.prototype.sorting;
    /** @type {?} */
    GuiGridGateway.prototype.searching;
    /** @type {?} */
    GuiGridGateway.prototype.titlePanel;
    /** @type {?} */
    GuiGridGateway.prototype.footerPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.filtering;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.quickFilters;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.editMode;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.cellEditing;
    /** @type {?} */
    GuiGridGateway.prototype.infoPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GuiGridGateway.prototype.summaries;
    /** @type {?} */
    GuiGridGateway.prototype.columnMenu;
    /** @type {?} */
    GuiGridGateway.prototype.rowDetail;
    /** @type {?} */
    GuiGridGateway.prototype.localization;
    /**
     * OUTPUTS
     * @type {?}
     */
    GuiGridGateway.prototype.pageChanged;
    /** @type {?} */
    GuiGridGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GuiGridGateway.prototype.itemsSelected;
    /** @type {?} */
    GuiGridGateway.prototype.selectedRows;
    /** @type {?} */
    GuiGridGateway.prototype.columnsChanged;
    /** @type {?} */
    GuiGridGateway.prototype.containerWidthChanged;
    /** @type {?} */
    GuiGridGateway.prototype.sourceEdited;
    /** @type {?} */
    GuiGridGateway.prototype.cellEditEntered;
    /** @type {?} */
    GuiGridGateway.prototype.cellEditCanceled;
    /** @type {?} */
    GuiGridGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    GuiGridGateway.prototype.searchPhraseChanged;
    /** @type {?} */
    GuiGridGateway.prototype.themeChanged;
    /** @type {?} */
    GuiGridGateway.prototype.horizontalGridChanged;
    /** @type {?} */
    GuiGridGateway.prototype.verticalGridChanged;
    /** @type {?} */
    GuiGridGateway.prototype.rowColoringChanged;
    /**
     * \@internal
     * @type {?}
     */
    GuiGridGateway.prototype.columnsConfig;
    /** @type {?} */
    GuiGridGateway.prototype.themeConfig;
    /** @type {?} */
    GuiGridGateway.prototype.rowColoringConfig;
    /** @type {?} */
    GuiGridGateway.prototype.columnMenuConfig;
    /** @type {?} */
    GuiGridGateway.prototype.rowSelectionConfig;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridColumnConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridThemeConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridRowColoringConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridColumnMenuConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridPagingConverter;
    /**
     * @type {?}
     * @protected
     */
    GuiGridGateway.prototype.gridRowSelectionConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2d1aS5ncmlkLWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUEwQnRGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7O0FBSWhHO0lBMExDO1FBbEtBLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHeEIsWUFBTyxHQUFzQyxFQUFFLENBQUM7Ozs7UUEyRmhELGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELGlCQUFZLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdkUsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd4RCwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdqRSxpQkFBWSxHQUE4QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzdFLG9CQUFlLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHekQscUJBQWdCLEdBQXVCLElBQUks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dUQ7O0lBRXZELHFDQUFpQjs7SUFFakIsMkNBQXVCOztJQUV2QiwwQ0FBbUM7O0lBRW5DLDRDQUFpQzs7Ozs7SUFFakMsNkNBQThGOzs7OztJQUU5Riw0Q0FBMkY7Ozs7O0lBRTNGLGtEQUE2Rzs7Ozs7SUFFN0csaURBQTBHOzs7OztJQUUxRyw2Q0FBOEY7Ozs7O0lBRTlGLG1EQUFnSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdEd1aUNvbHVtbixcblx0R3VpQ29sdW1uTWVudSxcblx0R3VpRmlsdGVyaW5nLFxuXHRHdWlGb290ZXJQYW5lbCxcblx0R3VpSW5mb1BhbmVsLFxuXHRHdWlMb2NhbGl6YXRpb24sXG5cdEd1aU11bHRpQ29sdW1uLFxuXHRHdWlQYWdpbmcsXG5cdEd1aVF1aWNrRmlsdGVycyxcblx0R3VpUm93Q2xhc3MsXG5cdEd1aVJvd0NvbG9yaW5nLFxuXHRHdWlSb3dEZXRhaWwsXG5cdEd1aVJvd1NlbGVjdGlvbixcblx0R3VpUm93U3R5bGUsXG5cdEd1aVNlYXJjaGluZyxcblx0R3VpU2VsZWN0ZWRSb3csXG5cdEd1aVNvcnRpbmcsXG5cdEd1aVN1bW1hcmllcyxcblx0R3VpVGhlbWUsXG5cdEd1aVRpdGxlUGFuZWxcbn0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uQ29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vZ3VpLmdyaWQuY29sdW1uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBHdWlHcmlkQ29sdW1uTWVudUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL21lbnUvZ3VpLmdyaWQuY29sdW1uLW1lbnUuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcm93LXNlbGVjdGlvbi9ndWkuZ3JpZC5yb3ctc2VsZWN0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdC8qKlxuXHQgKiBJTlBVVFNcblx0ICovXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlclRvcDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJCb3R0b206IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0bWF4SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRhdXRvUmVzaXplV2lkdGg6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8R3VpQ29sdW1uIHwgR3VpTXVsdGlDb2x1bW4+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbjtcblxuXHRASW5wdXQoKVxuXHRyb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0QElucHV0KClcblx0cm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGxvYWRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0dmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3J0aW5nOiBib29sZWFuIHwgR3VpU29ydGluZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBHdWlTZWFyY2hpbmc7XG5cblx0QElucHV0KClcblx0dGl0bGVQYW5lbDogR3VpVGl0bGVQYW5lbDtcblxuXHRASW5wdXQoKVxuXHRmb290ZXJQYW5lbDogR3VpRm9vdGVyUGFuZWw7XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEd1aUZpbHRlcmluZztcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgR3VpUXVpY2tGaWx0ZXJzO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuIHwgR3VpSW5mb1BhbmVsO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IEd1aVN1bW1hcmllcztcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBHdWlDb2x1bW5NZW51O1xuXG5cdEBJbnB1dCgpXG5cdHJvd0RldGFpbDogR3VpUm93RGV0YWlsO1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTG9jYWxpemF0aW9uO1xuXG5cblx0LyoqXG5cdCAqIE9VVFBVVFNcblx0ICovXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8R3VpU2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8eyBhZnRlcjogYW55LCBiZWZvcmU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHRoZW1lQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEd1aVRoZW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0cm93Q29sb3JpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8R3VpUm93Q29sb3Jpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0LyoqIEBpbnRlcm5hbCAqL1xuXHRjb2x1bW5zQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz47XG5cblx0dGhlbWVDb25maWc6IGFueTsgLy8gU2NoZW1hVGhlbWU7XG5cblx0cm93Q29sb3JpbmdDb25maWc6IGFueTsgLy8gUm93Q29sb3Jpbmc7XG5cblx0Y29sdW1uTWVudUNvbmZpZzogQ29sdW1uTWVudUNvbmZpZztcblxuXHRyb3dTZWxlY3Rpb25Db25maWc6IFJvd1NlbGVjdGlvbjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbkNvbnZlcnRlcjogR3VpR3JpZENvbHVtbkNvbnZlcnRlciA9IG5ldyBHdWlHcmlkQ29sdW1uQ29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRUaGVtZUNvbnZlcnRlcjogR3VpR3JpZFRoZW1lQ29udmVydGVyID0gbmV3IEd1aUdyaWRUaGVtZUNvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXI6IEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciA9IG5ldyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZENvbHVtbk1lbnVDb252ZXJ0ZXI6IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyID0gbmV3IEd1aUdyaWRDb2x1bW5NZW51Q29udmVydGVyKCk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdyaWRQYWdpbmdDb252ZXJ0ZXI6IEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpR3JpZFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBncmlkUm93U2VsZWN0aW9uQ29udmVydGVyOiBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyID0gbmV3IEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5zICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5Db252ZXJ0ZXIuY29udmVydCh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50aGVtZUNvbmZpZyA9IHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLmNvbnZlcnQodGhpcy50aGVtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q29sb3JpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NvbG9yaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ29uZmlnID0gdGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbHVtbk1lbnVDb25maWcgPSB0aGlzLmdyaWRDb2x1bW5NZW51Q29udmVydGVyLmNvbnZlcnQodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dTZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd1NlbGVjdGlvbi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25Db25maWcgPSB0aGlzLmdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIuY29udmVydCh0aGlzLnJvd1NlbGVjdGlvbik7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ET1xuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3JpZFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3QoaXRlbTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5pdGVtc1NlbGVjdGVkLmVtaXQoaXRlbSk7XG5cdH1cblxuXHRvblJvd3NTZWxlY3Qocm93czogQXJyYXk8U2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cblx0XHRjb25zdCBndWlSb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4gPSByb3dzLm1hcCgocm93KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbmRleDogcm93LmdldEluZGV4KCksXG5cdFx0XHRcdGRhdGE6IHJvdy5nZXREYXRhKCksXG5cdFx0XHRcdGl0ZW1JZDogcm93LmdldEl0ZW1JZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MuZW1pdChndWlSb3dzKTtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2UoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGhDaGFuZ2VkLmVtaXQoY29udGFpbmVyV2lkdGgpO1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0KHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uQ2VsbEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0RW50ZXJlZC5lbWl0KCk7XG5cdH1cblxuXHRvbkNlbGxFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHR9XG5cblx0b25DZWxsRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcblx0fVxuXG5cdG9uVGhlbWUodmFsdWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGlzLmdyaWRUaGVtZUNvbnZlcnRlci5jb252ZXJ0VG9HdWlUaGVtZSh2YWx1ZSkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmdDaGFuZ2VkLmVtaXQodGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIuY29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWUpKTtcblx0fVxuXG5cbn1cbiJdfQ==
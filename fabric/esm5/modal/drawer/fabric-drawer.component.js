/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Inject, Input, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogComponent } from '../common/dialog.component';
import { FabricDrawerService } from './fabric-drawer.service';
var FabricDrawerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDrawerComponent, _super);
    function FabricDrawerComponent(componentFactoryResolver, changeDetectorRef, elRef, dialogService, renderer, theme) {
        var _this = _super.call(this, elRef, renderer, theme) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elRef = elRef;
        _this.dialogService = dialogService;
        _this.closeOnClickOutside = false;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricDrawerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createNestedComponent(this.dialogNestedComponent);
        this.changeDetectorRef.detectChanges();
        this.addTheme();
    };
    /**
     * @return {?}
     */
    FabricDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    FabricDrawerComponent.prototype.closeDrawer = /**
     * @return {?}
     */
    function () {
        this.dialogService.close();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricDrawerComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.closeOnClickOutside) {
            if (this.isContainerClicked(event)) {
                this.closeDrawer();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricDrawerComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricDrawerComponent.prototype.createNestedComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
    };
    FabricDrawerComponent.decorators = [
        { type: Component, args: [{
                    template: "<div (document:click)=\"clickOutside($event)\"\n\t class=\"gui-drawer-wrapper\">\n\t<div class=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;position:absolute;height:100%;right:0;top:0;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;max-width:400px;height:100%;position:relative;box-shadow:-3px 0 4px 0 #ccc}"]
                }] }
    ];
    /** @nocollapse */
    FabricDrawerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabricDrawerService },
        { type: Renderer2 },
        { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] }
    ]; };
    FabricDrawerComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }],
        closeOnClickOutside: [{ type: Input }]
    };
    return FabricDrawerComponent;
}(DialogComponent));
export { FabricDrawerComponent };
if (false) {
    /** @type {?} */
    FabricDrawerComponent.prototype.container;
    /** @type {?} */
    FabricDrawerComponent.prototype.closeOnClickOutside;
    /** @type {?} */
    FabricDrawerComponent.prototype.dialogNestedComponent;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FabricDrawerComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9kcmF3ZXIvZmFicmljLWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDtJQU0yQyxpREFBZTtJQVV6RCwrQkFBNkIsd0JBQWtELEVBQzNELGlCQUFvQyxFQUNwQyxLQUFpQixFQUNqQixhQUFrQyxFQUNuRCxRQUFtQixFQUNDLEtBQVk7UUFMbkMsWUFNQyxrQkFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxTQUM3QjtRQVA0Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFQdEQseUJBQW1CLEdBQVksS0FBSyxDQUFDOztJQVdyQyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjtTQUNEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWtCOzs7OztJQUExQixVQUEyQixLQUFVOztZQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFdEYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7OztJQUVPLHFEQUFxQjs7Ozs7SUFBN0IsVUFBOEIsU0FBNEM7O1lBQ25FLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFFekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkEzREQsU0FBUyxTQUFDO29CQUNWLG1RQUE2QztvQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBdEJBLHdCQUF3QjtnQkFGeEIsaUJBQWlCO2dCQUdqQixVQUFVO2dCQWNGLG1CQUFtQjtnQkFWM0IsU0FBUztnQkFNRCxLQUFLLHVCQTJCVCxNQUFNLFNBQUMsVUFBVTs7OzRCQWJwQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7c0NBR2hFLEtBQUs7O0lBa0RQLDRCQUFDO0NBQUEsQUE3REQsQ0FNMkMsZUFBZSxHQXVEekQ7U0F2RFkscUJBQXFCOzs7SUFFakMsMENBQzRCOztJQUU1QixvREFDcUM7O0lBRXJDLHNEQUF5RDs7Ozs7SUFFN0MseURBQW1FOzs7OztJQUM1RSxrREFBcUQ7Ozs7O0lBQ3JELHNDQUFrQzs7Ozs7SUFDbEMsOENBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRSZW5kZXJlcjIsXG5cdFR5cGUsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRyYXdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLWRyYXdlci5uZ3guc2NzcyddLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cblx0QElucHV0KClcblx0Y2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGRpYWxvZ05lc3RlZENvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdEBJbmplY3QodGhlbWVUb2tlbikgdGhlbWU6IFRoZW1lKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jcmVhdGVOZXN0ZWRDb21wb25lbnQodGhpcy5kaWFsb2dOZXN0ZWRDb21wb25lbnQpO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdHRoaXMuYWRkVGhlbWUoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRjbG9zZURyYXdlcigpIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0XHR0aGlzLmNsb3NlRHJhd2VyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc0NvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbnRlbnRSZWYgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmd1aS1kcmF3ZXItY29udGVudCcpO1xuXG5cdFx0aWYgKGRpYWxvZ0NvbnRlbnRSZWYpIHtcblx0XHRcdHJldHVybiAhZGlhbG9nQ29udGVudFJlZi5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmVzdGVkQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+KTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdH1cblxufVxuIl19
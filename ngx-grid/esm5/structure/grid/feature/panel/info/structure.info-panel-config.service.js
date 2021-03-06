/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
var StructureInfoPanelConfigService = /** @class */ (function () {
    function StructureInfoPanelConfigService(structureInfoPanelConfigConverter, structureInfoPanelArchive) {
        this.structureInfoPanelConfigConverter = structureInfoPanelConfigConverter;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureInfoPanelConfigService.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var infoPanelConfig = this.structureInfoPanelConfigConverter.convert(config);
        this.structureInfoPanelArchive.next(infoPanelConfig);
    };
    StructureInfoPanelConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureInfoPanelConfigService.ctorParameters = function () { return [
        { type: StructureInfoPanelConfigConverter },
        { type: StructureInfoPanelArchive }
    ]; };
    return StructureInfoPanelConfigService;
}());
export { StructureInfoPanelConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfigService.prototype.structureInfoPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfigService.prototype.structureInfoPanelArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUc1RjtJQUdDLHlDQUFvQixpQ0FBb0UsRUFDN0UseUJBQW9EO1FBRDNDLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFDN0UsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUMvRCxDQUFDOzs7OztJQUVELDZDQUFHOzs7O0lBQUgsVUFBSSxNQUF1Qjs7WUFDcEIsZUFBZSxHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRTlFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBWEQsVUFBVTs7OztnQkFIRixpQ0FBaUM7Z0JBRGpDLHlCQUF5Qjs7SUFpQmxDLHNDQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksK0JBQStCOzs7Ozs7SUFFL0IsNEVBQTRFOzs7OztJQUNyRixvRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWctY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlKSB7XG5cdH1cblxuXHRzZXQoY29uZmlnOiBJbmZvUGFuZWxDb25maWcpOiB2b2lkIHtcblx0XHRjb25zdCBpbmZvUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlci5jb252ZXJ0KGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUubmV4dChpbmZvUGFuZWxDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==
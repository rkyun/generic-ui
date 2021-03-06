/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../../../../../../structure/summaries/core/domain/summaries.type';
var GuiGridColumnSummariesConverter = /** @class */ (function () {
    function GuiGridColumnSummariesConverter() {
    }
    /**
     * @param {?} summariesConfig
     * @return {?}
     */
    GuiGridColumnSummariesConverter.prototype.convert = /**
     * @param {?} summariesConfig
     * @return {?}
     */
    function (summariesConfig) {
        /** @type {?} */
        var columnSummariesConfig = {};
        if (summariesConfig.enabled !== undefined && summariesConfig.enabled !== null) {
            columnSummariesConfig.enabled = summariesConfig.enabled;
        }
        if (summariesConfig.summariesTypes !== undefined && summariesConfig.summariesTypes !== null) {
            columnSummariesConfig.summariesTypes = this.convertSummariesTypes(summariesConfig.summariesTypes);
        }
        return columnSummariesConfig;
    };
    /**
     * @private
     * @param {?} configSummariesTypes
     * @return {?}
     */
    GuiGridColumnSummariesConverter.prototype.convertSummariesTypes = /**
     * @private
     * @param {?} configSummariesTypes
     * @return {?}
     */
    function (configSummariesTypes) {
        var _this = this;
        /** @type {?} */
        var summariesTypes = [];
        configSummariesTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var summariesType = _this.convertSummariesType(type);
            if (summariesType !== undefined && summariesType !== null) {
                summariesTypes.push(summariesType);
            }
        }));
        return summariesTypes;
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GuiGridColumnSummariesConverter.prototype.convertSummariesType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var loweredSummariesType = type.toLocaleLowerCase();
        switch (loweredSummariesType) {
            case 'count':
                return SummariesType.COUNT;
            case 'distinct':
                return SummariesType.DISTINCT;
            case 'sum':
                return SummariesType.SUM;
            case 'average':
                return SummariesType.AVERAGE;
            case 'min':
                return SummariesType.MIN;
            case 'max':
                return SummariesType.MAX;
            case 'median':
                return SummariesType.MEDIAN;
            case 'truthy':
                return SummariesType.TRUTHY;
            case 'falsy':
                return SummariesType.FALSY;
            case 'earliest':
                return SummariesType.EARLIEST;
            case 'latest':
                return SummariesType.LATEST;
            default:
                return null;
        }
    };
    return GuiGridColumnSummariesConverter;
}());
export { GuiGridColumnSummariesConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXN1bW1hcmllcy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vc3VtbWFyaWVzL2d1aS5ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFLakc7SUFBQTtJQTZFQSxDQUFDOzs7OztJQTNFQSxpREFBTzs7OztJQUFQLFVBQVEsZUFBbUM7O1lBQ3RDLHFCQUFxQixHQUEwQixFQUFFO1FBRXJELElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDOUUscUJBQXFCLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7U0FDeEQ7UUFFRCxJQUFJLGVBQWUsQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLGVBQWUsQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQzVGLHFCQUFxQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTywrREFBcUI7Ozs7O0lBQTdCLFVBQThCLG9CQUFtQztRQUFqRSxpQkFjQzs7WUFaTSxjQUFjLEdBQXlCLEVBQUU7UUFFL0Msb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBWTs7Z0JBRW5DLGFBQWEsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBRXJELElBQUksYUFBYSxLQUFLLFNBQVMsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUMxRCxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyw4REFBb0I7Ozs7O0lBQTVCLFVBQTZCLElBQVk7O1lBRWxDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUVyRCxRQUFRLG9CQUFvQixFQUFFO1lBRTdCLEtBQUssT0FBTztnQkFDWCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFNUIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUUvQixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssU0FBUztnQkFDYixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFFOUIsS0FBSyxLQUFLO2dCQUNULE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUUxQixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFN0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRTVCLEtBQUssVUFBVTtnQkFDZCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFL0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUU3QjtnQkFDQyxPQUFPLElBQUksQ0FBQztTQUViO0lBQ0YsQ0FBQztJQUVGLHNDQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5cbmltcG9ydCB7IEd1aUNvbHVtblN1bW1hcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2d1aS5ncmlkLmluZGV4JztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlciB7XG5cblx0Y29udmVydChzdW1tYXJpZXNDb25maWc6IEd1aUNvbHVtblN1bW1hcmllcyk6IENvbHVtblN1bW1hcmllc0NvbmZpZyB7XG5cdFx0bGV0IGNvbHVtblN1bW1hcmllc0NvbmZpZzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnID0ge307XG5cblx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBzdW1tYXJpZXNDb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uU3VtbWFyaWVzQ29uZmlnLmVuYWJsZWQgPSBzdW1tYXJpZXNDb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzICE9PSB1bmRlZmluZWQgJiYgc3VtbWFyaWVzQ29uZmlnLnN1bW1hcmllc1R5cGVzICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5TdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMgPSB0aGlzLmNvbnZlcnRTdW1tYXJpZXNUeXBlcyhzdW1tYXJpZXNDb25maWcuc3VtbWFyaWVzVHlwZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5TdW1tYXJpZXNDb25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdW1tYXJpZXNUeXBlcyhjb25maWdTdW1tYXJpZXNUeXBlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PFN1bW1hcmllc1R5cGU+IHtcblxuXHRcdGNvbnN0IHN1bW1hcmllc1R5cGVzOiBBcnJheTxTdW1tYXJpZXNUeXBlPiA9IFtdO1xuXG5cdFx0Y29uZmlnU3VtbWFyaWVzVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdGNvbnN0IHN1bW1hcmllc1R5cGUgPSB0aGlzLmNvbnZlcnRTdW1tYXJpZXNUeXBlKHR5cGUpO1xuXG5cdFx0XHRpZiAoc3VtbWFyaWVzVHlwZSAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllc1R5cGUgIT09IG51bGwpIHtcblx0XHRcdFx0c3VtbWFyaWVzVHlwZXMucHVzaChzdW1tYXJpZXNUeXBlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBzdW1tYXJpZXNUeXBlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN1bW1hcmllc1R5cGUodHlwZTogc3RyaW5nKTogU3VtbWFyaWVzVHlwZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkU3VtbWFyaWVzVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFN1bW1hcmllc1R5cGUpIHtcblxuXHRcdFx0Y2FzZSAnY291bnQnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVDtcblxuXHRcdFx0Y2FzZSAnZGlzdGluY3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblxuXHRcdFx0Y2FzZSAnc3VtJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuU1VNO1xuXG5cdFx0XHRjYXNlICdhdmVyYWdlJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQVZFUkFHRTtcblxuXHRcdFx0Y2FzZSAnbWluJzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuTUlOO1xuXG5cdFx0XHRjYXNlICdtYXgnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5NQVg7XG5cblx0XHRcdGNhc2UgJ21lZGlhbic6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLk1FRElBTjtcblxuXHRcdFx0Y2FzZSAndHJ1dGh5Jzpcblx0XHRcdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuVFJVVEhZO1xuXG5cdFx0XHRjYXNlICdmYWxzeSc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkZBTFNZO1xuXG5cdFx0XHRjYXNlICdlYXJsaWVzdCc6XG5cdFx0XHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkVBUkxJRVNUO1xuXG5cdFx0XHRjYXNlICdsYXRlc3QnOlxuXHRcdFx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5MQVRFU1Q7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==
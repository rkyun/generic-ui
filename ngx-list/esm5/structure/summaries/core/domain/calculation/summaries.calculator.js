/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../summaries.type';
/**
 * @abstract
 * @template T, A
 */
var /**
 * @abstract
 * @template T, A
 */
SummariesCalculator = /** @class */ (function () {
    function SummariesCalculator() {
    }
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    SummariesCalculator.prototype.calculate = /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    function (fields, items) {
        var _this = this;
        /** @type {?} */
        var filteredFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return _this.forDataType(field.getDataType()); }));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        /** @type {?} */
        var count = new Map();
        /** @type {?} */
        var distinct = new Map();
        // init
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            _this.prepare(field);
        }));
        // calculate
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            filteredFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var key = field.getKey();
                /** @type {?} */
                var value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isSummaries(SummariesType.COUNT)) {
                        /** @type {?} */
                        var countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isSummaries(SummariesType.DISTINCT)) {
                        /** @type {?} */
                        var distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                _this.aggregate(field, value);
            }));
        }));
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.postCalculate(field, items);
        }));
        /** @type {?} */
        var summaries = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getKey();
            /** @type {?} */
            var aggregatedValues = _this.generateAggregatedValues(field);
            if (field.isSummaries(SummariesType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isSummaries(SummariesType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            summaries.set(key, aggregatedValues);
        }));
        return summaries;
    };
    return SummariesCalculator;
}());
/**
 * @abstract
 * @template T, A
 */
export { SummariesCalculator };
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    SummariesCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    SummariesCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    SummariesCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.generateAggregatedValues = function (field) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFJbEQ7Ozs7O0lBQUE7SUF1RkEsQ0FBQzs7Ozs7O0lBM0VBLHVDQUFTOzs7OztJQUFULFVBQVUsTUFBb0IsRUFBRSxLQUE4QjtRQUE5RCxpQkF5RUM7O1lBdkVNLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBckMsQ0FBcUMsRUFBQztRQUU3RixJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pFLE9BQU8sSUFBSSxDQUFDO1NBQ1o7O1lBRUcsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFrQjs7WUFDcEMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUF1QjtRQUUxQyxPQUFPO1FBQ1AsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQVk7O2dCQUU3QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUUxQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUVILFlBQVk7UUFDWixLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBc0I7WUFFcEMsY0FBYyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEtBQVk7O29CQUU3QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTs7b0JBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFFN0IsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtvQkFFMUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7NEJBQ3JDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzs0QkFDeEMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUNyQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2QjtpQkFDRDtnQkFFRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQVk7WUFFbkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsQ0FBQyxFQUFDLENBQUM7O1lBRUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRXpCLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFZOztnQkFFN0IsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2dCQUV0QixnQkFBZ0IsR0FBRyxLQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO1lBRTNELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkQ7WUFFRCxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztJQUVGLDBCQUFDO0FBQUQsQ0FBQyxBQXZGRCxJQXVGQzs7Ozs7Ozs7Ozs7O0lBckZBLG9FQUFrRDs7Ozs7O0lBRWxELDZEQUFxQzs7Ozs7OztJQUVyQywwRUFBMkU7Ozs7Ozs7SUFFM0Usc0VBQWlEOzs7Ozs7SUFFakQsOEVBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VtbWFyaWVzQ2FsY3VsYXRvcjxULCBBIGV4dGVuZHMgU3VtbWFyaWVzVmFsdWVzPiB7XG5cblx0YWJzdHJhY3QgZm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbjtcblxuXHRhYnN0cmFjdCBwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgcG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQ7XG5cblx0YWJzdHJhY3QgYWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IFQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBBO1xuXG5cdGNhbGN1bGF0ZShmaWVsZHM6IEFycmF5PEZpZWxkPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogTWFwPHN0cmluZywgQT4ge1xuXG5cdFx0Y29uc3QgZmlsdGVyZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKChmaWVsZDogRmllbGQpID0+IHRoaXMuZm9yRGF0YVR5cGUoZmllbGQuZ2V0RGF0YVR5cGUoKSkpO1xuXG5cdFx0aWYgKCFmaWx0ZXJlZEZpZWxkcyB8fCBmaWx0ZXJlZEZpZWxkcy5sZW5ndGggPT09IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgY291bnQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpLFxuXHRcdFx0ZGlzdGluY3QgPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XG5cblx0XHQvLyBpbml0XG5cdFx0ZmlsdGVyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEZpZWxkKSA9PiB7XG5cblx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0XHRjb3VudC5zZXQoa2V5LCAwKTtcblx0XHRcdGRpc3RpbmN0LnNldChrZXksIG5ldyBTZXQoKSk7XG5cblx0XHRcdHRoaXMucHJlcGFyZShmaWVsZCk7XG5cdFx0fSk7XG5cblx0XHQvLyBjYWxjdWxhdGVcblx0XHRpdGVtcy5mb3JFYWNoKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cblx0XHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0XHRcdHZhbHVlID0gZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsIHx8IHZhbHVlICE9PSB1bmRlZmluZWQgfHwgdmFsdWUgIT09ICcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5DT1VOVCkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNvdW50Rm9yRmllbGQgPSBjb3VudC5nZXQoa2V5KTtcblx0XHRcdFx0XHRcdGNvdW50LnNldChrZXksIGNvdW50Rm9yRmllbGQgKyAxKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5ESVNUSU5DVCkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGRpc3RpbmN0U2V0ID0gZGlzdGluY3QuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRkaXN0aW5jdFNldC5hZGQodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRlKGZpZWxkLCB2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHR0aGlzLnBvc3RDYWxjdWxhdGUoZmllbGQsIGl0ZW1zKTtcblxuXHRcdH0pO1xuXG5cdFx0bGV0IHN1bW1hcmllcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdFx0bGV0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSB0aGlzLmdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZCk7XG5cblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkNPVU5UKSkge1xuXHRcdFx0XHRhZ2dyZWdhdGVkVmFsdWVzLnNldENvdW50KGNvdW50LmdldChrZXkpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdGFnZ3JlZ2F0ZWRWYWx1ZXMuc2V0RGlzdGluY3QoKGRpc3RpbmN0LmdldChrZXkpKS5zaXplKTtcblx0XHRcdH1cblxuXHRcdFx0c3VtbWFyaWVzLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN1bW1hcmllcztcblx0fVxuXG59XG4iXX0=
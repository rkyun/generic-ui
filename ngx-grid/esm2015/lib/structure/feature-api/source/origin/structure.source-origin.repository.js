/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
export class StructureSourceOriginRepository {
    constructor() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    setOrigin(origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onOrigin(structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        (map) => {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    }
}
StructureSourceOriginRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0QsTUFBTSxPQUFPLCtCQUErQjtJQUQ1QztRQUdTLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUV2QyxZQUFPLEdBQUcsSUFBSSxhQUFhLEVBQTJCLENBQUM7SUFrQmhFLENBQUM7Ozs7OztJQWhCQSxTQUFTLENBQUMsTUFBK0IsRUFBRSxXQUF3QjtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBRWhDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsR0FBNEIsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7Ozs7SUFHVixpREFBK0M7Ozs7O0lBRS9DLGtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgb3JpZ2luID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KCk7XG5cblx0cHJpdmF0ZSBvcmlnaW4kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgQXJyYXk8YW55Pj4+KCk7XG5cblx0c2V0T3JpZ2luKG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMub3JpZ2luLnNldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpLCBvcmlnaW4pO1xuXHRcdHRoaXMub3JpZ2luJC5uZXh0KHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdG9uT3JpZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChtYXA6IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==
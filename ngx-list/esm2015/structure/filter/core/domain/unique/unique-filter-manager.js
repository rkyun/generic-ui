/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { KeyMap } from '@generic-ui/hermes';
import { UniqueValueCollection } from './unique-value-collection';
export class UniqueFilterManager {
    constructor() {
        this.uniqueValueMap = new KeyMap();
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    calculate(entities, field) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const optUVM = this.uniqueValueMap.get(fieldId);
        optUVM.ifEmpty((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const set = new Set();
            for (let entity of entities) {
                set.add(field.getValue(entity));
            }
            // sort
            /** @type {?} */
            const sortedValues = Array.from(set.values()).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return ((/** @type {?} */ (field))).getField().sort(a, b);
            }));
            /** @type {?} */
            const uvc = new UniqueValueCollection(sortedValues, field);
            this.uniqueValueMap.set(field.getId(), uvc);
        }));
    }
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    calculateAll(entities, fields) {
        for (let field of fields) {
            this.calculate(entities, field);
        }
    }
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    filterAll(entities, fields) {
        /** @type {?} */
        let values = entities;
        for (let field of fields) {
            values = this.filter(values, field);
        }
        return values;
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    filter(entities, field) {
        /** @type {?} */
        let values = [];
        this.uniqueValueMap
            .get(field.getId())
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            if (uvc.isAllSelected()) {
                values = entities;
            }
            else if (uvc.isAllDisabled()) {
                values = [];
            }
            else {
                values = entities.filter((/**
                 * @param {?} itemEntity
                 * @return {?}
                 */
                (itemEntity) => {
                    for (let notSelectedValue of uvc.getNotSelected()) {
                        if (((/** @type {?} */ (field.getField()))).equals(itemEntity, ((/** @type {?} */ (notSelectedValue))).getValue())) {
                            return false;
                        }
                    }
                    return true;
                }));
            }
        }));
        return values;
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    selectAll(fieldId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.selectAll();
        }));
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    select(fieldId, uniqueValueId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.select(uniqueValueId);
        }));
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    unselectAll(fieldId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.unselectAll();
        }));
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    unselect(fieldId, uniqueValueId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.unselect(uniqueValueId);
        }));
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    getAll(fields) {
        /** @type {?} */
        let map = new Map();
        for (let field of fields) {
            this.getValues(field)
                .ifPresent((/**
             * @param {?} v
             * @return {?}
             */
            (v) => {
                map.set(field.getId().toString(), v);
            }));
        }
        return map;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    getValues(field) {
        return this.uniqueValueMap
            .get(field.getId())
            .map((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            return uvc.getAll();
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterManager.prototype.uniqueValueMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUt0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sbUJBQW1CO0lBQWhDO1FBRWtCLG1CQUFjLEdBQUcsSUFBSSxNQUFNLEVBQWtDLENBQUM7SUEwSWhGLENBQUM7Ozs7OztJQXhJQSxTQUFTLENBQUMsUUFBaUMsRUFBRSxLQUFZOztjQUVsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTs7Y0FFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUUvQyxNQUFNLENBQUMsT0FBTzs7O1FBQUMsR0FBRyxFQUFFOztrQkFFYixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFFckIsS0FBSyxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7Z0JBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2hDOzs7a0JBR0ssWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtnQkFDckUsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQUM7O2tCQUVJLEdBQUcsR0FBRyxJQUFJLHFCQUFxQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7WUFFMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBRUosQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQWlDLEVBQUUsTUFBb0I7UUFDbkUsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBaUMsRUFBRSxNQUFvQjs7WUFFNUQsTUFBTSxHQUE0QixRQUFRO1FBRTlDLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBRXpCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWlDLEVBQUUsS0FBWTs7WUFFakQsTUFBTSxHQUE0QixFQUFFO1FBRXhDLElBQUksQ0FBQyxjQUFjO2FBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbEIsU0FBUzs7OztRQUFDLENBQUMsR0FBMEIsRUFBRSxFQUFFO1lBRXpDLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN4QixNQUFNLEdBQUcsUUFBUSxDQUFDO2FBQ2xCO2lCQUFNLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUMvQixNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ1o7aUJBQU07Z0JBRU4sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsVUFBNEIsRUFBRSxFQUFFO29CQUV6RCxLQUFLLElBQUksZ0JBQWdCLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFO3dCQUVsRCxJQUFJLENBQUMsbUJBQUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsbUJBQUEsZ0JBQWdCLEVBQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7NEJBQ3ZGLE9BQU8sS0FBSyxDQUFDO3lCQUNiO3FCQUNEO29CQUVELE9BQU8sSUFBSSxDQUFDO2dCQUNiLENBQUMsRUFBQyxDQUFDO2FBQ0g7UUFFRixDQUFDLEVBQUMsQ0FBQztRQUVKLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBZ0I7UUFFekIsSUFBSSxDQUFDLGNBQWM7YUFDakIsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLFNBQVM7Ozs7UUFBQyxDQUFDLEdBQTBCLEVBQUUsRUFBRTtZQUN6QyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBZ0IsRUFBRSxhQUE0QjtRQUVwRCxJQUFJLENBQUMsY0FBYzthQUNqQixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osU0FBUzs7OztRQUFDLENBQUMsR0FBMEIsRUFBRSxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFnQjtRQUUzQixJQUFJLENBQUMsY0FBYzthQUNqQixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osU0FBUzs7OztRQUFDLENBQUMsR0FBMEIsRUFBRSxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxPQUFnQixFQUFFLGFBQTRCO1FBRXRELElBQUksQ0FBQyxjQUFjO2FBQ2pCLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixTQUFTOzs7O1FBQUMsQ0FBQyxHQUEwQixFQUFFLEVBQUU7WUFDekMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQW9COztZQUV0QixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFbkIsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFFekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7aUJBQ25CLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFZO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUEwQixFQUFFLEVBQUU7WUFDbkMsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDVCxDQUFDO0NBRUQ7Ozs7OztJQTFJQSw2Q0FBK0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlNYXAsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbiB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuaXF1ZVZhbHVlTWFwID0gbmV3IEtleU1hcDxGaWVsZElkLCBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24+KCk7XG5cblx0Y2FsY3VsYXRlKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKTtcblxuXHRcdGNvbnN0IG9wdFVWTSA9IHRoaXMudW5pcXVlVmFsdWVNYXAuZ2V0KGZpZWxkSWQpO1xuXG5cdFx0b3B0VVZNLmlmRW1wdHkoKCkgPT4ge1xuXG5cdFx0XHRjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cblx0XHRcdGZvciAobGV0IGVudGl0eSBvZiBlbnRpdGllcykge1xuXHRcdFx0XHRzZXQuYWRkKGZpZWxkLmdldFZhbHVlKGVudGl0eSkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBzb3J0XG5cdFx0XHRjb25zdCBzb3J0ZWRWYWx1ZXMgPSBBcnJheS5mcm9tKHNldC52YWx1ZXMoKSkuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcblx0XHRcdFx0cmV0dXJuIChmaWVsZCBhcyBhbnkpLmdldEZpZWxkKCkuc29ydChhLCBiKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCB1dmMgPSBuZXcgVW5pcXVlVmFsdWVDb2xsZWN0aW9uKHNvcnRlZFZhbHVlcywgZmllbGQpO1xuXG5cdFx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwLnNldChmaWVsZC5nZXRJZCgpLCB1dmMpO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRjYWxjdWxhdGVBbGwoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZHM6IEFycmF5PEZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGUoZW50aXRpZXMsIGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRmaWx0ZXJBbGwoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZHM6IEFycmF5PEZpZWxkPik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGxldCB2YWx1ZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gZW50aXRpZXM7XG5cblx0XHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblxuXHRcdFx0dmFsdWVzID0gdGhpcy5maWx0ZXIodmFsdWVzLCBmaWVsZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkOiBGaWVsZCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGxldCB2YWx1ZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkLmdldElkKCkpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXG5cdFx0XHRcdGlmICh1dmMuaXNBbGxTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdFx0dmFsdWVzID0gZW50aXRpZXM7XG5cdFx0XHRcdH0gZWxzZSBpZiAodXZjLmlzQWxsRGlzYWJsZWQoKSkge1xuXHRcdFx0XHRcdHZhbHVlcyA9IFtdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dmFsdWVzID0gZW50aXRpZXMuZmlsdGVyKChpdGVtRW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cblx0XHRcdFx0XHRcdGZvciAobGV0IG5vdFNlbGVjdGVkVmFsdWUgb2YgdXZjLmdldE5vdFNlbGVjdGVkKCkpIHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoKGZpZWxkLmdldEZpZWxkKCkgYXMgYW55KS5lcXVhbHMoaXRlbUVudGl0eSwgKG5vdFNlbGVjdGVkVmFsdWUgYXMgYW55KS5nZXRWYWx1ZSgpKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB2YWx1ZXM7XG5cdH1cblxuXHRzZWxlY3RBbGwoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZElkKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0dXZjLnNlbGVjdEFsbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzZWxlY3QoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZElkKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0dXZjLnNlbGVjdCh1bmlxdWVWYWx1ZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZElkKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0dXZjLnVuc2VsZWN0QWxsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHVuc2VsZWN0KGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdC5nZXQoZmllbGRJZClcblx0XHRcdC5pZlByZXNlbnQoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdHV2Yy51bnNlbGVjdCh1bmlxdWVWYWx1ZUlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Z2V0QWxsKGZpZWxkczogQXJyYXk8RmllbGQ+KTogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+PiB7XG5cblx0XHRsZXQgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cblx0XHRcdHRoaXMuZ2V0VmFsdWVzKGZpZWxkKVxuXHRcdFx0XHQuaWZQcmVzZW50KCh2KSA9PiB7XG5cdFx0XHRcdFx0bWFwLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIHYpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Z2V0VmFsdWVzKGZpZWxkOiBGaWVsZCk6IE9wdGlvbmFsPEFycmF5PFVuaXF1ZVZhbHVlPj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdFx0ICAgLmdldChmaWVsZC5nZXRJZCgpKVxuXHRcdFx0XHQgICAubWFwKCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdCAgIHJldHVybiB1dmMuZ2V0QWxsKCk7XG5cdFx0XHRcdCAgIH0pO1xuXHR9XG5cbn1cbiJdfQ==
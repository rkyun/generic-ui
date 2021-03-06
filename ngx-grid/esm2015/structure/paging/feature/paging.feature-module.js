/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { PagingComponent } from './paging.component';
import { PagingSelectComponent } from './select/paging-select.component';
import { AlternativePagingNavigatorComponent } from './advanced/navigator/alternative-paging-navigator.component';
import { AlternativePagingPagesComponent } from './advanced/pages/alternative-paging-pages.component';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingApiModule } from '../core/api/paging.api-module';
import { PagingNavigatorComponent } from './basic/navigator/paging-navigator.component';
import { PagingStatsComponent } from './basic/stats/paging-stats.component';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
export class PagingFeatureModule extends FeatureModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [
            PagingDisplayModeArchive
        ];
    }
}
PagingFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    PagingApiModule,
                    TranslationFeatureModule
                ],
                declarations: [
                    PagingComponent,
                    PagingNavigatorComponent,
                    PagingSelectComponent,
                    PagingStatsComponent,
                    AlternativePagingNavigatorComponent,
                    AlternativePagingPagesComponent
                ],
                exports: [
                    PagingComponent,
                    PagingNavigatorComponent,
                    PagingSelectComponent,
                    PagingStatsComponent,
                    AlternativePagingNavigatorComponent,
                    AlternativePagingPagesComponent
                ]
            },] }
];
/** @nocollapse */
PagingFeatureModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUEwQjVGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBUXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBUkQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTztZQUNOLHdCQUF3QjtTQUN4QixDQUFDO0lBQ0gsQ0FBQzs7O1lBOUJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2Ysd0JBQXdCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZUFBZTtvQkFDZix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixtQ0FBbUM7b0JBQ25DLCtCQUErQjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGVBQWU7b0JBQ2Ysd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsbUNBQW1DO29CQUNuQywrQkFBK0I7aUJBQy9CO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0L3BhZ2luZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFsdGVybmF0aXZlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC9uYXZpZ2F0b3IvYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQvcGFnZXMvYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMvbmF2aWdhdG9yL3BhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ1N0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFBhZ2luZ0FwaU1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGFnaW5nQ29tcG9uZW50LFxuXHRcdFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRQYWdpbmdTZWxlY3RDb21wb25lbnQsXG5cdFx0UGFnaW5nU3RhdHNDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQsXG5cdFx0QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZVxuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureQueryProviders } from '../../infrastructure/in-memory/structure/in-memory.structure.providers';
import { InitStructureCommandHandler } from '../../domain/structure/command/init/init-structure.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { InitFieldsCommandHandler } from '../../domain/structure/command/field/init/init-fields.command-handler';
import { ToggleSortCommandHandler } from '../../domain/structure/command/sort/toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from '../../domain/structure/command/sort/set/set-sorting.command-handler';
import { StructureSetConfigFilterCommandHandler } from '../../domain/structure/command/filter/config/structure.set-config-filter.command-handler';
import { StructureSetConfigSearchingCommandHandler } from '../../domain/structure/command/search/config/structure.set-config-searching.command-handler';
import { StructureSetConfigQuickFilterCommandHandler } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command-handler';
import { StructureToggleFilterCommandHandler } from '../../domain/structure/command/filter/toggle/structure.toggle-filter.command-handler';
import { StructureSetAggregationEnabledCommandHandler } from '../../domain/structure/command/aggregation/set/structure.set-aggregation-enabled.command-handler';
import { VerticalFormationFactory } from '../../domain/structure/command/vertical-formation/vertical-formation.factory';
import { FieldContainerFactory } from '../../domain/structure/command/field/field-container.factory';
import { FilterContainerFactory } from '../../domain/structure/command/filter/filter.container-factory';
import { FieldIdGenerator } from '../../domain/structure/command/field/field-id.generator';
import { StructureFilterCommandService } from '../../ui-api/structure/filter/structure.filter.command.service';
import { FieldFactory } from '../../domain/structure/command/field/data-type/field.factory';
import { aggregationProviders } from '../../domain/structure/command/aggregation/aggregation.providers';
import { StructureConfigFilterSetEventHandler } from '../../domain/structure/query/filter/structure.config-filter-set.event-handler';
import { StructureConfigSearchingSetEventHandler } from '../../domain/structure/query/searching/structure.config-searching-set.event-handler';
import { StructureConfigQuickFilterSetEventHandler } from '../../domain/structure/query/filter/structure.config-quick-filter-set.event-handler';
import { StructureFieldsInitedEventHandler } from '../../ui-api/structure/field/structure.fields-inited.event-handler';
import { VerticalFormationConverter } from '../../domain/structure/query/vertical-formation/vertical-formation.converter';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { StructureFilterRepository } from '../../domain/structure/query/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../domain/structure/query/filter/structure.quick-filter.repository';
import { StructureSearchingRepository } from '../../domain/structure/query/searching/structure.searching.repository';
import { StructureSearchReadModelRepository } from '../../ui-api/structure/search/structure-search.read-model.repository';
import { StructureFieldUiArchive } from '../../ui-api/structure/field/structure.field.ui-archive';
import { StructureFieldUiConverter } from '../../ui-api/structure/field/structure.field.ui-converter';
import { StructureFieldUiRepository } from '../../ui-api/structure/field/structure.field.ui-repository';
import { StructureAggregationCommandService } from '../../ui-api/structure/aggregation/structure.aggregation.command-service';
import { StructureAggregationUiEventsRepository } from '../../ui-api/structure/aggregation/structure.aggregation.ui-events-repository';
import { StructureCommandService } from './structure-command.service';
import { StructureConverter } from '../../domain/structure/structure.converter';
import { StructureAggregateFactory } from '../../domain/structure/command/structure.aggregate-factory';
import { StructureQueryService } from './structure-query.service';
import { pagingProviders } from '../paging/paging.providers';
import { schemaProviders } from '../schema/schema.providers';
import { formationProviders } from '../formation/formation.providers';
import { sourceProviders } from '../source/source.providers';
/** @type {?} */
const commandProviders = [
    ...inMemoryStructureCommandProviders,
    {
        provide: COMMAND_HANDLERS,
        useClass: InitStructureCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetVerticalScrollEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetScrollPositionCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: InitFieldsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSortCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigSearchingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigQuickFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureToggleFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetAggregationEnabledCommandHandler,
        multi: true
    },
    VerticalFormationFactory,
    FieldContainerFactory,
    FilterContainerFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory,
    ...aggregationProviders
];
/** @type {?} */
const queryProviders = [
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    },
    ...inMemoryStructureQueryProviders,
    VerticalFormationConverter,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository
];
/** @type {?} */
export const structureProviders = [
    ...inMemoryStructureProviders,
    ...commandProviders,
    ...queryProviders,
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureQueryService,
    StructureCommandService,
    ...pagingProviders,
    ...schemaProviders,
    ...formationProviders,
    ...sourceProviders
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFDTixpQ0FBaUMsRUFDakMsMEJBQTBCLEVBQzFCLCtCQUErQixFQUMvQixNQUFNLHdFQUF3RSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDJHQUEyRyxDQUFDO0FBQ25LLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVHQUF1RyxDQUFDO0FBQ3hKLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ2pILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBGQUEwRixDQUFDO0FBQ2xKLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDZGQUE2RixDQUFDO0FBQ3hKLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLCtGQUErRixDQUFDO0FBQzVKLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBQzNJLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBQ2hLLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3JHLE9B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R0FBRztJQUNqQyxHQUFHLDBCQUEwQjtJQUU3QixHQUFHLGdCQUFnQjtJQUNuQixHQUFHLGNBQWM7SUFFakIsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUV0Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBRWxCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFFdkIsR0FBRyxlQUFlO0lBQ2xCLEdBQUcsZUFBZTtJQUNsQixHQUFHLGtCQUFrQjtJQUNyQixHQUFHLGVBQWU7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT01NQU5EX0hBTkRMRVJTLCBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHtcblx0aW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblx0aW5NZW1vcnlTdHJ1Y3R1cmVRdWVyeVByb3ZpZGVyc1xufSBmcm9tICcuLi8uLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL2luLW1lbW9yeS5zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IEluaXRTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9pbml0L2luaXQtc3RydWN0dXJlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvc2V0L3NldC1zb3J0aW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3F1aWNrL3N0cnVjdHVyZS5zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3RvZ2dsZS9zdHJ1Y3R1cmUudG9nZ2xlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc2V0L3N0cnVjdHVyZS5zZXQtYWdncmVnYXRpb24tZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbnRhaW5lckZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQtY29udGFpbmVyLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvZmlsdGVyLmNvbnRhaW5lci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L2ZpbHRlci9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3NlYXJjaGluZy9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmllbGQvc3RydWN0dXJlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9maWx0ZXIvc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3NlYXJjaGluZy9zdHJ1Y3R1cmUuc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uY29tbWFuZC1zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24udWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgcGFnaW5nUHJvdmlkZXJzIH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgc2NoZW1hUHJvdmlkZXJzIH0gZnJvbSAnLi4vc2NoZW1hL3NjaGVtYS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5wcm92aWRlcnMnO1xuXG5cblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzLFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogSW5pdFN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldFNvcnRpbmdDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0VmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRGaWVsZENvbnRhaW5lckZhY3RvcnksXG5cdEZpbHRlckNvbnRhaW5lckZhY3RvcnksXG5cdEZpZWxkSWRHZW5lcmF0b3IsXG5cdFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLFxuXHRGaWVsZEZhY3RvcnksXG5cblx0Li4uYWdncmVnYXRpb25Qcm92aWRlcnNcbl07XG5cbmNvbnN0IHF1ZXJ5UHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVF1ZXJ5UHJvdmlkZXJzLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcixcblx0U3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSxcblx0U3RydWN0dXJlRmllbGRVaUNvbnZlcnRlcixcblx0U3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnF1ZXJ5UHJvdmlkZXJzLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5LFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFN0cnVjdHVyZUNvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UsXG5cdFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLFxuXG5cdC4uLnBhZ2luZ1Byb3ZpZGVycyxcblx0Li4uc2NoZW1hUHJvdmlkZXJzLFxuXHQuLi5mb3JtYXRpb25Qcm92aWRlcnMsXG5cdC4uLnNvdXJjZVByb3ZpZGVyc1xuXTtcbiJdfQ==
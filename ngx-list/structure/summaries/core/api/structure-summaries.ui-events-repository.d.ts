import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/domain-read/structure.read-model-root-id';
export declare class StructureSummariesUiEventsRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    constructor(domainEventBus: DomainEventBus);
    onSummariesChanged(structureId: StructureReadModelRootId): Observable<DomainEvent<StructureId>>;
}

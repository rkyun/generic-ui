import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class PageChangedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
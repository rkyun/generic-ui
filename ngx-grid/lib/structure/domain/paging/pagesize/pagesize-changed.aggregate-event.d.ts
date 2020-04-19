import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class PagesizeChangedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
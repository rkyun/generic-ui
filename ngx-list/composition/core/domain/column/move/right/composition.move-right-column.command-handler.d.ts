import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionAggregate } from '../../../composition.aggregate';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
export declare class CompositionMoveRightColumnCommandHandler implements CommandHandler<CompositionAggregate, CompositionMoveRightColumnCommand> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<CompositionMoveRightColumnCommand>;
    publishDomainEvents(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    handleAggregate(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    private publishEvents;
}

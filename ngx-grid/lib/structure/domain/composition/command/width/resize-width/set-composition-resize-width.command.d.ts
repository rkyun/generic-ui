import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class SetCompositionResizeWidthCommand extends Command {
    readonly structureId: StructureId;
    readonly enabled: boolean;
    constructor(structureId: StructureId, enabled: boolean);
}

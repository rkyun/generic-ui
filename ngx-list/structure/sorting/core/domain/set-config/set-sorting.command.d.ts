import { StructureId } from '../../../../core/api/structure.id';
import { SortingConfig } from '../../api/sorting-config';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetSortingCommand extends StructureCommand {
    private readonly sortingConfig;
    constructor(structureId: StructureId, sortingConfig: SortingConfig);
    getSortingConfig(): SortingConfig;
}

import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../api/search-config';
import { StructureId } from '../../../core/api/structure.id';
import { SearchHighlightArchive } from '../api/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../api/placeholder/search-placeholder.archive';
export declare class SearchDispatcher {
    private readonly commandDispatcher;
    private readonly structureSearchHighlightArchive;
    private readonly structureSearchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: SearchHighlightArchive, structureSearchPlaceholderArchive: SearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
    private searchOnInit;
}

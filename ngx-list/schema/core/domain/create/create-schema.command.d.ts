import { CreateAggregateCommand } from '@generic-ui/hermes';
import { SchemaId } from '../../api/schema.id';
export declare class CreateSchemaCommand extends CreateAggregateCommand {
    constructor(schemaId: SchemaId);
}

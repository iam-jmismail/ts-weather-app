import { UserDocument } from "@type/*";
import { FlatRecord, SchemaOptions } from "mongoose";


export const getSchemaOption = <T>() => {
    const schemaOptions: SchemaOptions<FlatRecord<T>> = {
        timestamps: true, // Adds createdAt and updatedAt fields
    };

    return schemaOptions
} 

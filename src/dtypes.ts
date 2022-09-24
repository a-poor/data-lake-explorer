
export enum DataType {
    String = 'string',
    Integer = 'integer',
    Float = 'float',
    Boolean = 'boolean',
    Date = 'date',
    Bytes = 'bytes',
    Array = 'array',
    Map = 'map',
}

export enum DataFormat {
    CSV = 'csv',
    Excel = 'excel',
    JSON = 'json',
    NDJSON = 'ndjson',
    Proto3 = 'proto3',
    Parquet = 'parquet',
    Avro = 'avro',
    XML = 'xml',
    RawText = 'raw_text',
    RawBinary = 'raw_binary',
    Logs = 'logs',
}

export interface IDataSource {
}

export interface ITableSchema {
    columns: IFieldSchema[];
}

export interface IFieldSchema {
    name: string;
    dtype: DataType;
    nullable?: boolean;
}

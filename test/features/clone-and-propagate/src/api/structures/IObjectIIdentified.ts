import type { IJsDocTagInfo } from "./IJsDocTagInfo";
import type { IJsonSchema } from "./IJsonSchema";
import type { RecordstringIJsonSchema } from "./RecordstringIJsonSchema";

export type IObjectIIdentified = {
  properties: RecordstringIJsonSchema;
  required?: undefined | string[];
  patternProperties?: undefined | RecordstringIJsonSchema;
  additionalProperties?:
    | undefined
    | IJsonSchema.IEnumerationstring
    | IJsonSchema.IEnumerationnumber
    | IJsonSchema.IEnumerationboolean
    | IJsonSchema.IBoolean
    | IJsonSchema.INumber
    | IJsonSchema.IInteger
    | IJsonSchema.IString
    | IJsonSchema.IArray
    | IJsonSchema.ITuple
    | IJsonSchema.IObject
    | IJsonSchema.IReference
    | IJsonSchema.INullOnly
    | IJsonSchema.IOneOf
    | IJsonSchema.IUnknown;
  "x-typia-patternProperties"?: undefined | RecordstringIJsonSchema;
  "x-typia-additionalProperties"?:
    | undefined
    | IJsonSchema.IEnumerationstring
    | IJsonSchema.IEnumerationnumber
    | IJsonSchema.IEnumerationboolean
    | IJsonSchema.IBoolean
    | IJsonSchema.INumber
    | IJsonSchema.IInteger
    | IJsonSchema.IString
    | IJsonSchema.IArray
    | IJsonSchema.ITuple
    | IJsonSchema.IObject
    | IJsonSchema.IReference
    | IJsonSchema.INullOnly
    | IJsonSchema.IOneOf
    | IJsonSchema.IUnknown;
  type: "object";
  /**
   * Only when swagger mode.
   */
  nullable?: undefined | boolean;
  deprecated?: undefined | boolean;
  title?: undefined | string;
  description?: undefined | string;
  "x-typia-jsDocTags"?: undefined | IJsDocTagInfo[];
  "x-typia-required"?: undefined | boolean;
  "x-typia-optional"?: undefined | boolean;
  "x-typia-rest"?: undefined | boolean;
  $id?: undefined | string;
  $recursiveAnchor?: undefined | boolean;
};

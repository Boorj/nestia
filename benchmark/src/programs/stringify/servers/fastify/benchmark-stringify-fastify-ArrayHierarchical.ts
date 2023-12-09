import typia from "typia";

import { Collection } from "../../../../structures/pure/Collection";
import { ArrayHierarchical } from "../../../../structures/pure/ArrayHierarchical";
import { createAjvStringifyProgram } from "../createAjvStringifyProgram";

createAjvStringifyProgram(37_002)(
    typia.json.application<[Collection<ArrayHierarchical>], "ajv">()
);
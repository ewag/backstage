/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { PropDef, GetPropDefTypes } from './prop-def';

/** @public */
const positionValues = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky',
] as const;

/** @public */
const positionPropDefs = {
  position: {
    type: 'enum',
    className: 'bui-position',
    values: positionValues,
    responsive: true,
  },
} satisfies {
  position: PropDef<(typeof positionValues)[number]>;
};

// Use all of the imported prop defs to ensure that JSDoc works
/** @public */
type PositionProps = GetPropDefTypes<typeof positionPropDefs>;

export { positionPropDefs };
export type { PositionProps };

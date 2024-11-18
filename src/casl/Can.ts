import { createContext } from 'react'
import { createContextualCan } from '@casl/react'

import { AnyAbility, PureAbility } from '@casl/ability'

const defaultAbility = new PureAbility()

export const AbilityContext = createContext<AnyAbility>(defaultAbility)
export const Can = createContextualCan(AbilityContext.Consumer)

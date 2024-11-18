import { AbilityContext } from './Can'
import { useAbility } from '@casl/react'

export const useMyAbility = () => {
  return useAbility(AbilityContext)
}

import { useContext } from 'react'
import { UserPreference } from './App'
import { css } from '@emotion/react'
import { Button } from './components/Button'
import { OpaquePlane } from './components/OpaquePlane'

function isObjectFilled(o) {
  for (const [key, value] of Object.entries(o))
    if (value === null) return false
    else
      if (typeof value === 'object')
        if (!isObjectFilled(o[key])) return false

  return true
}

export const useMyScentNavigator = () => {
  const [userPreference] = useContext(UserPreference)
  const isFinished = isObjectFilled(userPreference)

  return isFinished && <OpaquePlane>
    <div css={css`width: 100%; height: 100%; display: flex; justify-content: center; align-items: center`}>
      <Button buttonText='디퓨저 조향 시작하기' to='/myscent' css={css`background-color: grey; opacity: 0.9;`} />
    </div>
  </OpaquePlane>
}
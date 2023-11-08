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
    <div css={css`position: absolute; bottom: 0; width: 100%; display: flex; align-items: center; flex-direction: column;`}>
      <Button buttonText='디퓨저 조향 시작하기' to='/myscent' className={css`margin-bottom: 200px;`} />

      <div css={css`background-color: black; width: 100%; height: 500px; display: flex; align-items: center; justify-content: center;`}>
        <p css={css`text-align: center; color: white; font-family: NotoSansKR-Regular; font-size: 40px;`}>좀 더 생각해볼게요</p>
      </div>
    </div>
  </OpaquePlane>
}
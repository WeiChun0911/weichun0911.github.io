import React, { useReducer } from 'react';
import Input from './SemiControlledInput'
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case '+物/魔攻':
      return { ...state, "物/魔攻": state["物/魔攻"] + 0.1 };
    case '-物/魔攻':
      return { ...state, "物/魔攻": state["物/魔攻"] - 0.1 };
    case 'set物/魔攻':
      return { ...state, "物/魔攻": action.value }
    case '+物/魔傷':
      return { ...state, "物/魔傷": state["物/魔傷"] + 0.1 };
    case '-物/魔傷':
      return { ...state, "物/魔傷": state["物/魔傷"] - 0.1 };
    case 'set物/魔傷':
      return { ...state, "物/魔傷": action.value }
    case '+B攻':
      return { ...state, "B攻": state["B攻"] + 0.1 };
    case '-B攻':
      return { ...state, "B攻": state["B攻"] - 0.1 };
    case 'setB攻':
      return { ...state, "B攻": action.value }
    case '+爆傷':
      return { ...state, "爆傷": state["爆傷"] + 0.1 };
    case '-爆傷':
      return { ...state, "爆傷": state["爆傷"] - 0.1 };
    case 'set爆傷':
      return { ...state, "爆傷": action.value }
    case '+終傷':
      return { ...state, "終傷": state["終傷"] + 0.1 };
    case '-終傷':
      return { ...state, "終傷": state["終傷"] - 0.1 };
    case 'set終傷':
      return { ...state, "終傷": action.value }
    case '+爆率':
      return { ...state, "爆率": state["爆率"] + 0.1 };
    case '-爆率':
      return { ...state, "爆率": state["爆率"] - 0.1 };
    case 'set爆率':
      return { ...state, "爆率": action.value }
    case 'set表攻':
      return { ...state, "表攻": action.value }
    case 'set技能倍率':
      return { ...state, "技能倍率": action.value }
    case 'setB攻30藥':
      return { ...state, "B攻": state["B攻"] + 0.3 }
    case '取消B攻30藥':
      return { ...state, "B攻": state["B攻"] - 0.3 }
    case 'set爆傷30藥':
      return { ...state, "爆傷": state["爆傷"] + 0.3 }
    case '取消爆傷30藥':
      return { ...state, "爆傷": state["爆傷"] - 0.3 }
    case 'set攻擊30藥':
      return { ...state, "物/魔攻": state["物/魔攻"] + 0.3 }
    case '取消攻擊30藥':
      return { ...state, "物/魔攻": state["物/魔攻"] - 0.3 }
    case 'set傷害30藥':
      return { ...state, "物/魔傷": state["物/魔傷"] + 0.3 }
    case '取消傷害30藥':
      return { ...state, "物/魔傷": state["物/魔傷"] - 0.3 }
    case 'setB攻50藥':
      return { ...state, "B攻": state["B攻"] + 0.5 }
    case '取消B攻50藥':
      return { ...state, "B攻": state["B攻"] - 0.5 }
    case 'set攻擊50藥':
      return { ...state, "物/魔攻": state["物/魔攻"] + 0.5 }
    case '取消攻擊50藥':
      return { ...state, "物/魔攻": state["物/魔攻"] - 0.5 }
    case 'set湯寶3藥':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.2,
        "物/魔傷": state["物/魔傷"] + 0.2,
        "B攻": state["B攻"] + 0.2
      }
    case '取消湯寶3藥':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.2,
        "物/魔傷": state["物/魔傷"] - 0.2,
        "B攻": state["B攻"] - 0.2
      }
    case 'set爆率30藥':
      return { ...state, "爆率": state["爆率"] + 0.3 }
    case '取消爆率30藥':
      return { ...state, "爆率": state["爆率"] - 0.3 }
    case 'set魔王B攻50藥':
      return { ...state, "B攻": state["B攻"] + 0.5 }
    case '取消魔王B攻50藥':
      return { ...state, "B攻": state["B攻"] - 0.5 }
    case 'set進階祝福':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.35,
        "B攻": state["B攻"] + 0.15
      }
    case '取消進階祝福':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.35,
        "B攻": state["B攻"] - 0.15
      }
    case 'set最終極速':
      return {
        ...state,
        "B攻": state["B攻"] + 0.096
      }
    case '取消最終極速':
      return {
        ...state,
        "B攻": state["B攻"] - 0.096
      }
    case 'set憤怒':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.21,
      }
    case '取消憤怒':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.21,
      }
    case 'set戰鬥命令':
      return {
        ...state,
        "物/魔傷": state["物/魔傷"] + 0.15,
      }
    case '取消戰鬥命令':
      return {
        ...state,
        "物/魔傷": state["物/魔傷"] - 0.15,
      }
    case 'set精神強化(冰雷、火毒)':
      return {
        ...state,
        "物/魔傷": state["物/魔傷"] + 0.1,
      }
    case '取消精神強化(冰雷、火毒)':
      return {
        ...state,
        "物/魔傷": state["物/魔傷"] - 0.1,
      }
    case 'set團隊精神(夜光)':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.216,
      }
    case '取消團隊精神(夜光)':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.216,
      }
    case 'set潛水回來吧':
      return {
        ...state,
        "物/魔傷": state["物/魔傷"] + 0.15,
      }
    case '取消潛水回來吧':
      return {
        ...state,
        "物/魔傷": state["物/魔傷"] - 0.15,
      }
    case 'set灼熱地帶':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.2,
        "物/魔傷": state["物/魔傷"] + 0.05,
      }
    case '取消灼熱地帶':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.2,
        "物/魔傷": state["物/魔傷"] - 0.05,
      }
    case 'set猴子的魔法(海盜)':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.25,
      }
    case '取消猴子的魔法(海盜)':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.25,
      }
    case 'set咆哮(狂豹)':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] + 0.15,
      }
    case '取消咆哮(狂豹)':
      return {
        ...state,
        "物/魔攻": state["物/魔攻"] - 0.15,
      }
    default:
      throw new Error();
  }
}

function 藥reducer(state, action) {
  switch (action.type) {
    case 'setB攻30藥':
      return { ...state, "B攻30藥": true }
    case '取消B攻30藥':
      return { ...state, "B攻30藥": false }
    case 'set爆傷30藥':
      return { ...state, "爆傷30藥": true }
    case '取消爆傷30藥':
      return { ...state, "爆傷30藥": false }
    case 'set攻擊30藥':
      return { ...state, "攻擊30藥": true }
    case '取消攻擊30藥':
      return { ...state, "攻擊30藥": false }
    case 'set傷害30藥':
      return { ...state, "傷害30藥": true }
    case '取消傷害30藥':
      return { ...state, "傷害30藥": false }
    case 'setB攻50藥':
      return { ...state, "B攻50藥": true }
    case '取消B攻50藥':
      return { ...state, "B攻50藥": false }
    case 'set攻擊50藥':
      return { ...state, "攻擊50藥": true }
    case '取消攻擊50藥':
      return { ...state, "攻擊50藥": false }
    case 'set湯寶3藥':
      return { ...state, "湯寶3藥": true }
    case '取消湯寶3藥':
      return { ...state, "湯寶3藥": false }
    case 'set爆率30藥':
      return { ...state, "爆率30藥": true }
    case '取消爆率30藥':
      return { ...state, "爆率30藥": false }
    case 'set魔王B攻50藥':
      return { ...state, "魔王B攻50藥": true }
    case '取消魔王B攻50藥':
      return { ...state, "魔王B攻50藥": false }
    default:
      throw new Error();
  }
}

function 狀態reducer(state, action) {
  switch (action.type) {
    case 'set進階祝福':
      return { ...state, "進階祝福": true }
    case '取消進階祝福':
      return { ...state, "進階祝福": false }
    case 'set最終極速':
      return { ...state, "最終極速": true }
    case '取消最終極速':
      return { ...state, "最終極速": false }
    case 'set憤怒':
      return { ...state, "憤怒": true }
    case '取消憤怒':
      return { ...state, "憤怒": false }
    case 'set戰鬥命令':
      return { ...state, "戰鬥命令": true }
    case '取消戰鬥命令':
      return { ...state, "戰鬥命令": false }
    case 'set精神強化(冰雷、火毒)':
      return { ...state, "精神強化(冰雷、火毒)": true }
    case '取消精神強化(冰雷、火毒)':
      return { ...state, "精神強化(冰雷、火毒)": false }
    case 'set團隊精神(夜光)':
      return { ...state, "團隊精神(夜光)": true }
    case '取消團隊精神(夜光)':
      return { ...state, "團隊精神(夜光)": false }
    case 'set潛水回來吧':
      return { ...state, "潛水回來吧": true }
    case '取消潛水回來吧':
      return { ...state, "潛水回來吧": false }
    case 'set灼熱地帶':
      return { ...state, "灼熱地帶": true }
    case '取消灼熱地帶':
      return { ...state, "灼熱地帶": false }
    case 'set猴子的魔法(海盜)':
      return { ...state, "猴子的魔法(海盜)": true }
    case '取消猴子的魔法(海盜)':
      return { ...state, "猴子的魔法(海盜)": false }
    case 'set咆哮(狂豹)':
      return { ...state, "咆哮(狂豹)": true }
    case '取消咆哮(狂豹)':
      return { ...state, "咆哮(狂豹)": false }
    default:
      throw new Error();
  }
}

function 王reducer(state, action) {
  switch (action.type) {
    case '+減傷':
      return { ...state, "減傷": state["減傷"] + 0.1 };
    case '-減傷':
      return { ...state, "減傷": state["減傷"] - 0.1 };
    case 'set減傷':
      return { ...state, "減傷": state["減傷"] }
    case '+抗爆':
      return { ...state, "抗爆": state["抗爆"] + 0.1 }
    case '-抗爆':
      return { ...state, "抗爆": state["抗爆"] - 0.1 }
    case 'set抗爆':
      return { ...state, "抗爆": state["抗爆"] }
    default:
      throw new Error();
  }
}

function App() {
  const [狀態, dispatch狀態] = useReducer(狀態reducer, {
    '進階祝福': false,
    '最終極速': false,
    '憤怒': false,
    '戰鬥命令': false,
    '精神強化(冰雷、火毒)': false,
    '團隊精神(夜光)': false,
    '潛水回來吧': false,
    '灼熱地帶': false,
    '猴子的魔法(海盜)': false,
    "咆哮(狂豹)": false
  })
  const [藥, dispatch藥] = useReducer(藥reducer, {
    'B攻30藥': false,
    '爆傷30藥': false,
    '傷害30藥': false,
    '攻擊30藥': false,
    '攻擊50藥': false,
    'B攻50藥': false,
    '湯寶3藥': false,
    '爆率30藥': false,
    '魔王B攻50藥': false
  })
  const [s, dispatch] = useReducer(reducer, {
    "表攻": 30000,
    "物/魔攻": 1.1,
    "物/魔傷": 1,
    "B攻": 1,
    "爆傷": 3.4,
    "終傷": 0.5,
    "技能倍率": 1.5,
    "爆率": 1
  });
  const [s王, dispatch王] = useReducer(王reducer, {
    "抗爆": 0.3,
    "減傷": 0.4,
  });

  let 原素質最終爆率;
  let 加10後的最終爆率;
  if (s["爆率"] > 1) {
    if (1 - s王["抗爆"] < 0) {
      原素質最終爆率 = 0
    } else {
      原素質最終爆率 = (1 - s王["抗爆"])
    }
  } else {
    if (s["爆率"] - s王["抗爆"] < 0) {
      原素質最終爆率 = 0
    } else {
      原素質最終爆率 = (s["爆率"] - s王["抗爆"])
    }
  }

  if (s["爆率"] + 0.1 > 1) {
    if (1 - s王["抗爆"] < 0) {
      加10後的最終爆率 = 0
    } else {
      加10後的最終爆率 = (1 - s王["抗爆"])
    }
  } else {
    if (s["爆率"] + 0.1 - s王["抗爆"] < 0) {
      加10後的最終爆率 = 0
    } else {
      加10後的最終爆率 = (s["爆率"] + 0.1 - s王["抗爆"])
    }
  }

  let 原素質玩家普通傷害 = s["表攻"] * s["技能倍率"] * (1 + s["終傷"]) * (1 + s["物/魔傷"]) * (1 + s["物/魔攻"] + s["技能倍率"] * s["B攻"] * 1.1)
  let 原素質最終普通傷害 = 原素質玩家普通傷害 * (1 - s王["減傷"])
  let 原素質最終爆擊傷害 = 原素質最終普通傷害 * (1.2 + s['爆傷'])
  let 原素質最終期望傷害 = 原素質最終爆擊傷害 * 原素質最終爆率 + 原素質最終普通傷害 * (1 - 原素質最終爆率)

  let 爆傷加10爆擊傷害 = 原素質最終普通傷害 * (1.2 + s['爆傷'] + 0.1)
  let 爆傷加10其他不變期望傷害 = 爆傷加10爆擊傷害 * 原素質最終爆率 + 原素質最終普通傷害 * (1 - 原素質最終爆率)

  let 爆率加10其他不變期望傷害 = 原素質最終爆擊傷害 * 加10後的最終爆率 + 原素質最終普通傷害 * (1 - 加10後的最終爆率)

  let 加10之後的狀態 = {
    "物/魔攻":
      ((1 + s["物/魔攻"] + 0.1 + s["技能倍率"] * s["B攻"] * 1.1) - (1 + s["物/魔攻"] + s["技能倍率"] * s["B攻"] * 1.1))
      / (1 + s["物/魔攻"] + s["技能倍率"] * s["B攻"]) * 原素質最終期望傷害,
    "物/魔傷":
      ((1 + s["物/魔傷"] + 0.1) - (1 + s["物/魔傷"])) / ((1 + s["物/魔傷"])) * 原素質最終期望傷害,
    "B攻":
      ((1 + s["物/魔攻"] + s["技能倍率"] * (s["B攻"] + 0.1) * 1.1) - (1 + s["物/魔攻"] + s["技能倍率"] * s["B攻"] * 1.1))
      / ((1 + s["物/魔攻"] + s["技能倍率"] * s["B攻"])) * 原素質最終期望傷害,
    "爆傷": 爆傷加10其他不變期望傷害 - 原素質最終期望傷害,
    "終傷": ((1 + s["終傷"] + 0.1) - (1 + s["終傷"])) / ((1 + s["終傷"])) * 原素質最終期望傷害,
    "爆率": 爆率加10其他不變期望傷害 - 原素質最終期望傷害
  }
  return <div style={{ maxWidth: '600px' }}>
    <h3>藥</h3>
    <div className='buffAndPotionLayout'>
      {Object.keys(藥).map((藥名) => {
        return <div key={藥名}>
          <input type="checkbox" id={藥名} value={藥[藥名]} onChange={() => {
            if (藥[藥名]) { //取消
              dispatch({ type: `取消${藥名}` })
              dispatch藥({ type: `取消${藥名}` })
            } else { //打勾
              dispatch({ type: `set${藥名}` })
              dispatch藥({ type: `set${藥名}` })
            }
          }} />
          <label htmlFor={藥名}>{藥名}</label>
        </div>
      })}
    </div>
    <h3>buff</h3>
    <div className='buffAndPotionLayout'>
      {Object.keys(狀態).map((狀態名) => {
        return <div key={狀態名} >
          <input type="checkbox" id={狀態名} value={狀態[狀態名]} onChange={() => {
            if (狀態[狀態名]) { //取消
              dispatch({ type: `取消${狀態名}` })
              dispatch狀態({ type: `取消${狀態名}` })
            } else { //打勾
              dispatch({ type: `set${狀態名}` })
              dispatch狀態({ type: `set${狀態名}` })
            }
          }} />
          <label htmlFor={狀態名}>{狀態名}</label>
        </div>
      })}
    </div>
    <div id="stateLayout">
      <div className='playerStateLayout'>
        <h3>玩家狀態</h3>
        {
          Object.keys(s).map((key) => {
            return <div key={key}>
              <div>
                {key !== "表攻" && key !== "技能倍率" ? <button onClick={() => {
                  dispatch({ type: `+${key}` })
                }}>
                  +
                </button> : <></>}
                {key}
                {key !== "表攻" && key !== "技能倍率" ? <button onClick={() => {
                  dispatch({ type: `-${key}` })
                }}>
                  -
                </button> : <></>}
              </div>

              <Input style={{ width: '100px' }} value={s[key].toFixed(2)} onChange={(e) => {
                dispatch({ type: `set${key}`, value: Number(e.target.value) })
              }} />
              <br />
              {key !== "表攻" && key !== "技能倍率" ?
                <p style={{ fontSize: "0.5em", marginTop: '0' }}>+10% 可 +{key !== "表攻" && key !== "技能倍率" ? 加10之後的狀態[key].toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : ""} 期望傷害</p>
                : <></>}

            </div>
          })
        }
      </div>
      <div className='bossStateLayout' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3>王的狀態</h3>
          {
            Object.keys(s王).map((key) => {
              return <div key={key}>
                <div>
                  {key !== "表攻" && key !== "技能倍率" ? <button onClick={() => {
                    dispatch王({ type: `+${key}` })
                  }}>
                    +
                  </button> : <></>}
                  {key}
                  {key !== "表攻" && key !== "技能倍率" ? <button onClick={() => {
                    dispatch王({ type: `-${key}` })
                  }}>
                    -
                  </button> : <></>}
                </div>

                <Input style={{ width: '100px' }} value={s王[key].toFixed(2)} onChange={(e) => {
                  dispatch王({ type: `set${key}`, value: Number(e.target.value) })
                }} />
              </div>
            })
          }
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className={原素質最終爆擊傷害.toFixed() > 10000000 ? 'blockByCeiling damageNumber' : "damageNumber"}>爆擊傷害: {原素質最終爆擊傷害.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h3>
          <h3 className={原素質最終普通傷害.toFixed() > 10000000 ? 'blockByCeiling damageNumber' : "damageNumber"}>普通傷害: {原素質最終普通傷害.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h3>
          <h3 className='damageNumber'>爆率: {原素質最終爆率.toFixed(2)}</h3>
          <h3 className={原素質最終期望傷害.toFixed() > 10000000 ? 'blockByCeiling damageNumber' : "damageNumber"}>期望傷害: {原素質最終期望傷害.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h3>
          <span className='damageNumber' style={{ display: 'inline-block' }}>(已套用抗爆與減傷)</span>
        </div>
      </div>
    </div>
  </div >

}

export default App;
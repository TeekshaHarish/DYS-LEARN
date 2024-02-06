import React from 'react'
import Match2 from './Match2'
import './match-main.css'
import {level1} from '../seeds/level_1'
import { takeRandomElements } from '../utils/functions'
const items=takeRandomElements(level1,7);
const MatchMain = () => {
  return (
    <div>
      <div className="match-main">
        <div className="left">
        <ul>
            {
                
                items.map(item=>{
                    return(
                        <li className='item-left'>
                           
                               {`${item.pair.word1}`}
                              
                               </li>
                        
                    )}
                )
                }
                </ul>
            
        </div>
        <div className="right">
<Match2 wordArray={items}/>
        </div>
      </div>
    </div>
  )
}

export default MatchMain

import React ,{Component} from 'react';
import {ThemeContext,UserContext} from '../Context'
export default class ConsumerPage extends Component {

    render() {
     return <div className="border">
         <ThemeContext.Consumer>
             {themeContext => (
                 <>
                  <h1 className={themeContext.themeColor}>yanze</h1>
                  <UserContext.Consumer>
                      {
                          userContext => (
                              <h2 className='user'>{userContext.name}</h2>
                          )
                      }
                  </UserContext.Consumer>
                 </>
             )}
         </ThemeContext.Consumer>
     </div>
    }
}
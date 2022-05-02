import React,{Component} from 'react'
import {ThemeContext,UserContext} from '../Context';
import ContextTypePage from '../Component/contextTypePage';
import UserContextPage from '../Component/UsecontextPage'
import ConsumerPage from '../Component/ConsumerPage'
import '../Page/index.css'
export default class Context extends Component {
    constructor(peops) {
        super(peops);
        this.state = {
          theme:{
              themeColor: 'red'
          },
          user:{
              name:"xiaoming"
          }
        }
    }
    changeColor = () => {
        this.setState({
            theme:{
                themeColor:"green"
            }
        })
    }
    render() {
        const {theme,user} = this.state; 
        return (
          <div>
              <h3>ContextPage</h3>
              <button onClick={this.changeColor}>改变颜色</button>
              <ThemeContext.Provider value={theme}>
                <ContextTypePage></ContextTypePage>
                <UserContext.Provider value={user}>
                  <UserContextPage></UserContextPage>
                  <ConsumerPage></ConsumerPage>
                </UserContext.Provider>
              </ThemeContext.Provider>
          </div>
        )
    }
}
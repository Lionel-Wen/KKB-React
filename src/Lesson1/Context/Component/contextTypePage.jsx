import React from 'react';
import { ThemeContext } from '../Context' 
export default class contextTypePage extends React.Component {
  static contextType = ThemeContext;
  render() {
      const {themeColor} = this.context;
      return (
          <div className="border">
              <h3 className={themeColor}>ContextTypePage</h3>
          </div>
      )
  }
}
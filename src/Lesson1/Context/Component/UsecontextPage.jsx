// 碰到函数式变成的时候使用hooks
import React, {useContext,useEffect} from 'react';
import { ThemeContext,UserContext } from '../Context';
import SubComponent from './componentChild/subComponent';
export default function useContextPage(props){
  const themeContext = useContext(ThemeContext);
  const {themeColor} = themeContext;
  const userContext = useContext(UserContext);
  return <div className='border'>
      <h3>useContext</h3>
      <h3 className={themeColor}>sssss</h3>
      <h2>{userContext.name}</h2>
      <SubComponent></SubComponent>
  </div>
}
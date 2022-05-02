import React, {useContext,useEffect} from 'react';
import { ThemeContext,UserContext } from '../../Context';
export default function useSubComponent(props){
  const themeContext = useContext(ThemeContext);
  const {themeColor} = themeContext;
  const userContext = useContext(UserContext);
  return <div className='border'>
      <h3>subuseContext</h3>
      <h3 className={themeColor}>wwwwww</h3>
      <h2>{userContext.name}</h2>
  </div>
}
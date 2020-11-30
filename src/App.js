import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Hookcounter from './components/Hookcounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookcounterThree from './components/HookcounterThree';
import HookcounterFour from './components/HookcounterFour';
import HookcounterOne from './components/HookcounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


 class App extends Component {
  render() {
    return (
      <div className='App'>
       <UserContext.Provider value= {'Konj'}> 
       <ChannelContext.Provider value= {'Magarac'}>
      <ComponentC/>
      </ChannelContext.Provider>
      </UserContext.Provider>
       {/*
        <DataFetching/>
        <IntervalHookCounter/>
        <MouseContainer/>
        <HookMouse/>
        <HookcounterOne/>
         <HookcounterFour/>
        <HookcounterThree/>
        <HookCounterTwo/>
        <Hookcounter/>
        <PostForm/>
         <PostList/> */}
      </div>
    );
  }
}

export default App


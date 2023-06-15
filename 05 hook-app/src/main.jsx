import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterAppWithCustomHook } from './01-useState/CounterAppWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayaoutEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { Memorize } from './06-memos/Memorize'
import { MemorizeTwo } from './06-memos/MemorizeTwo'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
import './index.css'
import './08-reducer/intro-reducer'
import { TodoApp } from './08-reducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/**<HooksApp /> */}
    {/**<CounterApp/> */}
    {/**<CounterAppWithCustomHook/> */}
    {/**<SimpleForm/> */}
    {/**<SimpleFormCustomHook/> */}
    {/**<MultipleCustomHooks/> */}
    {/**<FocusScreen/> */}
    {/**<Layout/> */}
    {/**<Memorize/> */}
    {/**<MemorizeTwo/> */}
    {/**<CallbackHook/> */}
    {/**<Padre/> */}
    {/**<TodoApp/> */}
    <MainApp />
  </BrowserRouter >
)

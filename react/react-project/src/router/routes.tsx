import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from "react-router-dom";
import App from '../App'
import Home from '../pages/home'
import Counter from '../components/state/counter'
import WelcomePage from '../components/props/welcomePage';
import RefExample from '../components/refs/refExample';
import ControlledForm from '../components/refs/controlledForm';
import UncontrolledForm from '../components/refs/uncontrolledComponent';
import CallBack from '../components/props/callBack';
import Parent from '../components/forwardRef/Parent';
import Counter1 from '../components/useReducer/Counter1'
import TodoApp from '../components/useReducer2/TodoList'; 
import ThemePage from '../components/usecontext/ThemePage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> }, 
            { path: 'counter', element: <Counter />},
            { path: 'welcome', element: 
            <>
                <WelcomePage /> 
                <CallBack />
            </>
            },
            { path: 'ref', element: 
            <>
            < RefExample /> 
            <ControlledForm /> 
            <UncontrolledForm />
            </>},
            { path: 'forward', element: <Parent />},
            { path: 'useReducer', element: <Counter1 />},
            { path: 'useReducer2', element: <TodoApp />},
            { path: "theme", element: <ThemePage /> }
        ],
    },
]

export const router = createBrowserRouter(routes)
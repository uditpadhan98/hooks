import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='items'>
      <div>
        <h1>Use of Hooks for Practice</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/useState"><button>Use State</button></Link>
          </li>
          <li>
            <Link to="/useEffect"><button>Use Effect</button></Link>
          </li>
          <li>
            <Link to="/useEffect2"><button>Use Effect 2</button></Link>
          </li>
          <li>
            <Link to="/useRef"><button>Use Ref</button></Link>
          </li>
          <li>
            <Link to="/useMemo"><button>Use Memo & callback</button></Link>
          </li>
          <li>
            <Link to="/useContext"><button>Use Context</button></Link>
          </li>
          <li>
            <Link to="/useReducer"><button>Use Reducer</button></Link>
          </li>
          <li>
            <Link to="/useReducer2"><button>Use Reducer 2</button></Link>
          </li>
          <Link to="/CustomHook"><button>Custom Hook</button></Link>
        </ul>
      </nav>
    </div>
  )
}

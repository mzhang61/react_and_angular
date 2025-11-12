import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ marginTop: 30 }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>  
        <li>
          <Link
            to="/counter"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
          >
            Click me! React state
          </Link>
        </li>
        <li>
          <Link
            to="/welcome"
            style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
          >
            Click me - Props example
          </Link>
        </li>
        <li>
            <Link
                to="/ref"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
            >
                Click me - useRef Example
            </Link>
        </li>
        <li>
          <Link
            to="forward"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
          >
            Click me - Forward ref Example
          </Link>
        </li>
        <li>
          <Link
            to="useReducer"
            target="_blank"
            rel="noopener noreferrer"
             style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
          >
            Click me - useRducer Example
          </Link>
        </li>
        <li>
          <Link
            to="useReducer2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
          >
            Click me - useReducer2 Example
          </Link>
        </li>
        <li>
          <Link
            to="/theme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none", cursor: "pointer" }}
          >
            Click me - Context Example
          </Link>
        </li>
      </ul>
    </div>
  )
}
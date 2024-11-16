
import React, { useState } from 'react';
import './contador.css';


function Contador() {
    const [count, setCount] = useState(0);
     

    return (
        <div style={{
            fontSize: '50px',
            fontFamily:'fantasy',
            color: 'white',
            textAlign: 'center'
        }}>
            <p style={{
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center'
            }}>Contador 
            <h1 className='piscando' style={{
                    color:'#ffd700'
            }}>{count === 666 ? "Você é from hell 👹" : count}</h1> 
            </p>
            
            <button onClick={() => setCount(count - 1)}
                style={{
                    backgroundColor: 'red',
                  color: 'white',
                  padding: '10px 20px',
                  fontFamily:'fantasy',
                  borderRadius:'3px'
                }}>
                 -
            </button>
            <button onClick={() => setCount(count + 1)}
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px 20px',
                    fontFamily:'fantasy',
                    borderRadius:'3px',
                    
                }}>
                +
            </button>
            <button onClick={() => setCount(0)}
                style={{
                    backgroundColor: 'gray',
                    color: 'white',
                    padding: '10px 20px',
                    fontFamily: 'fantasy',
                    borderRadius: '3px',
                    margin: '5px'
                }}>
                Zerar
            </button>
        </div>
    );
}

export default Contador;
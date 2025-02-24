// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="models">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      {/* <h1>Enter the Prompt</h1> */}
      <div className="card">
        <TextField 
          id="outlined-basic"
          fullWidth
          sx={{ 
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'black', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Border color when focused
              },
            },
          }} 
          variant="outlined" 
        />
        <Button 
          variant="contained" 
          sx={{ 
            marginTop: '20px'
          }}
        >
          Submit
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

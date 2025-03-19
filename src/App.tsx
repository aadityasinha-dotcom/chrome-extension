import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';

function App() {

  const { isPageLoading } = useSelector((state: RootState) => state.app);
  const [selectedAI, setSelectedAI] = useState<string | null>(null);
  const aiButtons = ['ChatGPT', 'DeepSeek', 'Gemini'];

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {isPageLoading}
      <div className="models">
        {/* {aiButtons.map((ai) => ( */}
        {/*   <Button */}
        {/*     key={ai} */}
        {/*     className={`aiBtn ${selectedAI === ai ? 'activeAiBtn' : ''}`} */}
        {/*     onClick={() => setSelectedAI(ai)} */}
        {/*   > */}
        {/*     {ai} */}
        {/*   </Button> */}
        {/* ))} */}
      </div>
      <h2>Enter the Prompt</h2>
      <div className="card">
        <TextField 
          id="outlined-basic"
          fullWidth
          sx={{ 
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
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
          className='submitBtn'
        >
          Submit
        </Button>
      </div>
    </>
  )
}

export default App

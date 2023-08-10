import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';  
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Auth = props => {
    const [isSingup,setIsSingup] = useState(false);
    const [inpust , setInpust] = useState(
        {
            name:" ",
            email:" ",
            password:" ",
        }
    );
    const handleChange = (e) =>{
        setInpust((prevState) =>({
            ...prevState,[e.target.name]:e.target.value
        }))

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inpust);

    }

    const resetState = () =>{
        setIsSingup(!isSingup);
        setInpust({name:" ", email:" ",password:" "})
    }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center" margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{":hover":{
                boxShadow:'10px 10px 20px #ccc'
            }}}>
                <Typography variant='h2' padding={3} textAlign="center">{isSingup ? "Singup":"Login"}</Typography>
                { isSingup && <TextField required onChange={handleChange} value={inpust.name} name='name' margin='normal' type='text' variant="outlined" placeholder="Name"/>}
                <TextField onChange={handleChange} value={inpust.email} name='email' margin='normal' type='email' variant="outlined"  placeholder="Email"/>
                <TextField onChange={handleChange} value={inpust.password} name='password' margin='normal' type='PassWord' variant="outlined"  placeholder="Password"/>
                <Button endIcon={isSingup ? <HowToRegOutlinedIcon/>: <LoginOutlinedIcon/> } sx={{marginTop:3,borderRadius:3}} variant='contained' color='warning'>
                      {isSingup ? "SINGUP": "LOGIN"}
 
                       </Button>
                <Button type='submit' onClick={resetState} sx={{marginTop:3,borderRadius:3}}>

                     CHANGE TO {isSingup ? "LOGIN" : "SINGUP"}
                    
                       </Button>



            </Box>
        </form>
    </div>
  )
}


export default Auth;
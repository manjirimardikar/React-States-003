import './Passgenrator.css'
import {numbers,upperCaseLetters,lowerCaseLetters,specialCharacters} from './Charcterlist'
import {MdFileCopy} from 'react-icons/md'

function Passgenrator(props){

    const generatepassword=(e)=>{
        let charlist=""
        if(props.Uppercase){
            charlist=charlist+upperCaseLetters
        }
        if(props.Lowercase){
            charlist=charlist+lowerCaseLetters
        }
        if(props.Number){
            charlist=charlist+numbers
        }
        if(props.Symbols){
            charlist=charlist+specialCharacters
        }
        props.setPassword(createpass(charlist))
    }

    const createpass=(charlist)=>{
 let pass=""
 for(let i=0;i<props.Passlength;i++){
    const randomvalue= Math.round(Math.random() * charlist.length)
     pass =pass+charlist.charAt(randomvalue)

 }
 return pass

    }
    return(
        <div className="passwordcontainer">
            <div className="heading">
                <h1>Password Generator</h1>
            </div>

            <div className="inputcontainer">
                <input type="text" value={props.Password} />               
                <button onClick={()=>{
                    if(props.Password.length>0){
                        navigator.clipboard.writeText(props.Password)
                        props.setCopied(true)
                        setInterval(()=>{
                            props.setCopied(false)
                        },3000)

                       
                    }
                    
                }}> 
                {props.Copied ? "Copied" : <MdFileCopy />}
                </button>
            </div>

            <div className="lengthcontainer">
                <label htmlFor="passlength"> Select password length</label>
                <input  defaultValue={props.Passlength}type="number"  max="15" min="8"  onChange={(e)=>{
                  props.setPasslength(e.target.value)
                }}/>

            </div>

            <div className="checkboxcontainer">
                <input checked={props.Uppercase} type="checkbox" onChange={(e)=>{
                  props.setUppercase(e.target.checked)
                }}/>
                <label htmlFor="uppercase">Include Uppercase letters</label>
            </div>
            <div className="checkboxcontainer">
                <input checked={props.Lowercase} type="checkbox"onChange={(e)=>{
                   props.setLowercase(e.target.checked)
                }} />
                <label htmlFor="uppercase">Include Lowercase letters</label>
            </div>  
             <div className="checkboxcontainer">
                <input checked={props.Number} type="checkbox" onChange={(e)=>{
                   props.setNumber(e.target.checked)
                }} />
                <label htmlFor="uppercase">Include numbers </label>
            </div>  
             <div className="checkboxcontainer">
                <input checked={props.Symbols} type="checkbox"  onChange={(e)=>{
                   props.setSymbols(e.target.checked)
                }}/>
                <label htmlFor="uppercase">Include symbols</label>
            </div>

            <div className="generatebtn">
            <button onClick={generatepassword}>Generate Password</button>
            </div>

            

        </div>
      
    )
}

export default Passgenrator
import React, { Component } from 'react';
import { render } from 'react-dom';

class Destination extends Component{
    render(){
        return(
            <div>
                <form>
                    <label>
                        From :
                        <input type="text" name="Enter origin station..." />
                        </label>
                       
                </form>
                <form>
                    <label>
                        To :
                        <input type="text" name="Enter destination station..." />
                    </label>
                        
                </form>

            </div>
            
        );
    }
    
}

export default Destination;
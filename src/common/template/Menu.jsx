import React from 'react'
import MenuItem from './MenuItem'
import MenuTree from './MenuTree'


export default  props => {
    //let match = useRouteMatch()
   // console.log(`URL: ${match.path}`)
    return (
    
    
        <ul className='sidebar-menu'>
            <MenuItem path={`/`} label='Dashboard' icon='dashboard' />
            <MenuTree label='Cadastro' icon='edit'>
                <MenuItem path={`/billingCycles`} 
                    label='Ciclos de Pagamentos' icon='usd'/> 
            </MenuTree>
            
        </ul>        
    
)}
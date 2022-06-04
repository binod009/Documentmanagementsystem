import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
  return (
<div className='topbar'>
 <div className='topbarwrapper'>
    {/* <div className='topleft'>
    <span className="logo">Document management System</span>
    </div> */}

    <div className="topright">
        <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
         </div>
         <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
         </div>
         <div className="topbarIconContainer">
            <Settings/>
         </div>
       <img src="https://1.bp.blogspot.com/-siEMkijJ33w/X_as1EqQ7JI/AAAAAAAAETk/pmQ0eR31h_oeT8ONRhOIuBxlHPha93oxgCEwYBhgLKtQDAL1OcqxobF1wN1T7ePZR8syDu10paifExJiElT8TOFEyBU5AdVqZmJi8SyXHMJNoIvkZy1Bk5Ya8TYAVd07EwuNxUJBic7eJ7WBAAdwNtMEYcVp4qnNk-_ihpLoZupuNCG3Txyrj6K3VW2C4UB_AvxMk_4Z2rKZK9faQkco9ulNQJBksnqJvI5z4IPlrz-c8x0kHgfl6qcl0-0jv14qC64sUh8yAY9n37Ago4I0QsU2AUMhGUWy2p4kHUDGyM8b0ZFssEtXgD9Y_HUlMp3IiW6vTS1cDYTRWTWSdfYfXQ2R4daG74fhrTSSo9SPdscSBx83DBWZn8MMAA3gK7KwXiu4gODyZhfXRZBZN7VErNSfkfNd9bxSLH9FF9q5I_o9OrfVjQX0O0OBiA0IMe7mQn1V1tRhx2xjzAUAUx3MIuryQZO-8r-zsewmGP9G47GL3AOGH5ddK-op8ExrNkuae_MeKM_QaCd6r0Y_dwiTEkNauFdq6jiEkWbcTtuca1cNoVZ7QQRmEfvwF_iCWixbFAOvcoNHZVrkv2MHclH3zwvH68tdI3-sP8nbrqhhiYak_uqerMPFYl3h9_8BF6NFpjX7lQjy2ZYkuZIP20TAV5MuaPSH7MMDe2v8F/s1280/awesome%2Bbeautiful%2Bgirl%2Bimage%2Bfor%2Bprofile%2Bpicture.jpg" alt="profilepic" className="topAvatar" />
   
    </div>


 </div>
</div>
  );
}

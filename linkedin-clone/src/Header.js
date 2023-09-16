import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/SupervisorAccount';
import "./Header.css";
import { auth } from './firebase';
import { logout } from './features/counter/userSlice';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
function Header() {

    // const dispatch = useDispatch();

    // const logoutOfApp = () => {
    //     dispatch(logout());
    //     auth.signOut();
    // };

      const dispatch=useDispatch();
      const logoutOfApp=()=>{
        dispatch(logout());
        auth.signOut();
      };

    return (

        <div className='header'>


            <div className='header-left'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEUCdLP///8AbrCFrdCPtNMAcbKaudfb5/EAZq1BiL3G2+rF2OgAbK8Aaa7k7vXe6vO0zOEjerZalMOrx94AYart9fmlwdv2+vy80eRQkcJ5p85roMo1g7rO3+3T5O9VjsA7f7lDMzMiAAADEUlEQVRoge3b25KjIBAAUMAQNQGvUTPRXP7/K9fLZJPQrUlN0TK1Sz/Mi9ScgAoNAuNjJMftZsXYHpPJZcOftJBKiRVDKVmkd74Ugq0eQpQTX0br40NE5cBflBudMXXp+Vi64mXMWejgvt9DhCxz1vZ962ds65LfssBl4wee97znjZBCCdoOeZ4Xin2dgrZTlL3SHC8P7XlKR6pa0v2AGV7dLvwRgV6XV9eKP0dJVX+Ul92rznlNlA+h/CHlZhQ0byfGqwDoPKFpfpSHlee8Jak+wssc0fmepPoIL04Yn1LoGK+2GF/dVuJ1ifHNjaL3/321Fy3GhxQ63u1gPM1sAH3vdwhPMxPDePkFdaJpKNr40RHwHU3Wgw+40ux2qUb8GT6/vOpU6w8z2Y7UTy//JV452+lDsTrsk44m2ReaLtudz3Sllrc47nJFOQ1YzvP7ILTf8fTheQL+04fGOj+sDUuW57kcF25/xEcgnsto8+LfXknqqKh333OUvsuoWx0t/gJ8lnPeGXE+PQrJ0rya5dOFKC4bc6w6tksdB87DAfdp8Q+MRzwZeXXLkDyhv9rOd5s/4UOU1ydzYvhogXzOt8ZHaH58L9DN3ABLvDycF/T+MZxJVyzxGuZHr1FR8nLzRu/niGjOYIVPr2/1mSmyFb7CZuRmJFjzW+E/ixOSq6/Ih2755gqbf0Web2D11+TTg1O+yWn5sC7irvsK9mDYnaIAN98iHxZKiyE3VzrGRwAo2eNr/ZSRROjQD5eGrfHGV3CN1X8HZqq2+Mp4qmWMFErAo2+LP5n/RO1hoYaKr8BdVdjaKFXjI/sfsJVhqie/hd25SmAxkHLa4Rtk2Q1bniPiE9idMoW8+iDhtMOnyFCukMybiA+RlS9sZRrcIzv8+b/m9573vOc973nPe97znve85z3vec9b+YppeYY77pp4jeWr+FeyD4r9m9sHPO95z/9u3vGRMMcH4lKXjZ8yqpMHn+gFZzx1dhZTpMNB2IxsK+hy6Gw6BpxJF8eA5fC5ZdwQnrg4BD1+6vrej+7qCPgfqkxAf1bZ+3YAAAAASUVORK5CYII=' alt='' />
            </div>

            <div className='header-search'>

                <SearchIcon />
                <input type='text' />

            </div>


            <div className='header-right'>
                <HeaderOption Icon={HomeIcon} title="home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />

            </div>


        </div>
    )
}

export default Header;

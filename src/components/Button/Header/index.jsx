import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles"

export function Header(){
    return(
        <Container>
          <Profile>
            <img src="https://github.com/Anselmo2005.png"
                alt= "Foto do usuário"
            />
            
            <div>
                <span>Bem-vindo</span>
                <strong>Anselmo Nascimento</strong>
            </div>
            </Profile>  

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>


        </Container>
    );
}
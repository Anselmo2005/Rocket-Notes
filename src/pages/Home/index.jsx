import {Container, Brand, Menu, Search, Content, Newnote} from './style';
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Button/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home(){
    return(
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJs"/></li>
  
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>
            
            <Newnote>
                <FiPlus></FiPlus>
                Criar Notas

            </Newnote>

        </Container>



    )
}
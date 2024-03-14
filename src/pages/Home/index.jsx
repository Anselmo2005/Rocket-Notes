import { Container, Brand, Menu, Search, Content, Newnote } from './style';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Header } from '../../components/Button/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Button/Section';
import { Note } from '../../components/Note';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="Todos" /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="NodeJs" /></li>

            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </Search>

            <Content>
                <Section title="Minhas notas"></Section>
                <Note data={{title: 'React',
                tags: [
                    {id: '1', name: 'React'},
                    {id: '2', name: 'RocketSeat'}
                ]
            }}/>
            </Content>
 
            <Newnote>
                <FiPlus></FiPlus>
                Criar Notas

            </Newnote>

        </Container>



    )
}
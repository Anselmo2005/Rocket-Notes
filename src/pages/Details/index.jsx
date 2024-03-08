import { Container, Links } from './styles';
import { Header } from '../../components/Button/Header';
import { Button } from '../../components/button';
import { Section } from '../../components/Button/Section';
import { Tag } from '../../components/Tag';

export function Details(){
  
  return(
    <Container>
      <Header></Header>
      <Section title= "Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
          <li> <a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      
      <Section title= "Marcadores">

        <Tag title="express"></Tag>
        <Tag title="nodejs"></Tag>

      </Section>



      <Button title="Voltar"></Button>
    </Container>
  )
}
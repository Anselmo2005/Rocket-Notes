import { Container, Links, Content } from './styles';
import { Header } from '../../components/Button/Header';
import { Button } from '../../components/button';
import { Section } from '../../components/Button/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  
  return(
    <Container>
      <Header></Header>

        <main>
          <Content>

      <ButtonText title="Excluir nota"></ButtonText>

          <h1>Introdução ao react</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio neque dolorum 
            sit libero, mollitia, iusto quam natus doloribus dolore itaque odit aspernatur ullam
             inventore optio a corporis, iure aut!  
          </p>

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
      </Content>

</main>
    </Container>
  )
}
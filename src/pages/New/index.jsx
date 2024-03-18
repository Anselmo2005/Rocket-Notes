import { Container, Form} from "./style";
import { Header } from "../../components/Button/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Button/Section";

export function New(){

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                        </header>

                    <Input placeholder="Título"></Input>
                    <Textarea placeholder="Observações"></Textarea>
                    <Section title="Links úteis">
                    <NoteItem value="https://rocketseat.com.br"></NoteItem>
                    <NoteItem isNew placeholder="Novo link"></NoteItem>
                    </Section>
                    </Form>
                </main>
        </Container>

    );
}
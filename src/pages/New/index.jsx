import { Container, Form} from "./style";
import { Header } from "../../components/Button/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Button/Section";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

export function New(){

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                        </header>

                    <Input placeholder="Título"></Input>
                    <Textarea placeholder="Observações"></Textarea>
                    <Section title="Links úteis">
                    <NoteItem value="https://rocketseat.com.br"></NoteItem>
                    <NoteItem isNew placeholder="Novo link"></NoteItem>
                    </Section>

                    <Section title="Marcadores">
                    <div className="tags">
                    <NoteItem value="react"></NoteItem>
                    <NoteItem isNew placeholder="Nova tag"></NoteItem>
                    </div>
                    </Section>
                    <Button title="Salvar"></Button>
                    </Form>
                </main>
        </Container>

    );
}
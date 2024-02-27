
import React, {useState} from "react";
import {Container, Row, Form, Button, InputGroup} from "react-bootstrap";
import { searchAnime } from "../api";

const anime = await searchAnime({keyword});

function HomePage() {
    const [keyword, setKeyword] = useState("");
    const [anime, setAnime] = useState([]);

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value);
    };

    const onSearchAnime = async (event) => {
        event.preventDefault();
        const anime = await searchAnime({keyword});
        setAnime(anime);
    };

    return (
        <Container fluid>
            <Row noGutters>
                <Form className="w-100 mb-5" onSubmit={onSearchAnime}>
                    <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="e.g. Cowboy Bebop, Yu Yu Hakusho, etc"
                      onChange={onChangeKeyword}
                      value={keyword}/>
                      <InputGroup.Prepend>
                      <Button variant="outline-primary"
                      disabled={!keyword}
                      type="submit"
                      >
                        Search Anime
                      </Button>
                      
                      </InputGroup.Prepend>
                    </InputGroup>
                </Form>
            </Row>
        </Container>
    );
}

export default HomePage;
import { Button } from "./components/ui/Button";
import { CardContainer, CardLeftSide, CardRightSide } from "./components/ui/Card";
import { Container } from "./components/ui/Container";
import { SpacedHeader } from "./components/ui/SpacedHeader";

function App() {
    return (
        <Container>
            <CardContainer>
                <>
                    <CardLeftSide>
                        <img src="/assets/chanel_perfume.png" alt="plants and perfume" />
                    </CardLeftSide>
                    <CardRightSide>
                        <>
                            <div>
                                <SpacedHeader text="perfume" />
                                <h2>
                                    Gabrielle
                                    <br /> Essence Eau
                                    <br /> De Parfum
                                </h2>
                                <p>
                                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                                    Perfumer-Creator for the House of Chanel.
                                </p>

                                <div className="price-container">
                                    <h3>&euro;149,99</h3>
                                    <span>&euro;469,99</span>
                                </div>
                            </div>

                            <Button disabled text="Add to cart"></Button>
                        </>
                    </CardRightSide>
                </>
            </CardContainer>
        </Container>
    );
}

export default App;

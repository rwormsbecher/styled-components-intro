import "./stylesheets/styles.scss";

function App() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-left-section">
                    <img src="/assets/chanel_perfume.png" alt="plants and perfume" />
                </div>
                <div className="card-right-section">
                    <div>
                        <h1>Perfume</h1>
                        <h2>
                            Gabrielle
                            <br /> Essence Eau
                            <br /> De Parfum
                        </h2>
                        <p>
                            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
                            for the House of Chanel.
                        </p>

                        <div className="price-container">
                            <h3>&euro;149,99</h3>
                            <span>&euro;469,99</span>
                        </div>
                    </div>

                    <div className="button-container">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

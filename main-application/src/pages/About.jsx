
import countryFacts from "../api/countryData.json"
const About = () => {
    return (
        <>
            <section className="section-about container">
                <h2 className="container-title">
                    Here are the Interesting Facts
                    <br />
                    we’re proud of
                </h2>

                <div className="gradient-cards">
                    {
                        countryFacts.map((currCountry) => {
                            const {
                                id,
                                country,
                                capital,
                                population,
                                interestingFact } = currCountry;

                            return (

                                <div className="card" key={id} >
                                    <div className="container-card bg-blue-box">
                                        <p className="card-title">{country}</p>
                                        <p>
                                            <span className="card-description">Capital: </span>
                                            {capital}
                                        </p>
                                        <p>
                                            <span className="card-description">Population: </span>
                                            {population}
                                        </p>
                                        <p>
                                            <span className="card-description">Intersting Facts: </span>
                                            {interestingFact}
                                        </p>
                                    </div>
                                </div>
                            )


                        })
                    }


                </div>
            </section >
        </>
    )
}

export default About
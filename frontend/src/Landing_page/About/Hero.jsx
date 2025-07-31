import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Intro Section */}
      <section className="my-5 py-5 text-center">
        <h2 className="fs-4">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h2>
      </section>

      {/* Info Section */}
      <section className="my-5 border-top p-5">
        <div className="row mx-5 fs-5">
          {/* Left Column */}
          <article className="col-12 col-md-6 mb-4 mb-md-0">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology.
            </p>
            <p>
              We named the company Zerodha, a combination of Zero and "Rodha",
              the Sanskrit word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </article>

          {/* Right Column */}
          <article className="col-12 col-md-6">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us, or learn more about our business and product
              philosophies.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Hero;

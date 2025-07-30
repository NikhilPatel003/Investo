import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-5">
          <h2 className="mb-5">Trust with confidence</h2>
          <div className="col-11 mb-4">
            <h3>Customer-first always</h3>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="col-11 mb-4">
            <h3>No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="col-11 mb-4">
            <h3>The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="col-11 mb-4">
            <h3>Do better with money</h3>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-7 text-center">
          <div className="m-auto text-center">
            <img
              src="/media/Images/ecosystem.png"
              alt="ecosytem"
              style={{ width: "80%" }}
            />
          </div>
          <p>
            <a href="" className="text-decoration-none mx-5">
              Explore our products <ArrowForwardIcon />
            </a>
            <a href="" className="text-decoration-none">
              Try Kite demo <ArrowForwardIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

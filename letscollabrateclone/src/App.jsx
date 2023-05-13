import React from "react";
import "./App.css";
import CollaborateComp from "./components/CollaborateComp";
import Button from "./components/Button";
import { BsArrowRight } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "AI + RPA is what we do",
    desc: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
    url: "https://www.xivtech.io./rp2.jpg",
    link: "AI + RPA Automation",
  },
  {
    id: 2,
    title: "Make Bolder Choices",
    desc: "Digital focused strategies to realize market-changing ideas",
    url: "https://www.xivtech.io./p1.png",
    link: "Build Better Apps",
  },
  {
    id: 3,
    title: "Innovate with Speed",
    desc: "Create higher quality software, deliver on customer expectations and business goals",
    url: "https://www.xivtech.io./p2.jpg",
    link: "DevOps",
  },
  {
    id: 4,
    title: "Embrace Cloud",
    desc: "With Cloud-First accelerate innovation and optimize performance",
    url: "https://www.xivtech.io./p3.jpg",
    link: "Cloud Services",
  },
];
const App = () => {
  return (
    <div className="container">
      <h4>Let's Collaborate</h4>
      {data.map((item) => (
        <>
          <CollaborateComp key={item.id} item={item} />
          <div className="link hide-small-medium">
            <p>{item.link}</p>
            <BsArrowRight />
          </div>
        </>
      ))}
      <Button />
    </div>
  );
};

export default App;

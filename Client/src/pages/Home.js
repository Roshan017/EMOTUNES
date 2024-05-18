import React from "react";
import { useLocation /*useNavigate*/ } from "react-router-dom";

export default function Home() {
  const Name = useLocation();
  return (
    <div>
      <h2>Hello {Name.state.id} , Welcome to EMOTUNES </h2>
    </div>
  );
}

import { useEffect } from "react";
import HomeBody from "./components/HomeBody";
import * as websocketService from "./services/websocket";

export default function App() {
  useEffect(() => {
    websocketService.connect();
  }, []);

  return <HomeBody />;
}

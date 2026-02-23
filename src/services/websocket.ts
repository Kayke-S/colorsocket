/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_ROOM, REGISTER, WEBSOCKET_URL } from "./system";

const ws = new WebSocket(WEBSOCKET_URL);

export function connect() {
  ws.onopen = () => {
    console.log("conectado!");

    ws.send(
      JSON.stringify({
        type: REGISTER,
        room: "led",
        username: "Kayke",
      }),
    );
  };
}

export function sendMessage(content: any, type: string, room?: string) {
  const json = {
    type: type,
    room: room ?? BASE_ROOM,
    message: content,
  };

  console.log("readyState:", ws.readyState);

  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(json));
  } else {
    console.log("WebSocket não está aberto ainda");
  }
}

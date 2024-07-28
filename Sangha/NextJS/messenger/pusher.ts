import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId:      "1840845",
    key:        "fcadcc34d14872941741",
    secret:     "bd8eb46b5f9bee6ae89c",
    cluster:    "eu",
    useTLS:     true
  });

export const clientPusher = new ClientPusher('fcadcc34d14872941741', {
    cluster: 'eu',
    forceTLS: true,
});


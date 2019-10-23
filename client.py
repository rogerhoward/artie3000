#!/usr/bin/env python

import asyncio
import websockets
import random, string
import simplejson as json


def random_id(len=10):
    x = ''.join(random.choices(string.ascii_lowercase + string.digits, k=len))
    return(x)


async def bot():
    async with websockets.connect(
            'ws://local.codewithartie.com:8899/websocket') as websocket:
        # name = input("What's your name? ")
        msg_id = random_id()
        vers = {"cmd": "version", "id": msg_id}

        await websocket.send(json.dumps(vers))
        print(f"> {vers}")

        greeting = await websocket.recv()
        print(f"< {greeting}")

asyncio.get_event_loop().run_until_complete(bot())

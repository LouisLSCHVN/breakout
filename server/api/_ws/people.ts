import {Peer} from "crossws";

let peers: Set<Peer<any>> = new Set()

export default defineWebSocketHandler({
    async open(peer) {
        peers.add(peer)

        const numberOfPeople = await useStorage().getItem('ws:people') as number;

        let newNumberOfPeople = (numberOfPeople || 0) + 1;
        await useStorage().setItem('ws:people', newNumberOfPeople)

        for(const people of peers) {
            people.send(newNumberOfPeople.toString())
        }
    },
    async close(peer) {
        peers.delete(peer)

        const numberOfPeople = await useStorage().getItem('ws:people') as number
        if(!numberOfPeople) {
            return;
        }
        const newNumberOfPeople = numberOfPeople - 1;
        await useStorage().setItem('ws:people', newNumberOfPeople);

        for(const people of peers) {
            people.send(newNumberOfPeople.toString())
        }
    },
});
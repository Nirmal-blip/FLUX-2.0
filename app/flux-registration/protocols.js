export const EVENT_PROTOCOLS = {
    // Competitions - TEAM
    "hackathon": { type: "TEAM", min: 3, max: 4, label: "SQUAD" },
    "robo-soccer": { type: "TEAM", min: 2, max: 4, label: "CREW" },
    "e-sports-free-fire": { type: "TEAM", min: 4, max: 5, label: "CLAN" },
    "e-sports-bgmi": { type: "TEAM", min: 4, max: 5, label: "CLAN" },
    "bridge-building": { type: "TEAM", min: 3, max: 4, label: "CONSTRUCTORS" },
    "circuit-debugging": { type: "TEAM", min: 1, max: 2, label: "PAIR" },
    "startup-idea-pitch": { type: "TEAM", min: 1, max: 4, label: "FOUNDERS" },
    "tech-scavenger-hunt": { type: "TEAM", min: 2, max: 3, label: "HUNTERS" },
    "iot-challenge": { type: "TEAM", min: 2, max: 4, label: "ENGINEERS" },

    // Solo / Individual
    "virtual-stock-market": { type: "SOLO", min: 1, max: 1 },
    "dsa-competition": { type: "SOLO", min: 1, max: 1 },
    "meme-competition": { type: "SOLO", min: 1, max: 1 },
    "photography": { type: "SOLO", min: 1, max: 1 },
    "ui-ux-challenge": { type: "SOLO", min: 1, max: 1 },
    "debugging": { type: "SOLO", min: 1, max: 1 },
    "debugging-round-2": { type: "SOLO", min: 1, max: 1 },
    "youth-parliament": { type: "SOLO", min: 1, max: 1 },
    "artist-performance": { type: "SOLO", min: 1, max: 1 },
    "dj-night": { type: "SOLO", min: 1, max: 1 },
};

export const DEFAULT_PROTOCOL = { type: "TEAM", min: 1, max: 4, label: "TEAM" };

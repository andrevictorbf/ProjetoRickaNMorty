export interface CharacterType {
    [x: string]: unknown;
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    episode: string[];
    url: string;
    created: string;
}
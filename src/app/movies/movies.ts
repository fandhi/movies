
export interface Results {
    title: string;
    episode_id: number;
    opening_crawl: string;
}
// export interface IMovies {
//     people: string,
//     planets: string,
//     films: string,
//     species: string,
//     vehicles: string,
//     starships: string
// }
export interface IMovies {
    count: string,
    next: string,
    previous: string,
    results: Results[]
}
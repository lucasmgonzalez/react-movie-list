import { getMoviesBySearchTerm } from "services/tmdb/api";

export default async function (req, res) {
    const search = req.query.search;

    res.json(await getMoviesBySearchTerm(search));
}

import { getTrendingMovies } from "services/tmdb/api";

export default async function (req, res) {
    const timeWindow = req.query.timeWindow;

    res.json(await getTrendingMovies(timeWindow));
}

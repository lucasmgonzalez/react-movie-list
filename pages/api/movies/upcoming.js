import { getUpcomingMovies } from "services/tmdb/api";

export default async function (req, res) {
    const page = req.query.page || 1;

    res.json(await getUpcomingMovies(page));
}

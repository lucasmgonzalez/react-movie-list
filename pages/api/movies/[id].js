import { getMovieById } from "services/tmdb/api";

export default async function (req, res) {
    const id = req.query.id;

    res.json(await getMovieById(id));
}

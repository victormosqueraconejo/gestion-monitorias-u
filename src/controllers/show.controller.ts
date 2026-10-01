import { Request, Response} from 'express';
import Show from '../models/show.model';



export const listShows = async (req: Request, res : Response) => {
    try {

        const shows = await Show.find()

        res.status(200).json(shows)

    } catch (error) {
        res.status(500).json({error: 'Error al listar shows'})
    }
}


export const deleteShows = async (req: Request, res: Response) => {
    try {
        const { id} = req.params

        await Show.findByIdAndDelete(id)

        res.status(200).json({message: 'Show eliminado con exito'})
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar el show'})
    }
}

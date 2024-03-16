export const deleteAll = (req: any, res: any) => {
    res
        .status(204)
        .json({title: 'All data is deleted'})
}
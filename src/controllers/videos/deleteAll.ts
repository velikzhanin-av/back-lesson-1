export const deleteAll = (req: any, res: any) => {
    res
        .status(204)
        .json({result: 'All data deleted'})
}
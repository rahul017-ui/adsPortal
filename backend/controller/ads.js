const { ads } = require('../model/ads')

const getAllCompanies = async (req, res) => {
    try {
        const users = await ads.aggregate([{ "$limit" : 3 },
            { $lookup: 
                { from: 'companys',
                 localField: 'companyId',
                  foreignField: '_id',
                   as: 'companies' } }, 
                   { $unwind: '$companies' },
                   {
                    $project:
                    {
                        _id: 0, name: '$companies.name',
                        primaryText: 1,
                        headline: 1, description: 1,
                        CTA: 1,
                        imageUrl: 1,
                        url: '$companies.url'
                    }
                }
                ])
        res.json(users)
    } catch (error) {
        res.json(({ message: error }))
    }
}

const searchCompany = async (req, res) => {

    try {
        const user = await ads.aggregate([

            {
                $lookup: {
                    from: 'companys',
                    localField: 'companyId',
                    foreignField: '_id',
                    as: 'companies'
                }
            },
            { $unwind: '$companies' },
            {
                $match: {
                    $or: [{ primaryText: { $regex: new RegExp(req.params.key, "i") } },
                    { headline: { $regex: new RegExp(req.params.key, "i") } },
                    { description: { $regex: new RegExp(req.params.key, "i") } },
                    { 'companies.name': { $regex: new RegExp(req.params.key, "i") } }
                    ]
                }
            },
            {
                $project:
                {
                    _id: 0, name: '$companies.name',
                    primaryText: 1,
                    headline: 1, description: 1,
                    CTA: 1,
                    imageUrl: 1,
                    url: '$companies.url'
                }
            }
        ])
        res.json(user)
    } catch (error) {
        console.log(error)
        res.json(({ message: error }))

    }
}




module.exports = {
    getAllCompanies,
    searchCompany
}
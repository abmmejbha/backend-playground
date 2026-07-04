import path from 'path'

export const getTrianglePage = (req, res) => {
    res.status(200).sendFile(path.resolve('views', 'triangle.html'))
}

export const postTriangleArea = (req, res) => {
    const {base, height} = req.body
    const area = 0.5 * base * height
    res.status(200).json({ area })
}

export const getCirclePage = (req, res) => {
    res.status(200).sendFile(path.resolve('views', 'circle.html'))
}

export const postCicleArea = (req, res) => { 
    const {radius} = req.body
    const area = Math.PI * radius * radius
    res.status(200).json({area})
}
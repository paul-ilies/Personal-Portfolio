const { projects } = require("./data/projects");

const fetchProjects = async (req, res) => {
    try {
        const project = projects.map(reteta => {
            return { ...reteta }
        })
        await res.status(200).json(project)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = { fetchProjects }
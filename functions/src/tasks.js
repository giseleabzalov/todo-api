import { getFirestoreInstance } from "./utils.js";

export function getAllTasks(req, res) {
    const db = getFirestoreInstance();
    db.collection('tasks').get()
    .then(collection => {
        const tasks = collection.docs.map(doc => ({ taskId: doc.Id, ...doc.data() }))
        res.send(tasks)
    })
    .catch((err => res.status(500).json({error: err.message})))
}

export async function addTask(req, res) {
    
}
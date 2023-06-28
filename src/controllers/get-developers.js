import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '..', 'data', 'db.json');

const getJobsByTitle = async () => {
  try {
    const json = await readFile(src, 'utf-8');
    const data = JSON.parse(json);
    return data;
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong" };
  }
};

export async function getReactDevelopers(query) {
  const data = await getJobsByTitle();
  if (query) {
    const result = data.filter(job => job.job_title.toLowerCase().includes(query.toLowerCase()));
    if (result.length) return result;
    return { message: "Nothing found" };
  }
  return data;
}

export async function getDevelopersById(id) {
  const data = await getJobsByTitle();
  const result = data.find(job => job.id == id);
  if (result) return result;
  return { message: "Nothing found" };
}

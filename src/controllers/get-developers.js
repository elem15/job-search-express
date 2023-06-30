import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '..', 'data', 'db.json');

const getJobs = async () => {
  try {
    const json = await readFile(src, 'utf-8');
    const data = JSON.parse(json);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function getReactDevelopers(query, page) {
  let data = await getJobs();
  if (query) {
    data = data.filter(job => job.job_title.toLowerCase().includes(query.toLowerCase()));
  }
  if (page) {
    const endPage = +page * 5;
    data = data.slice(endPage - 5, endPage);
  }
  return data;
}

export async function getDevelopersById(id) {
  const data = await getJobs();
  const result = data.find(job => job.id == id);
  if (result) return result;
  return { message: "Nothing found" };
}

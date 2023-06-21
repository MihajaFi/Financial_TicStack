import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export function getRacine(){
    const index = __dirname.indexOf("/src");
    return __dirname.slice(0,index);
}
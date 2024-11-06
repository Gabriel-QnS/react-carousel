import fs from 'fs';

function Carousel(){
    const imgPath = '../assets';
    async function countFiles(path) {
        try {
            const files = await fs.readdir(imgPath);
            return files
        } catch {
            console.error(error)
        }
    }
    
    const pics = [countFiles];
    console.log(pics);
    
}
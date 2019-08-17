/**
 * Read a source file.
 * @param file path to the file relative to the project parent directory. Must not begin with a slash.
 */
export function readTextFile(file)
{
    file = "../" + file;
    let rawFile = new XMLHttpRequest();
    let allText = null;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    };
    rawFile.send(null);
    return allText;
}